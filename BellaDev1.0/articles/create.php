<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: GET, POST, PUT, PATCH, POST, DELETE, OPTIONS");;
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Content-Type, Accept");

    include_once './database.php';
    include_once './class/articles.php';

    $database = new Database();
    $db = $database->getConnection();

    $article = new Article($db);

    $data = json_decode(file_get_contents("php://input"));

    echo json_encode($data);

    if($data){
        $article->name = $data->name;
        $article->description = $data->description;

        if($article->createArticle()){
            echo 'Articulo creado correctamente.';
            exit();
        } else{
            echo 'Articulo no pudo ser creado.';
        }
    }
?>