<?php
 	header('Content-Type: application/json');
	include_once("../cms/procesos/anti_inyeccion.php");
	include_once("../cms/procesos/conexion.php");

	class noticias extends conexion{
		public function noticias(){
			parent::__construct();
		} 
		function cantidad_noticias(){
			$sql="SELECT ID FROM noticias";
			$resultado=$this->conexion_db->query($sql);
			if($resultado){
				$verificar=$resultado->rowCount();
				echo json_encode($verificar);
				exit();
			}else{
				exit();
			}
		}
		function ver_noticia($empezar=0){
			$empezar = seguridad($_POST["empezar"]);
			$cuantos = seguridad($_POST["cuantos"]);
			$sql="SELECT n.*,i.*,u.p_nombre FROM noticias n INNER JOIN tipo_noticia i ON n.id_tipo_noticia = i.id_tipo_noticia INNER JOIN datos_usuario u ON n.id_usuario = u.id WHERE n.estado = 0 ORDER BY fecha DESC LIMIT $empezar, $cuantos";
			$resultado = $this->conexion_db->query($sql);
			if($resultado){
				$verificar=$resultado->fetchAll(PDO::FETCH_ASSOC);
				echo json_encode($verificar);
				exit();
			}else{
				echo "error";
				exit();
			}
		}
	}