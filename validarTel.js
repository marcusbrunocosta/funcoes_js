<meta charset="utf-8">
<script type="text/javascript">
function validarTel(opcional,aux){
	var valid;
	var regexp;
	var arr_match;
	var ddd;
	var tronco;
	var ramal;
	var teste = '';

	if (opcional == "true"){
		opcional = true;
	} else {
		opcional = false;
	}

	aux.toString();
	if (aux.value == ""){
		valid = opcional;
	} else {
		regexp = /^[\(]{0,1}((?:[3-9]\d){0,1})[\)]{0,1}[\s\-\.]{0,1}(\d{4})[\s\-\.]{0,1}(\d{4})$|^\({0,1}((?:[12]\d){0,1})[\)]{0,1}[\s\-\.]{0,1}(9\d{4})[\s\-\.]{0,1}(\d{4})$|^\({0,1}((?:[12]\d){0,1})[\)]{0,1}[\s\-\.]{0,1}([2-8]\d{3})[\s\-\.]{0,1}(\d{4})$/;
		arr_match = regexp.exec(aux.value);
		if (arr_match == null){
			valid = false;
		} else {
		        if (arr_match[3] != null) {
			  ddd = arr_match[1];
			  tronco = arr_match[2];
			  ramal = arr_match[3];
			  valid = true;
			} else if (arr_match[6] != null) {
			  ddd = arr_match[4];
			  tronco = arr_match[5];
			  ramal = arr_match[6];
			  valid = true;
			} else if (arr_match[9] != null) {
			  ddd = arr_match[7];
			  tronco = arr_match[8];
			  ramal = arr_match[9];
			  valid = true;
			}
		}

		if (valid) {
			if (ddd == 0){
				aux.value = tronco+'-'+ramal;
			} else {
				aux.value = '('+ddd+') '+tronco+'-'+ramal;
			}
		}
	}
	return valid;
}

function enviar () {
	if (validatorTel('false',document.getElementById('telefone'))) {
		alert('Telefone Ok.');
	} else {
		alert('Telefone Incorrreto/.');
	}
}
</script>
<form id="form" method="POST" action="testev.php">
	<input name="telefone" id="telefone">
	<input onclick="enviar()" value="ok" type="button">
</form>
