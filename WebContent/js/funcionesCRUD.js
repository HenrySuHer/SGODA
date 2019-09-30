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
function ponerGiroEditado(idGiro){
	alert(idGiro);
	idGiroEditado = idGiro;
}

function abrirRegistro(){
	var tipo = $("#tipoRegistro").val();
	alert(tipo);
	if(tipo==1){
		document.location.href="RegistroEmpresa.html";
	}
	if(tipo==2){
		document.location.href="BolsaTrabajoAction.action?accion=cargarFacultadesCarrera";
	}
}



function obtenerCarreras(){

	var idFacultad = $('#idFacultad').val();	
	$.ajax({
	   type: "POST",
	   url: "BolsaTrabajoAction.action",
	   data: "accion=listaCarreras&idFacultad="+idFacultad,
	   success: function(msg){
	     	$("#idCarrera").html(msg);
	    }
	});
}

function myFunction() {
  document.getElementById("formEgresado").reset();
  document.getElementById("formProyectos").reset();
  document.getElementById("formCertificaciones").reset();
  document.getElementById("formCurriculum").reset();
  
}

function insertarEgresado(){
	
	var form= $('#formEgresado');
	$.ajax({
		type: form.attr("method"),
		url: form.attr("action"),
		data: form.serialize(),
		success: function (msg){
			$('#mensajeDiv').html(msg);
			myFunction();
		}
	});
	setTimeout(function(){document.location.href="loginEgresado.vm"},5000);
}

function insertarProyecto(){
	var form= $('#formProyectos');
	$.ajax({
		type: form.attr("method"),
		url: form.attr("action"),
		data: form.serialize(),
		success: function (msg){
			$('#mensajeDiv').html(msg);
			myFunction();
		}
	});
	setTimeout(function(){document.location.href="egresadoIndex.vm"},5000);
}

function insertarCertificacion(){
	var form= $('#formCertificaciones');
	$.ajax({
		type: form.attr("method"),
		url: form.attr("action"),
		data: form.serialize(),
		success: function (msg){
			$('#mensajeDiv').html(msg);
			myFunction();
		}
	});
	setTimeout(function(){document.location.href="egresadoIndex.vm"},5000);
}

function insertarCurriculum(){
	var form= $('#formCurriculum');
	$.ajax({
		type: form.attr("method"),
		url: form.attr("action"),
		data: form.serialize(),
		success: function (msg){
			$('#mensajeDiv').html(msg);
			myFunction();
		}
	});
	setTimeout(function(){document.location.href="egresadoIndex.vm"},5000);
}