import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/supabase';

// These would typically come from environment variables
// For demo purposes, we're using placeholder values
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project-url.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);