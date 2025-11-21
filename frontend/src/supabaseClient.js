
console.log("SUPABASE_URL:", process.env.REACT_APP_SUPABASE_URL);
console.log("SUPABASE_KEY:", process.env.REACT_APP_SUPABASE_ANON_KEY);
// frontend/src/supabaseClient.js


import { createClient } from "@supabase/supabase-js";


const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Supabase: REACT_APP_SUPABASE_URL o REACT_APP_SUPABASE_ANON_KEY no están definidas.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
