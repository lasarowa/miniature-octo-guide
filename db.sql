-- Minimal schema for Supabase (public schema)
create table if not exists public.users (
  id uuid primary key default gen_random_uuid(),
  auth_id uuid unique,
  name text,
  email text unique not null,
  role text not null default 'member',
  created_at timestamptz default now()
);

create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.users(id) on delete cascade,
  plan text not null,
  status text not null,
  stripe_customer_id text,
  current_period_end timestamptz,
  created_at timestamptz default now()
);

create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  summary text,
  duration_minutes int check (duration_minutes between 12 and 19),
  level text check (level in ('Beginner','Intermediate','Advanced')) default 'Beginner',
  icon text,
  topics text[] default '{}',
  trailer_url text,
  published boolean default false,
  created_at timestamptz default now()
);

create table if not exists public.lessons (
  id uuid primary key default gen_random_uuid(),
  course_id uuid references public.courses(id) on delete cascade,
  slug text not null,
  title text not null,
  video_url text not null,
  transcript_md text,
  resources jsonb default '[]',
  order_index int not null default 0,
  unique(course_id, slug)
);

create table if not exists public.purchases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.users(id) on delete cascade,
  course_id uuid references public.courses(id),
  plan text,
  price int not null,
  currency text not null default 'GBP',
  tax_rate numeric,
  stripe_payment_intent_id text,
  invoice_url text,
  created_at timestamptz default now()
);

create table if not exists public.progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.users(id) on delete cascade,
  course_id uuid references public.courses(id) on delete cascade,
  lesson_id uuid references public.lessons(id) on delete cascade,
  completed_at timestamptz,
  day_index int check (day_index between 1 and 30),
  unique(user_id, lesson_id)
);

create table if not exists public.quizzes (
  id uuid primary key default gen_random_uuid(),
  lesson_id uuid references public.lessons(id) on delete cascade
);

create table if not exists public.quiz_questions (
  id uuid primary key default gen_random_uuid(),
  quiz_id uuid references public.quizzes(id) on delete cascade,
  body text not null,
  choices text[] not null,
  answer text not null
);

-- Basic RLS enablement (adjust in dashboard for fine-grained control)
alter table public.users enable row level security;
alter table public.subscriptions enable row level security;
alter table public.courses enable row level security;
alter table public.lessons enable row level security;
alter table public.purchases enable row level security;
alter table public.progress enable row level security;
alter table public.quizzes enable row level security;
alter table public.quiz_questions enable row level security;
