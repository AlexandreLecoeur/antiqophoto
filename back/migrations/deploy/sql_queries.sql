-- Deploy antiqophoto:sql_queries to pg

BEGIN;
------------------------------PHOTOGRAPHER------------------------------
--CREATE
CREATE FUNCTION insert_photographer(json) RETURNS photographer AS $$
    INSERT INTO "photographer" (
        "firstname",
        "lastname",
        "birthdate",
        "deathdate",
        "activity_period",
        "biography",
        "selfie"      
      ) VALUES (
        $1->>'firstname',
        $1->>'lastname',
        $1->>'birthdate',
        $1->>'deathdate',
        $1->>'activity_period',
        $1->>'biography',
        $1->>'selfie'          
    )  RETURNING *
$$ LANGUAGE sql ;


--UPDATE
CREATE FUNCTION update_photographer(json) RETURNS photographer AS $$
    UPDATE "photographer" SET       
        "firstname" = COALESCE ($1->>'firstname',"firstname"),
        "lastname" = COALESCE ($1->>'lastname',"lastname"),
        "birthdate" = COALESCE ($1->>'birthdate',"birthdate"),
        "deathdate" = COALESCE ($1->>'deathdate',"deathdate"),
        "activity_period" = COALESCE ($1->>'activity_period',"activity_period"),
        "biography" = COALESCE ($1->>'biography',"biography"),
        "selfie"= COALESCE ($1->>'selfie',"selfie"),
        "updated_at" = now()
    WHERE "id" = ($1->>'id')::int
    RETURNING *
$$ LANGUAGE sql;

--READ
-- Sélectionner tous les photographes (nom et prénoms pour la page biographie)



CREATE FUNCTION get_one_photographer (json) RETURNS photographer AS $$
    SELECT * FROM "photographer"
      WHERE id = ($1->>'id')::int 
$$ LANGUAGE sql STRICT;


--DELETE
CREATE FUNCTION delete_photographer(json) RETURNS photographer AS $$
    DELETE FROM "photographer"
    WHERE id = ($1->>'id')::int
    RETURNING *
$$ LANGUAGE sql STRICT;
------------------------------TOPIC------------------------------
-- INSERT
CREATE FUNCTION insert_topic(json) RETURNS topic AS $$
    INSERT INTO "topic" (
        "tag"    
      ) VALUES (
        $1->>'tag'
    ) RETURNING *
$$ LANGUAGE sql ;

--READ

--DELETE
CREATE FUNCTION delete_topic(json) RETURNS topic AS $$
    DELETE FROM topic
    WHERE id = ($1->>'id')::int
    RETURNING *
$$ LANGUAGE sql STRICT;
------------------------------ARTICLE------------------------------
CREATE FUNCTION insert_article (json) RETURNS article AS $$
    INSERT INTO "article" (
        "title",
        "content"
             
      ) VALUES (
        $1->>'title',
        $1->>'content'
    ) RETURNING *
$$ LANGUAGE sql ;

--UPDATE
CREATE FUNCTION update_article(json) RETURNS article AS $$
    UPDATE "article" SET
        "title" = COALESCE($1->>'title', "title"),
        "content" = COALESCE($1->>'content', "content"),
        "updated_at" = now()
    WHERE id = ($1->>'id')::int
    RETURNING *
$$ LANGUAGE sql;


--READ ALL
CREATE FUNCTION get_all_articles(json) RETURNS "article" AS $$
    SELECT * FROM "article"
$$ LANGUAGE sql STRICT;

--READ ONE
CREATE FUNCTION get_one_article(json) RETURNS "article" AS $$
    SELECT * FROM "article"
    WHERE id = ($1->>'id')::int
$$ LANGUAGE sql STRICT;

--DELETE
CREATE FUNCTION delete_article(json) RETURNS article AS $$
    DELETE FROM "article"
    WHERE id = ($1->>'id')::int
    RETURNING *
$$ LANGUAGE sql STRICT;

------------------------------PICTURE------------------------------
-- CREATE
CREATE FUNCTION insert_picture(json) RETURNS picture AS $$
    INSERT INTO "picture" (
        "shelf_mark",
        "description",
        "author",
        "link",
        "use"
      ) VALUES (
        $1->>'shelf_mark',
        $1->>'description',
        $1->>'author',
        $1->>'link',
        ($1->>'use')::STATUS
    ) RETURNING *
