import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process?.env?.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process?.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseHeaders = process?.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = createClient(
  "https://gqkuommdmfzmwkzdewma.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdxa3VvbW1kbWZ6bXdremRld21hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDkyNjQyNTIsImV4cCI6MTk2NDg0MDI1Mn0.iF651HDhqynAQRlG8T6wFS3ZEx4dqxHiEiguc0m7-zI",
  {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXQiOiJmOTZjMTA0NmY5MjI3OWYwZTY2MjkxNjciLCJpYXQiOjE2NTcyMjEyMDN9.St2Vt4hM_E1-B9Yd-_6BbrP6qBRQWIGG9EvOjKQWhig",
    },
  }
)

export default supabase
