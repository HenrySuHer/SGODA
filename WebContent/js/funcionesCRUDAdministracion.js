$(document).ready(function() {
	//$("#containerNav").load("navbarAdmin.html");
	//$("#containerFooter").load("footerAdmin.html");
});

function altaGiro(){
	var giro = $("#giro").val();
	var accion = "giro";
	
	$.ajax({
		type: "POST",
		url: "BolsaTrabajoAction.action",
		data: "accion=giro&giroDTO.giro="+giro,
		success: function(msg) {
			$("#mensajediv").html(msg);
			obtenerTablaGiros();
			$("#giro").val("");
		}
	});
	//version para los datos que es con serialice
}

function obtenerTablaGiros(){
	$.ajax({
		type: "POST",
		url: "BolsaTrabajoAction.action",
		data: "accion=tablaGiros",
		success: function(msg) {
			$("#tablaGirosDiv").html(msg);
		}
	});
}

function altaGiroModal(){
	var idGiro = $("#idGiroEditado").val();
	var giro = $("#giroEditado").val();
	
	//alert(idGiro);
	//alert(giro);
	$.ajax({
		type: "POST",
		url: "AdministracionAction.action",
		data: "accion=actualizarGiro&giroDTO.giro="+giro+"&giroDTO.idGiro="+idGiro,
		success: function(msg) {
			$("#mensajediv").html(msg);
			obtenerTablaGiros();
			//$('#dialogoModificar').close();
		}
	});
	//version para los datos que es con serialice
}

function obtenerCarreras(){
	var idFacultad = $("#facultad").val();
	
	$.ajax({
	   type: "POST",
	   url: "AdministracionAction.action",
	   data: "accion=desplegarCarreras&idFacultad="+idFacultad,
	   success: function(msg){
	     	$("#carreras").html(msg);
	    }
	});
}

function altaHabilidad(){
	var habilidad = $("#habilidad").val();
	var accion;
	$.ajax({
		type: "POST",
		url: "AdministracionAction.action",
		data: "accion=habilidad&habilidadDTO.habilidad="+habilidad,
		success: function(msg) {
			$("#mensajediv").html(msg);
			obtenerTablaHabilidades();
			$("#habilidad").val("");
		}
	});
}

function obtenerTablaHabilidades(){
	$.ajax({
		type: "POST",
		url: "AdministracionAction.action",
		data: "accion=tablaHabilidades",
		success: function(msg) {
			$("#tablaHabilidadesDiv").html(msg);
		}
	});
}

function altaHabilidadModal(){
	var idHabilidad = $("#idHabilidadEditado").val();
	var habilidad = $("#habilidadEditado").val();
	
	$.ajax({
		type: "POST",
		url: "AdministracionAction.action",
		data: "accion=actualizarHabilidad&habilidadDTO.habilidad="+habilidad+"&habilidadDTO.idHabilidad="+idHabilidad,
		success: function(msg) {
			$("#mensajediv").html(msg);
			obtenerTablaHabilidades();
			//$('#dialogoModificar').close();
		}
	});
}

function altaFacultad(){
	var facultad = $("#facultad").val();
	var accion = "facultad";
	
	$.ajax({
		type: "POST",
		url: "AdministracionAction.action",
		data: "accion=facultad&facultadDTO.facultad="+facultad,
		success: function(msg) {
			$("#mensajediv").html(msg);
			obtenerTablaFacultad();
			$("#facultad").val("");
		}
	});
	//version para los datos que es con serialice
}

function obtenerTablaFacultad(){
	//alert("facus");
	$.ajax({
		type: "POST",
		url: "AdministracionAction.action",
		data: "accion=tablaFacultades",
		success: function(msg) {
			//alert(msg);
			$("#tablaFacultadesDiv").html(msg);
		}
	});
}

function altaFacultadModal(){
	//alert("modal f");
	var idFacultad = $("#idFacultadEditado").val();
	var facultad = $("#facultadEditado").val();
	//alert(idFacultad);
	//alert(facultad);
	$.ajax({
		type: "POST",
		url: "AdministracionAction.action",
		data: "accion=actualizarFacultad&facultadDTO.facultad="+facultad+"&facultadDTO.idFacultad="+idFacultad,
		success: function(msg) {
			$("#mensajediv").html(msg);
			obtenerTablaFacultad();
			//$('#dialogoModificar').close();
		}
	});
}

function obtenerTablaCarreras(){
	//alert("carreras");
	var idFacultad = $("#facultad").val();
	
	$.ajax({
		type: "POST",
		url: "AdministracionAction.action",
		data: "accion=tablaCarreras&idFacultad="+idFacultad,
		success: function(msg) {
			//alert(msg);
			$("#tablaCarrerasDiv").html(msg);
		}
	});
}

function altaCarrera(){
	var carrera = $("#carrera").val();
	var idFacultad = $("#facultad").val();
	
	$.ajax({
		type: "POST",
		url: "AdministracionAction.action",
		data: "accion=carrera&carreraDTO.carrera="+carrera+"&carreraDTO.idFacultad="+idFacultad,
		success: function(msg) {
			$("#mensajediv").html(msg);
			obtenerTablaCarreras();
			$("#carrera").val("");
		}
	});
}

function altaCarreraModal(){ 
	var idCarrera = $("#idCarreraEditada").val();
	var carrera = $("#carreraEditada").val();
	//alert(idCarrera);
	//alert(carrera);
	$.ajax({
		type: "POST",
		url: "AdministracionAction.action",
		data: "accion=actualizarCarrera&carreraDTO.carrera="+carrera+"&carreraDTO.idCarrera="+idCarrera,
		success: function(msg) {
			$("#mensajediv").html(msg);
			obtenerTablaCarreras();
		}
	});
}

function obtenerTablaEgresados(){
	//alert("efreados");
	//var idFacultad = $("#facultad").val();
	
	$.ajax({
		type: "POST",
		url: "AdministracionAction.action",
		data: "accion=tablaEgresados",
		success: function(msg) {
			//alert(msg);
			$("#tablaEgresadosDiv").html(msg);
		}
	});
}

function obtenerTablaEmpresa(){
	//alert("efreados");
	//var idFacultad = $("#facultad").val();
	
	$.ajax({
		type: "POST",
		url: "AdministracionAction.action",
		data: "accion=tablaEmpresa",
		success: function(msg) {
			//alert(msg);
			$("#tablaEmpresaDiv").html(msg);
		}
	});
}

function validarDocumento(matricula,e){
	
	//alert(e.id);
	//$("#"+e.id).modal('hide');
	//$("#"+e.id).modal('dispose');
	
	$.ajax({
		type: "POST",
		url: "AdministracionAction.action",
		data: "accion=validarDocumento&matricula="+matricula,
		success: function(msg) {
			//alert(msg);
			$("#tablaEgresadosDiv").html(msg);
			location.reload();
		}
	});

}


function validarDocumentoEmpresa(matricula,e){
	
	//alert(e.id);
	//$("#"+e.id).modal('hide');
	//$("#"+e.id).modal('dispose');
	
	$.ajax({
		type: "POST",
		url: "AdministracionAction.action",
		data: "accion=validarDocumentoEmpresa&matricula="+matricula,
		success: function(msg) {
			//alert(msg);
			$("#tablaEmpresaDiv").html(msg);
			location.reload();
		}
	});

}

function portalEgresado(){
	document.location.href="loginEgresado.vm";
}
function portalEmpresa(){
	document.location.href="loginEmpresa.vm";
}
function portalAdministrador(){
	document.location.href="loginAdministrador.vm";
}