export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      opportunities: {
        Row: {
          id: number
          created_at: string
          title: string
          description: string
          category: string
          location: string
          date: string
          contact: string
          user_id: string
        }
        Insert: {
          id?: number
          created_at?: string
          title: string
          description: string
          category: string
          location: string
          date: string
          contact: string
          user_id: string
        }
        Update: {
          id?: number
          created_at?: string
          title?: string
          description?: string
          category?: string
          location?: string
          date?: string
          contact?: string
          user_id?: string
        }
      }
      volunteer_signups: {
        Row: {
          id: number
          created_at: string
          user_id: string
          opportunity_id: number
          status: string
        }
        Insert: {
          id?: number
          created_at?: string
          user_id: string
          opportunity_id: number
          status: string
        }
        Update: {
          id?: number
          created_at?: string
          user_id?: string
          opportunity_id?: number
          status?: string
        }
      }
      resources: {
        Row: {
          id: number
          created_at: string
          user_id: string
          type: 'offer' | 'request'
          resource_name: string
          quantity: number
          location: string
          description: string
        }
        Insert: {
          id?: number
          created_at?: string
          user_id: string
          type: 'offer' | 'request'
          resource_name: string
          quantity: number
          location: string
          description: string
        }
        Update: {
          id?: number
          created_at?: string
          user_id?: string
          type?: 'offer' | 'request'
          resource_name?: string
          quantity?: number
          location?: string
          description?: string
        }
      }
      profiles: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          full_name: string
          location: string
          skills: string[]
          interests: string[]
          avatar_url: string | null
        }
        Insert: {
          id: string
          created_at?: string
          updated_at?: string
          full_name: string
          location: string
          skills?: string[]
          interests?: string[]
          avatar_url?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          full_name?: string
          location?: string
          skills?: string[]
          interests?: string[]
          avatar_url?: string | null
        }
      }
      community_tips: {
        Row: {
          id: number
          created_at: string
          text: string
          category: string
        }
        Insert: {
          id?: number
          created_at?: string
          text: string
          category: string
        }
        Update: {
          id?: number
          created_at?: string
          text?: string
          category?: string
        }
      }
    }
  }
}