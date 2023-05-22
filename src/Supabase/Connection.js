import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ygtvgstjazriarrjhcmu.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlndHZnc3RqYXpyaWFycmpoY211Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQzODg5OTIsImV4cCI6MTk5OTk2NDk5Mn0.qdAhkcx4DzUloHq6mCR32Twe4nO9-vRb53ng6OKTYIw";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
