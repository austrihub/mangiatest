import { useEffect } from "react";
import { supabase } from "./supabaseClient";

export default function TestSupabase() {
  useEffect(() => {
    console.log("Probando Supabase...");

    async function load() {
      const { data, error } = await supabase
        .from("test_table")   // ✅ NOMBRE REAL
        .select("*")
        .limit(5);

      console.log("SUPABASE -> DATA:", data);
      console.log("SUPABASE -> ERROR:", error);
    }

    load();
  }, []);

  return <div>Probando Supabase...</div>;
}
