<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: GET, POST, PUT, PATCH, POST, DELETE, OPTIONS");;
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Content-Type, Accept");

    include_once './database.php';
    include_once './class/articles.php';

    $database = new Database();
    $db = $database->getConnection();

    $items = new Article($db);

    $stmt = $items->getArticles();
    $itemCount = $stmt->rowCount();

    if($itemCount > 0){
        $employeeArr = array();
        //$employeeArr["body"] = array();
        //$employeeArr["itemCount"] = $itemCount;
        // ojo no borrar, puede servir luego

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            extract($row);
            $e = array(
                "id"            => $id,
                "name"          => $name,
                "description"   => $description,
            );
            array_push($employeeArr, $e);
        }
        echo json_encode($employeeArr);
    }else{
        http_response_code(404);
        echo json_encode(
            array("message" => "No record found.")
        );
    }
?>