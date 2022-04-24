let darkmode = localStorage.getItem('darkmode');


const enableDarkMode = () => {
	darkModeSetter();
	localStorage.setItem('darkmode', 'enabled');
}

const disableDarkMode = () => {
	darkModeSetter();
	localStorage.setItem('darkmode', null);
}

window.onload = () =>{
	if(darkmode === "enabled") {
		enableDarkMode();
	}
}


function darkModeToggler(){
	darkmode = localStorage.getItem('darkmode');
	if (darkmode !== 'enabled'){
		enableDarkMode();
	} else {
		disableDarkMode();
	}
}


function darkModeSetter(){
	var body=document.body;
	var header=document.getElementById("head");
	var project=document.querySelectorAll(".project");

	for (let i=0; i<project.length; i++){
		project[i].classList.toggle("projectDark");
	}
	
	header.classList.toggle("projectDark");
	body.classList.toggle("bodyDark");
}
