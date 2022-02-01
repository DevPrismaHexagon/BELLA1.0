<?php
   class conexion{  
      private $host = "localhost";
      private $database_name = "mydb";
      private $username = "root";
      private $password = "";

      protected $conexion_db;

      public function conexion(){
         try{
            $this->conexion_db = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->database_name, $this->username, $this->password);
            $this->conexion_db->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
            $this->conexion_db->exec("set names utf8");
            return $this->conexion_db;
            // $this->conexion_db=new PDO("mysql:host=localhost; dbname=mydb", "root", "");
            // $this->conexion_db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            // $this->conexion_db->exec("SET CHARACTER SET utf8");
            // return $this->conexion_db;
         }catch(PDOException $exception){
            echo "Database could not be connected: " . $exception->getMessage();
            die();
         }
      }
   }