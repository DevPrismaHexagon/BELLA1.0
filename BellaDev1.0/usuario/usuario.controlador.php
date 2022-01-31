<?php
	header('Content-Type: application/json');
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Request-Method: *");
	header("Access-Control-Request-Headers: *");
	include_once("./usuario.controlador.php");
	$datos = json_decode(file_get_contents('php://input'));
	if($datos != NULL){
		$hola = new usuarios();
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