function darkMode(){
	console.log("clicked!");
	var bodyEl=document.body;
	var headerEl=document.getElementById("head");
	var projectEl=document.querySelectorAll(".project")

	for (let i=0; i<projectEl.length; i++){
		projectEl[i].classList.toggle("projectDark");
	}
	headerEl.classList.toggle("projectDark");
	bodyEl.classList.toggle("bodyDark");
}
