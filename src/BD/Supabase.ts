  import { createClient } from '@supabase/supabase-js'
  
  const supabaseUrl = "https://gvgjhbfpnphrcqzbdbsc.supabase.co"
  const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2Z2poYmZwbnBocmNxemJkYnNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYwMTE1MjYsImV4cCI6MjAxMTU4NzUyNn0.C7cqpPvlNjS9KHlVyhpqfsLKNU_uXVmrxxyiycuVN_M"
  
  export const connect = createClient(supabaseUrl, supabaseAnonKey)