-- Revert antiqophoto:create_tables from pg

BEGIN;

DROP TABLE "label", "article","users","picture","photographer","place","topic","article_has_label", "picture_has_article","picture_has_topic","picture_has_photographer", "picture_has_users","photographer_has_place" CASCADE; 
DROP DOMAIN "email","password";
DROP TYPE "right","status","event_place";

COMMIT;
