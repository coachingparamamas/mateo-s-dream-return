-- Create enum for wall entry categories
CREATE TYPE public.wall_category AS ENUM ('canciones', 'lugares', 'sabores', 'olores', 'sueños');

-- Create table for dream wall entries
CREATE TABLE public.dream_wall_entries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  category wall_category NOT NULL,
  content TEXT NOT NULL,
  author_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.dream_wall_entries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read entries (public wall)
CREATE POLICY "Anyone can view dream wall entries" 
ON public.dream_wall_entries 
FOR SELECT 
USING (true);

-- Allow anyone to create entries (public contribution)
CREATE POLICY "Anyone can add dream wall entries" 
ON public.dream_wall_entries 
FOR INSERT 
WITH CHECK (true);

-- Enable realtime for the table
ALTER PUBLICATION supabase_realtime ADD TABLE public.dream_wall_entries;