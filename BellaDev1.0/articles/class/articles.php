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
        public function get_articles($offset=0, $search=''){
            if($search!=""){
                $sql = "SELECT * FROM article WHERE borrado=1 AND name LIKE '%$search%' ORDER BY name LIMIT $offset, 10";	 
            }else{
                $sql = "SELECT * FROM article WHERE borrado=1 ORDER BY name LIMIT $offset, 10";	
            }

            $query = $this->conn->query($sql);

            $result = $query->fetchAll(PDO::FETCH_ASSOC);

            echo json_encode($result);
            exit();
        }

        public function add_article($name, $description){
            $sql = "INSERT INTO article (name, description) VALUES (:name, :description)";
            
            $stmt= $this->conn->prepare($sql);

            // sanitize
            $name = htmlspecialchars(strip_tags($name));
            $description = htmlspecialchars(strip_tags($description));

            $stmt->bindParam(':name', $name);
            $stmt->bindParam(':description', $description);
            
            $result = $stmt->execute();
            echo json_encode($result);
            exit();
        }

        public function delete_article($id){
            $sql = "UPDATE article SET borrado = 0  WHERE id = :id";
            $stmt= $this->conn->prepare($sql);

            // sanitize
            $id = htmlspecialchars(strip_tags($id));

            $stmt->bindParam(':id', $id);
            
            $result = $stmt->execute();
            echo json_encode($result);
            exit();
        }

        public function get_article($id){
            $sql = "SELECT * FROM article WHERE id = :id";
            $stmt= $this->conn->prepare($sql);

            // sanitize
            $id = htmlspecialchars(strip_tags($id));

            $stmt->bindParam(':id', $id);

            $stmt->execute();
            $result = $stmt->fetch(PDO::FETCH_ASSOC);

            echo json_encode($result);
            exit();
        }

        public function update_article($data){
            $sql = "UPDATE article SET name = :name, description = :description  WHERE id = :id";
            $stmt= $this->conn->prepare($sql);

            // sanitize
            $id = htmlspecialchars(strip_tags($data->article->id));
            $name = htmlspecialchars(strip_tags($data->article->name));
            $description = htmlspecialchars(strip_tags($data->article->description));

            $stmt->bindParam(':name', $name);
            $stmt->bindParam(':description', $description);
            $stmt->bindParam(':id', $id);

            $result = $stmt->execute();

            if($result){
                $this->get_articles();
            }
            echo "Error";
            exit();
        }

        // GET ALL
        public function get_pagination_count(){
            $sql = "SELECT COUNT(*) FROM article WHERE borrado=1";	
        
            $query = $this->conn->query($sql);

            $count = $query->fetchColumn();

            echo json_encode($count);
            exit();
        }

    }
?>