<?php
    class Article{

        // Connection
        private $conn;

        // Table
        private $db_table = "article";

        // Columns
        public $id;
        public $name;
        public $description;

        // Db connection
        public function __construct($db){
            $this->conn = $db;
        }

        // GET ALL
        public function getArticles(){
            $sqlQuery = "SELECT * FROM " . $this->db_table . "";
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->execute();
            return $stmt;
        }
         
        // UPDATE
        public function updateArticle(){
            $sqlQuery = "UPDATE ". $this->db_table ." SET name = :name, description = :description WHERE id = :id";
        
            $stmt = $this->conn->prepare($sqlQuery);
        
            $this->name=htmlspecialchars(strip_tags($this->name));
            $this->description=htmlspecialchars(strip_tags($this->description));
            $this->id=htmlspecialchars(strip_tags($this->id));
        
            // bind data
            $stmt->bindParam(":name", $this->name);
            $stmt->bindParam(":description", $this->description);
            $stmt->bindParam(":id", $this->id);
        
            if($stmt->execute()){
               return true;
            }
            return false;
        }

        // CREATE
        public function createArticle(){
            $sqlQuery = "INSERT INTO ". $this->db_table ." (id, name, description) VALUES (NULL, :name, :description)";
            $stmt = $this->conn->prepare($sqlQuery);
        
            // sanitize
            $this->name=htmlspecialchars(strip_tags($this->name));
            $this->description=htmlspecialchars(strip_tags($this->description));
        
            // bind data
            $stmt->bindParam(":name", $this->name);
            $stmt->bindParam(":description", $this->description);
        
            if($stmt->execute()){
               return true;
            }
            return false;
        }
        
        // READ single
        public function getSingleArticle(){
            $sqlQuery = "SELECT * FROM ". $this->db_table ." WHERE id = ?";

            $stmt = $this->conn->prepare($sqlQuery);

            $stmt->bindParam(1, $this->id);
            $this->id = htmlspecialchars(strip_tags($this->id));

            $stmt->execute();

            $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
            
            $this->name = $dataRow['name'];
            $this->description = $dataRow['description'];
        }        
        /*
        // DELETE
        function deleteEmployee(){
            $sqlQuery = "DELETE FROM " . $this->db_table . " WHERE id = ?";
            $stmt = $this->conn->prepare($sqlQuery);
        
            $this->id=htmlspecialchars(strip_tags($this->id));
        
            $stmt->bindParam(1, $this->id);
        
            if($stmt->execute()){
                return true;
            }
            return false;
        }
        */
    }
?>