/*
  # Initial HelpHub Schema

  1. New Tables
    - `profiles`: Stores user profile information
    - `opportunities`: Stores volunteer opportunities
    - `volunteer_signups`: Tracks user signups for opportunities
    - `resources`: Manages resource offerings and requests
    - `community_tips`: Stores community service tips and advice
  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to access their own data
    - Add policies for public access to read opportunities and resources
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  full_name text,
  location text,
  skills text[] DEFAULT '{}',
  interests text[] DEFAULT '{}',
  avatar_url text
);

-- Create opportunities table
CREATE TABLE IF NOT EXISTS opportunities (
  id bigint GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  created_at timestamptz DEFAULT now(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  location text NOT NULL, 
  date text NOT NULL,
  contact text NOT NULL,
  user_id uuid NOT NULL REFERENCES auth.users(id)
);

-- Create volunteer_signups table
CREATE TABLE IF NOT EXISTS volunteer_signups (
  id bigint GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  created_at timestamptz DEFAULT now(),
  user_id uuid NOT NULL REFERENCES auth.users(id),
  opportunity_id bigint NOT NULL REFERENCES opportunities(id),
  status text NOT NULL DEFAULT 'pending'
);

-- Create resources table
CREATE TABLE IF NOT EXISTS resources (
  id bigint GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  created_at timestamptz DEFAULT now(),
  user_id uuid NOT NULL REFERENCES auth.users(id),
  type text NOT NULL CHECK (type IN ('offer', 'request')),
  resource_name text NOT NULL,
  quantity integer NOT NULL DEFAULT 1,
  location text NOT NULL,
  description text NOT NULL
);

-- Create community_tips table
CREATE TABLE IF NOT EXISTS community_tips (
  id bigint GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  created_at timestamptz DEFAULT now(),
  text text NOT NULL,
  category text NOT NULL
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE opportunities ENABLE ROW LEVEL SECURITY;
ALTER TABLE volunteer_signups ENABLE ROW LEVEL SECURITY;
ALTER TABLE resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_tips ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view their own profile" 
  ON profiles 
  FOR SELECT 
  TO authenticated 
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" 
  ON profiles 
  FOR UPDATE 
  TO authenticated 
  USING (auth.uid() = id);

-- Opportunities policies
CREATE POLICY "Anyone can view opportunities" 
  ON opportunities 
  FOR SELECT 
  TO anon, authenticated 
  USING (true);

CREATE POLICY "Authenticated users can create opportunities" 
  ON opportunities 
  FOR INSERT 
  TO authenticated 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own opportunities" 
  ON opportunities 
  FOR UPDATE 
  TO authenticated 
  USING (auth.uid() = user_id);

-- Volunteer signup policies
CREATE POLICY "Users can view their own signups" 
  ON volunteer_signups 
  FOR SELECT 
  TO authenticated 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can sign up for opportunities" 
  ON volunteer_signups 
  FOR INSERT 
  TO authenticated 
  WITH CHECK (auth.uid() = user_id);

-- Resources policies
CREATE POLICY "Anyone can view resources" 
  ON resources 
  FOR SELECT 
  TO anon, authenticated 
  USING (true);

CREATE POLICY "Authenticated users can create resources" 
  ON resources 
  FOR INSERT 
  TO authenticated 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own resources" 
  ON resources 
  FOR UPDATE 
  TO authenticated 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own resources" 
  ON resources 
  FOR DELETE 
  TO authenticated 
  USING (auth.uid() = user_id);

-- Community tips policies
CREATE POLICY "Anyone can view community tips" 
  ON community_tips 
  FOR SELECT 
  TO anon, authenticated 
  USING (true);

-- Insert some sample community tips
INSERT INTO community_tips (text, category) VALUES
  ('Always confirm the details of a volunteer opportunity before committing to ensure it aligns with your schedule and skills.', 'Volunteering Basics'),
  ('When sharing resources, provide clear photos and detailed descriptions to ensure recipients know exactly what they''re receiving.', 'Resource Sharing'),
  ('Meet in public places when exchanging resources for the first time with someone you don''t know.', 'Safety'),
  ('Start small with your volunteer commitments and gradually increase as you become more comfortable with the process.', 'Volunteering Basics'),
  ('Consider organizing community events that bring together volunteers and resource providers to strengthen local connections.', 'Community Building'),
  ('Always communicate clearly and promptly with both volunteer coordinators and resource recipients to maintain trust.', 'Communication'),
  ('Document your volunteer hours and impacts - they may be useful for resumes, college applications, or personal growth tracking.', 'Volunteering Basics'),
  ('Before requesting resources, check if you might be able to find what you need through existing community programs.', 'Resource Sharing'),
  ('When leading volunteer groups, delegate tasks based on individual strengths and interests for maximum effectiveness.', 'Leadership'),
  ('Share your positive experiences to inspire others to join volunteer efforts in your community.', 'Community Building');

-- Create function to handle new user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, location, skills, interests)
  VALUES (new.id, '', '', '{}', '{}');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to automatically create profile when user signs up
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();