start();

function start(){
	var buttons = getButtons();
	
	addClickInButtons(buttons);
}

function getButtons(){
	var idButtons = defineIdButtons();
	var buttons = [];
	
	for(var i = 0; i < idButtons.length; i += 1){
		buttons.push(document.getElementById(idButtons[i]));
	}
	
	return buttons;
}

function defineIdButtons(){
	return ["corpo_docente", "projeto_pedagogico", "componentes_curriculares",
		"avaliacoes_curso", "periodicos_area", "inscreva-se"];
}

function addClickInButtons(buttons){
	for(var i = 0; i < buttons.length; i += 1){
		switch (buttons[i].id) {
			case "corpo_docente": addCorpoDocenteClick(buttons[i]); break;
			
			case "projeto_pedagogico": addProjetoPedagogicoClick(buttons[i]); break;
			
			case "componentes_curriculares": addComponentesCurricularesClick(buttons[i]); break;
			
			case "avaliacoes_curso": addAvaliacoesCurso(buttons[i]); break;
			
			case "periodicos_area": addPeriodicosArea(buttons[i]); break;
			
			case "inscreva-se": addInscricaoClick(buttons[i]); break;
			
			default: break;
		}
	}
}

function addCorpoDocenteClick(button){
	button.onclick = function() {
		window.open('http://www.univas.edu.br/menu/ensino/graduacao/curso.asp?id=8', '_blank');
	}
}

function addProjetoPedagogicoClick(button){
	button.onclick = function() {
		window.open('http://www.univas.edu.br/docs/2018/graduacao/projetoPedagogico/8.pdf', '_blank');
	}
}

function addComponentesCurricularesClick(button){
	button.onclick = function() {
		window.open('http://www.univas.edu.br/menu/ensino/graduacao/curso.asp?id=8', '_blank');
	}
}

function addAvaliacoesCurso(button){
	button.onclick = function() {
		window.open('http://www.univas.edu.br/docs/2018/graduacao/avaliacoes/8.pdf', '_blank');
	}
}

function addPeriodicosArea(button){
	button.onclick = function() {
		window.open('http://www.univas.edu.br/menu/ensino/graduacao/curso.asp?id=8', '_blank');
	}
}

function addInscricaoClick(button){
	button.onclick = function() {
		window.open('http://www.univas.edu.br/', '_blank');
	}
}