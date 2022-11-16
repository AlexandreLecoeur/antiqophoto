-- Verify antiqophoto:create_tables on pg
-- Verify permet de vérifier que les changements se sont bien exécutés.
-- Transaction (BEGIN)
-- DDL : Data Définition language 
--ici on veut vérifier la structure de la table, c'est à dire que chaque champs existe

BEGIN;

------------------------------- TABLES -------------------------------

SELECT "id","tag"  FROM "label" WHERE false;
SELECT "id","title","content","created_at","updated_at" FROM "article" WHERE false;
SELECT "id","email","firstname","lastname","password","role","created_at","updated_at" FROM "users" WHERE false;
SELECT "id","shelf_mark","description","author","link","use","created_at","updated_at" FROM "picture" WHERE false;
SELECT "id","firstname","lastname","birthdate","deathdate","activity_period","biography","selfie","created_at","updated_at" FROM "photographer" WHERE false;
SELECT "id","address","city","department","country","status","created_at","updated_at" FROM "place" WHERE false;
SELECT "id","tag" FROM "topic" WHERE false;

------------------------------- TABLES D'ASSOCIATION-------------------------------

SELECT "article_id", "label_id" FROM "article_has_label" WHERE false;
SELECT "picture_id", "article_id" FROM "picture_has_article" WHERE false;
SELECT "picture_id", "topic_id" FROM "picture_has_topic" WHERE false;
SELECT "picture_id", "photographer_id" FROM "picture_has_photographer" WHERE false;
SELECT "picture_id", "users_id" FROM "picture_has_users" WHERE false;
SELECT "photographer_id", "place_id" FROM "photographer_has_place" WHERE false;


ROLLBACK;
