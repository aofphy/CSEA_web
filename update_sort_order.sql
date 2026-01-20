-- Add order_index column to tables for manual ordering
-- Run this script in your Supabase SQL Editor

-- 1. Add order_index column
alter table public.news add column if not exists order_index bigint default 0;
alter table public.hall_of_fame add column if not exists order_index bigint default 0;
alter table public.publications add column if not exists order_index bigint default 0;

-- 2. Initialize order_index with existing IDs (to preserve insertion order roughly)
update public.news set order_index = id where order_index = 0;
update public.hall_of_fame set order_index = id where order_index = 0;
update public.publications set order_index = id where order_index = 0;
