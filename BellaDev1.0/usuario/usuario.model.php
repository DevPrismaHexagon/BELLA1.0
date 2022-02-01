<?php
	 header('Content-Type: application/json');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Request-Method: *");
    header("Access-Control-Request-Headers: *");
    header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
    header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization");
	  
	include_once("../conexion.php");
	class Usuario extends conexion{
		public function usuarios(){
			parent::__construct();
		}

		function ver_usuario($empezar=1, $buscar=''){
			if($buscar!=''){
				$sql="SELECT * FROM usuarios WHERE borrado=1 AND user LIKE '%$buscar%' ORDER BY user limit $empezar , 2";
			}else{
				$sql="SELECT * FROM usuarios WHERE borrado=1 ORDER BY user limit $empezar , 2";
			}
				$resultado=$this->conexion_db->query($sql);
	   			$verificar=$resultado->fetchAll(PDO::FETCH_ASSOC);
				echo json_encode($verificar);
				exit();
		}
		function eliminar_usuario($id){
			$sql=("UPDATE usuarios SET borrado=0 WHERE id = '$id'");
			$resultado=$this->conexion_db->query($sql);
			if ($resultado) {
				$this->ver_usuario();
			}else{
				echo 'error';
				exit();
			}
		}
		function actualizar_usuario($id,$tipo,$texto){
			$sql=("UPDATE usuarios SET $tipo='$texto' WHERE id = '$id'");
			$resultado=$this->conexion_db->query($sql);
			if ($resultado) {
				$this->ver_usuario();
			}else{
				echo "Error";
				exit();
			}
		}
		function agregar_usuario($user,$password,$rol){
			$sql="INSERT INTO usuarios (user, password, rol, estado, borrado) VALUES ('$user','$password','$rol',1,1)";
			$resultado=$this->conexion_db->query($sql);
			if ($resultado) {
				$this->ver_usuario();
			}else{
				echo "Error";
				exit();
			}
		}
		function paginacion_usuario(){
			$sql="SELECT id FROM usuarios WHERE borrado=1";
			$resultado=$this->conexion_db->query($sql);
			$verificar=$resultado->rowCount();
			echo json_encode($verificar);
			exit();	
		}
	}