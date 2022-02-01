<?php
	 header("Access-Control-Allow-Origin: *");
	 header("Content-Type: application/json; charset=UTF-8");
	 header("Access-Control-Allow-Methods: GET, POST, PUT, PATCH, POST, DELETE, OPTIONS");;
	 header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Content-Type, Accept");
	 
	include_once("./usuario.model.php");
	include_once("../conexion.php");

	$datos = json_decode(file_get_contents('php://input'));
	if($datos != NULL){
		$hola = new Usuario();
		$opcion= $datos->opcion;
		if($opcion==1){
			$hola->ver_usuario($datos->empezar);
		}else if($opcion==2){
			$hola->agregar_usuario($datos->user,$datos->password,$datos->rol);
		}else if($opcion==3){
			$hola->eliminar_usuario($datos->id);
		}else if($opcion==4){
			$hola->actualizar_usuario($datos->id,$datos->tipo,$datos->texto);
		}else if($opcion==5){
			$hola->ver_usuario($datos->buscar);
		}else if($opcion==6){
			$hola->paginacion_usuario();
		}
	}