$$ LANGUAGE sql ;

--UPDATE
CREATE FUNCTION update_picture(json) RETURNS picture AS $$
    UPDATE "picture" SET
        "shelf_mark" = COALESCE($1->>'shelf_mark', "shelf_mark"),
        "description" = COALESCE($1->>'description', "description"),
        "author" = COALESCE($1->>'author', "author"),
        "link" = COALESCE($1->>'link', "link"),
        "use" = COALESCE(($1->>'use')::STATUS, "use"),
        "updated_at" = now()
    WHERE id = ($1->>'id')::int
    RETURNING *
$$ LANGUAGE sql;

--DELETE
CREATE FUNCTION delete_picture(json) RETURNS picture AS $$
    DELETE FROM "picture"
    WHERE id = ($1->>'id')::int
    RETURNING *
$$ LANGUAGE sql STRICT;

--READ PAR PHOTOGRAPHE

--SELECT PAR THEME



--SELECT PAR PERSONNE IDENTIFIÉE


------------------------------PLACE------------------------------
CREATE FUNCTION insert_place(json) RETURNS place AS $$
    INSERT INTO "place" (
        "address",
        "city",
        "department",
        "country",
        "status"       
      ) VALUES (
        $1->>'address',
        $1->>'city',
        $1->>'department',
        $1->>'country',
        ($1->>'status')::EVENT_PLACE       
    ) RETURNING *
$$ LANGUAGE sql ;


--UPDATE
CREATE FUNCTION update_place(json) RETURNS place AS $$
    UPDATE "place" SET
        "address" = COALESCE($1->>'address', "address"),
        "city" = COALESCE($1->>'city', "city"),
        "department" = COALESCE($1->>'department', "department"),
        "country" = COALESCE($1->>'country', "country"),
        "status" = COALESCE(($1->>'use')::EVENT_PLACE, "status"),
        "updated_at" = now()
    WHERE id = ($1->>'id')::int
    RETURNING *
$$ LANGUAGE sql;
------------------------------LABEL------------------------------
CREATE FUNCTION insert_label(json) RETURNS label AS $$
    INSERT INTO "label" (
        "tag"    
      ) VALUES (
        $1->>'tag'
    ) RETURNING *

$$ LANGUAGE sql ;

--SELECT ALL
--SELECT ONE



--DELETE
CREATE FUNCTION delete_label(json) RETURNS label AS $$
    DELETE FROM "label"
    WHERE id = ($1->>'id')::int
    RETURNING *
$$ LANGUAGE sql STRICT;

------------------------------USERS------------------------------
-- CREATE
CREATE FUNCTION insert_user(json) RETURNS users AS $$
    INSERT INTO "users" (
        "email",
        "firstname",
        "lastname",
        "password",
        "role"      
      ) VALUES (
        $1->>'email',
        $1->>'firstname',
        $1->>'lastname',
        $1->>'password',
        ($1->>'role')::RIGHT
    ) RETURNING *
$$ LANGUAGE sql ;

--SELECT
CREATE FUNCTION select_one_user(json) RETURNS "users" AS $$
    SELECT * FROM "users"
    WHERE id = ($1->>'id')::int
$$ LANGUAGE sql STRICT;

--UPDATE

CREATE FUNCTION update_users(int, json) RETURNS "users" AS $$
    UPDATE "users" SET
        "email" = COALESCE($2->>'email', "email"),
        "firstname" = COALESCE($2->>'firstname', "firstname"),
        "lastname" = COALESCE($2->>'lastname', "lastname"),
        "password" = COALESCE($2->>'password', "password"),
        "role" = COALESCE(($2->>'role')::RIGHT, "role"),
        "updated_at" = now()
    WHERE id = $1
    RETURNING *
$$ LANGUAGE sql STRICT;

--DELETE 
CREATE FUNCTION delete_user(json) RETURNS "users" AS $$
    DELETE FROM "users"
    WHERE id = ($1->>'id')::int
    RETURNING *
$$ LANGUAGE sql STRICT;

COMMIT;
