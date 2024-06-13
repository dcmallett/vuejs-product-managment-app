import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  'https://rxqxtdrljuiewqwuinew.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4cXh0ZHJsanVpZXdxd3VpbmV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgzMTk2NzcsImV4cCI6MjAzMzg5NTY3N30.Z_-2Ycd8XcEY7w9g04U5YPrDJbHeCzccG4MaM1ogjpU'
)
