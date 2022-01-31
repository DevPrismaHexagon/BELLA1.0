<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: GET, POST, PUT, PATCH, POST, DELETE, OPTIONS");;
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Content-Type, Accept");
    
    include_once("../database.php");
    include_once("./articles.php");

    $database = new Database();
    $db = $database->getConnection();

    $items = new article($db);

    $data = json_decode(file_get_contents('php://input'));

    if($data != NULL){
 
        $option= $data->option;

        if($option == 1){
            $items->get_articles();
        }
        else if($option == 2){
            $items->add_article($data->article->name, $data->article->description);
        }
        else if($option == 3){
            $items->delete_article($data->id);
        }
        else if($option == 4){
            $items->get_article($data->id);
        }
        else if($option == 5){
            $items->update_article($data);
        }
    }
?>