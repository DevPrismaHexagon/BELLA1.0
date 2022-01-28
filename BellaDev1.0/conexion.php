<?php
class conexion{  
		protected $conexion_db;
      public function conexion(){
         try{
            $this->conexion_db=new PDO("mysql:host=localhost; dbname=mydb", "root", "");
            $this->conexion_db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->conexion_db->exec("SET CHARACTER SET utf8");
            return $this->conexion_db;
         }catch(Exeption $e){
            echo "La linea del error es ". $e->getLine();
         }
      }
}