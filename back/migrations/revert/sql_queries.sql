-- Revert antiqophoto:sql_queries from pg

BEGIN;


DROP FUNCTION 
    "insert_photographer",
    "insert_topic",
    "insert_article",
    "insert_picture",
    "insert_place",
    "insert_label",

    "update_photographer",
    "update_article",
    "update_picture",
    "update_place",
    "update_users",

    "get_all_articles",
    "get_one_article",
    "get_one_photographer",
    

    "delete_photographer",
    "delete_topic",
    "delete_article",
    "delete_picture";


  
    
COMMIT;
