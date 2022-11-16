-- Deploy antiqophoto:create_tables to pg

BEGIN;

------------------------------- DOMAINS -------------------------------
CREATE DOMAIN "email" AS text CHECK (
value ~ '^[a-zA-Z0-9.!#$%&''*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$' -- vérification du format notamment : @ et la longueur du domaine.
);
CREATE DOMAIN "password" AS text CHECK (
value ~ '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$' -- vérification mot de passe : une majuscule, une minuscule, un chiffre et minimum 8 caractères.
);

------------------------------- TYPES -------------------------------
CREATE TYPE "right" AS ENUM ('admin', 'user');
CREATE TYPE "status" AS ENUM ('gallery', 'other_use');
CREATE TYPE "event_place" AS ENUM ('birth', 'death', 'address', 'other_city');

------------------------------- TABLES -------------------------------
CREATE TABLE "label" (
"id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
"tag" TEXT NOT NULL UNIQUE
);

CREATE TABLE "article"(
"id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
"title" TEXT NOT NULL UNIQUE,
"content" TEXT NOT NULL,
"created_at"TIMESTAMPTZ NOT NULL DEFAULT now(),
"updated_at"TIMESTAMPTZ
);

CREATE TABLE "users"(
"id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
"email" EMAIL NOT NULL UNIQUE,
"firstname" VARCHAR(32) NOT NULL,
"lastname" VARCHAR(32) NOT NULL,
"password" PASSWORD NOT NULL,
"role" RIGHT DEFAULT 'user',
"created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
"updated_at" TIMESTAMPTZ
);

CREATE TABLE "picture"(
"id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
"shelf_mark" TEXT NOT NULL UNIQUE,
"description" TEXT,
"author" TEXT,
"identify_person"TEXT,
"link" TEXT NOT NULL,
"use" STATUS DEFAULT 'gallery',
"created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
"updated_at" TIMESTAMPTZ
);

CREATE TABLE "photographer"(
"id"INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
"firstname" TEXT NOT NULL,
"lastname" TEXT NOT NULL,
"birthdate" TEXT NULL,
"deathdate" TEXT NULL,
"activity_period"TEXT NULL,
"biography"TEXT NULL,
"selfie"TEXT NULL,
"created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
"updated_at" TIMESTAMPTZ    
);
    
CREATE TABLE "place"(
"id"INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,    
"address" TEXT NULL,
"city" TEXT NOT NULL,
"department" TEXT NULL,
"country" TEXT NOT NULL,
"status" EVENT_PLACE NOT NULL,
"created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
"updated_at" TIMESTAMPTZ        
);

CREATE TABLE "topic" (
"id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
"tag" TEXT NOT NULL UNIQUE
);
------------------------------- TABLES D'ASSOCIATION-------------------------------
CREATE TABLE "article_has_label" (
"article_id" INT REFERENCES "article"("id") ON DELETE CASCADE,
"label_id" INT REFERENCES "label"("id") ON DELETE CASCADE,
PRIMARY KEY("article_id", "label_id") 
);

CREATE TABLE "picture_has_article" (
"picture_id" INT REFERENCES "picture"("id") ON DELETE CASCADE,
"article_id" INT REFERENCES "article"("id") ON DELETE CASCADE,
PRIMARY KEY("picture_id", "article_id")
);

CREATE TABLE "picture_has_topic" (
"picture_id" INT REFERENCES "picture"("id") ON DELETE CASCADE,
"topic_id" INT REFERENCES "topic"("id") ON DELETE CASCADE,
PRIMARY KEY("picture_id", "topic_id")
);

CREATE TABLE "picture_has_photographer" (
"picture_id" INT REFERENCES "picture"("id") ON DELETE CASCADE,
"photographer_id" INT REFERENCES "photographer"("id") ON DELETE CASCADE,
PRIMARY KEY("picture_id", "photographer_id")
);

CREATE TABLE "picture_has_users" (
"picture_id" INT REFERENCES "picture"("id") ON DELETE CASCADE,
"users_id" INT REFERENCES "users"("id") ON DELETE CASCADE,
PRIMARY KEY("picture_id", "users_id")
);

CREATE TABLE "photographer_has_place" (
"photographer_id" INT REFERENCES "photographer"("id") ON DELETE CASCADE,
"place_id" INT REFERENCES "place"("id") ON DELETE CASCADE,
PRIMARY KEY("photographer_id", "place_id")
);

COMMIT;
