import { createClient } from "@supabase/supabase-js";
const supaBaseUrl = "https://gcbghlsvcpvtxhtjoyfv.supabase.co";
const supaBaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjYmdobHN2Y3B2dHhodGpveWZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4NzA0OTMsImV4cCI6MjA2MDQ0NjQ5M30.JxEVtiVgbcBLuRVZpc8nozXV6iWr29E9cxLFCNjtx9Y";

export const supabase = createClient(supaBaseUrl, supaBaseAnonKey);
