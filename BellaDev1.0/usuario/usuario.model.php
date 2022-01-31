<?php
	header('Content-Type: application/json');
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

		/*function ver_cuentas(){
			if(!isset($_POST["buscar"])){
				$empezar=seguridad($_POST["empezar"]);	
				$sql="SELECT * FROM usuarios WHERE estado!=3 ORDER BY user limit $empezar , 10";
				$resultado=$this->conexion_db->query($sql);
	   			$verificar=$resultado->fetchAll(PDO::FETCH_ASSOC);
				echo json_encode($verificar);
				exit();	
			}else{
				$buscar = seguridad($_POST["buscar"]);
				$empezar=seguridad($_POST["empezar"]);
				$sql="SELECT * FROM usuarios WHERE estado!=3 AND user LIKE '%$buscar%' ORDER BY user limit $empezar , 10";
				$resultado=$this->conexion_db->query($sql);
	   			$verificar=$resultado->fetchAll(PDO::FETCH_ASSOC);
				echo json_encode($verificar);
				exit();
			}
		}
		function crear_cuenta(){
			$user=seguridad($_POST["user"]);
			$password=seguridad($_POST["password"]);
			$tipo=seguridad($_POST["tipo"]);
			$id_usuario = $_SESSION["user"];
			$sql2="INSERT INTO usuarios (user, password, tipo, estado, intentos, id_usuario) VALUES ('$user','$password', '$tipo', 2,0,$id_usuario)";
			$resultado2=$this->conexion_db->query($sql2);
			if (!$resultado2) {
				echo "Error";
				exit();
			}else{
				$sql="SELECT * FROM usuarios WHERE user = '$user'";
				$resultado2=$this->conexion_db->query($sql);
				$verificar=$resultado2->fetchAll(PDO::FETCH_ASSOC);
				$id=$verificar[0]["ID"];
				$sql3="INSERT INTO ver_notificacion (id_usuario, ver) VALUES ($id,0)";
				$resultado3=$this->conexion_db->query($sql3);
				if($resultado3){
					echo json_encode($verificar);
					exit();
				}else{
					echo "Error";
					exit();
				}
			}
		}
		function eliminar_cuenta(){
			$id=seguridad($_POST["id"]);
			$sql3=("UPDATE usuarios SET estado=3 WHERE id = '$id'");
			$resultado3=$this->conexion_db->query($sql3);
			if (!$resultado3) {
				echo "Error";
				exit();
			}else{
				$this->ver_cuentas();
				exit();
			}
		}
		function actualizar_cuenta(){
			$id = seguridad($_POST["id"]);
			$texto = seguridad($_POST["texto"]);
			$tipo = seguridad($_POST["tipo"]);
			$id_usuario = $_SESSION["user"];
			$sql4=("UPDATE usuarios SET $tipo='$texto', id_usuario=$id_usuario  WHERE id = '$id'");
			$resultado4=$this->conexion_db->query($sql4);
			if (!$resultado4) {
				echo "Error";
				exit();
			}else{
				$this->ver_cuentas();
				exit();
			}
		}
		function buscar_cuenta(){
			$empezar=seguridad($_POST["empezar"]);		
			$busqueda = seguridad($_POST["busqueda"]);
			$sql="SELECT * FROM usuarios  WHERE estado!=3 AND user like '%$busqueda%' ORDER BY user limit $empezar , 10";
			$resultado=$this->conexion_db->query($sql);
   			$verificar=$resultado->fetchAll(PDO::FETCH_ASSOC);
			echo json_encode($verificar);
			exit();
		}
		function paginacion_cuenta(){	
			$sql="SELECT id FROM usuarios WHERE estado!=3";
			$resultado=$this->conexion_db->query($sql);
			$verificar=$resultado->rowCount();
			echo json_encode($verificar);
			exit();	
		}
		function paginacion_cuenta_buscar(){
			$busqueda = seguridad($_POST["busqueda"]);
			$sql="SELECT id FROM usuarios WHERE estado!=3 AND user like '%$busqueda%'";
			$resultado=$this->conexion_db->query($sql);
			$verificar=$resultado->rowCount();
			echo json_encode($verificar);
			exit();
		}*/
	}