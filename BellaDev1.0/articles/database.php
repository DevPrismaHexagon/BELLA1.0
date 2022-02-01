<?php 
    class Database {
        private $host = "localhost";
        private $database_name = "mydb";
        private $username = "root";
        private $password = "";

        protected $conn;

        public function getConnection(){
            $this->conn = null;
            try{
                $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->database_name, $this->username, $this->password);
                $this->conn->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
                $this->conn->exec("SET CHARACTER SET utf8");
                return $this->conn;
            }catch(PDOException $exception){
                echo "Database could not be connected: " . $exception->getMessage();
                die();
            }
        }
    }  
?>