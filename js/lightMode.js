let lightmode = localStorage.getItem('lightmode');


const enableLightMode = () => {
	lightModeSetter();
	localStorage.setItem('lightmode', 'enabled');
}

const disableLightMode = () => {
	lightModeSetter();
	localStorage.setItem('lightmode', null);
}

window.onload = () =>{
	if(lightmode === "enabled") {
		enableLightMode();
	}
}


function lightModeToggler(){
	lightmode = localStorage.getItem('lightmode');
	if (lightmode !== 'enabled'){
		enableLightMode();
	} else {
		disableLightMode();
	}
}


function lightModeSetter(){
	var body=document.body;
	var header=document.getElementById("head");
	var project=document.querySelectorAll(".project");

	for (let i=0; i<project.length; i++){
		project[i].classList.toggle("projectLight");
	}
	
	header.classList.toggle("projectLight");
	body.classList.toggle("bodyLight");
}
