function hamburger(){
    var navcont = document.getElementById("navCont");
    if(navcont.className== "navContainer"){
        navcont.className +=" responsive";
    }else {
        navcont.className = "navContainer";
    }
}