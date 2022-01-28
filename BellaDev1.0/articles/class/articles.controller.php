<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: GET, POST, PUT, PATCH, POST, DELETE, OPTIONS");;
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Content-Type, Accept");
    
    include_once("../database.php");
    include_once("./articles.php");

    $database = new Database();
    $db = $database->getConnection();

    echo "entro 1";

    $items = new article($db);

    echo "entro 2";

    $data = json_decode(file_get_contents('php://input'));

    if($data != NULL){
        echo "entro 3";
        $option= $data->option;

        if($option == 1){
            echo "entro 4";
            $items->get_articles();
            //$itemCount = $stmt->rowCount();
        }
    }
    echo "entro 9";
?>