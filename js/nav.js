function navMaker(){
    document.write(<div>
    <div class="topNav">
			<a href="#home" class="default">Home</a>
			<div class="navDropdown">
				<button class="navBtn">Professional Life
				<i class="fa fa-caret-down"></i>
				</button>
				<div class="dropdownItems">
					<a href="#experience">Experience</a>
					<a href="#skills">Skills</a>
					<a href="#projects">Projects</a>
					<a href="#education">Education</a>
				</div>
			</div>
			<a href="about.html">Personal Life</a>
			<a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
		</div>
        </div>);
}