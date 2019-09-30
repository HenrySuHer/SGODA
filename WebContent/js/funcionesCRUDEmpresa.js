function registrarEmpresa(){
	var form = $('#registroEmpresa');
	
	$.ajax({
		type:"POST",
		url:"EmpresaAction.action",
		data: form.serialize(),
		success:function(msg){
			$('#mensajediv').html(msg);
			document.getElementById("registroEmpresa").reset();
		}
	});
	setTimeout(function(){document.location.href="empresaLogin.vm"},5000);
}

function obtenerGiros(){
	$.ajax({
		type: "POST",
		url: "EmpresaAction.action",
		data: "accion=listaGiros",
		success: function(msg) {
			$("#idGiro").html(msg);
		}
	});
}

function obtenerHabilidades(){
	$.ajax({
		type: "POST",
		url: "EmpresaAction.action",
		data: "accion=listaHabilidades",
		success: function(msg) {
			$("#habilidades").html(msg);
		}
	});
}

function registrarVacante(){
	var form = $('#registroVacante');
	
	$.ajax({
		type:"POST",
		url:"EmpresaAction.action",
		data: form.serialize(),
		success:function(msg){
			$('#mensajediv').html(msg);
			document.getElementById("registroEmpresa").reset();
		}
	});
	setTimeout(function(){document.location.href="EmpresaAction.action?accion=obtenerVacantes"},2000);
}
