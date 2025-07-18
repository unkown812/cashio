-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.transactions (
    id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
    created_at timestamp
    with
        time zone NOT NULL DEFAULT now (),
        transaction_name text,
        amt numeric,
        category text,
        CONSTRAINT transactions_pkey PRIMARY KEY (id)
);

CREATE TABLE public.users (
    id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
    created_at timestamp
    with
        time zone NOT NULL DEFAULT now (),
        name text,
        balance numeric,
        phone bigint,
        email text,
        password text,
        CONSTRAINT users_pkey PRIMARY KEY (id)
);