<?php
    header('Content-Type: application/json');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Request-Method: *");
    header("Access-Control-Request-Headers: *");
    header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
    header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization");
    
    include_once("../database.php");

    class article {

        // Connection
        private $conn;

        // Table
        private $db_table = "article";

        // db connection
		public function __construct($db){
			$this->conn = $db;
		}

        // GET ALL
        public function get_articles(){

            $sql="SELECT * FROM article WHERE borrado=1";			
        
            $query = $this->conn->query($sql);

            $result = $query->fetchAll(PDO::FETCH_ASSOC);

            echo json_encode($result);
            exit();

            /*              
            echo "entro 5";
            $sqlQuery = "SELECT * FROM " . $this->db_table . " WHERE borrado = 1";
            echo "entro 6";
            $stmt = $this->conn->prepare($sqlQuery);
            echo "entro 7";
            $result = $stmt->execute();
            echo "entro 8";
            */
        }

        /* 
		function get_articles($search=''){
			if($search!=''){
				$sql="SELECT * FROM {$db_table} WHERE borrado=1 AND user LIKE '%$search%'";
			}else{
				$sql="SELECT * FROM {$db_table} WHERE borrado=1";			
			}
				$resultado=$this->conexion_db->query($sql);
	   			$verificar=$resultado->fetchAll(PDO::FETCH_ASSOC);
				echo json_encode($verificar);
				exit();
		}
        */

        /* 
		function get_articles($search=""){

			if($search!=''){
				$sql="SELECT * FROM article WHERE borrado = 1 AND user LIKE {$search}";
			}else{
				$sql="SELECT * FROM article WHERE borrado=1";			
			}

            $result=$this->conn->query($sql);

            $articles=$result->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($articles);
            exit();
		}
        */
    }
?>