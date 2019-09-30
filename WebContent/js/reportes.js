$(document).ready(function() {
	$("#containerNav").load("navbarAdmin.html");
	$("#containerFooter").load("footerAdmin.html");
});

function reportes(){
	var reporte = $("#tipoReportes").val();
	console.log(reporte)
	$("#graficaFacultadResultados").html("");
	$.ajax({
		type: "POST",
		url: "Reportes.action",
		data: "tipoAccion="+reporte,
		success: function(msg) {
			if(reporte!="facultad" && reporte!="facultadEmpresa"){
				$("#graficaFacultadResultados").html(msg);
				reporte=reporte.split("reporte")[1];
				if(reporte=="Validado"){
					reporte="Doumentos Validados de Egresados";
				}
				if( reporte=="ValidadoEmpresa"){
					reporte="Doumentos Validados de Empresas";
				}
				if( reporte=="Facultad"){
					reporte="Egresados por Facultades";
				}
				if( reporte=="FacultadEmpresa"){
					reporte="Solicitud de Vacantes por Facultades";
				}
				if(reporte==undefined){
					reporte="";
				}
				$("#titulo").html("Grafíca de "+reporte);
				$("#facultadReport").html("");
			} else {
				$("#titulo").html("");
				$("#facultadReport").html(msg);
			}
			if(reporte=="" || reporte=="blanco"){
				$("#titulo").html("");
			}
		}
	});
}

function reportesFacultad(){
	$("#graficaFacultadResultados").html("");
	var reporte = $("#facultad").val();
	$.ajax({
		type: "POST",
		url: "Reportes.action",
		data: "tipoAccion=reporteCarreras&idFacultad="+reporte,
		success: function(msg) {
			$("#graficaFacultadResultados").html(msg);
			$("#titulo").html("Grafíca de "+$("#mensaje").val());
		}
	});
}