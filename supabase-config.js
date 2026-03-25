
// supabase-config.js
const SUPABASE_URL = 'https://vybiidiilwywlnotzfdr.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5YmlpZGlpbHd5d2xub3R6ZmRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0NDY0NjYsImV4cCI6MjA5MDAyMjQ2Nn0.ecqpXVyHyTftHdKgIEVJrKnuecRs9I8n_lm2x8lBPfg';

// This creates the connection once for all pages
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);