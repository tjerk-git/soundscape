var $ = jQuery.noConflict();

$(document).ready((function(e) {
// The item (or items) to press and hold on
let dragItem = document.querySelector("#ball");
let container = document.querySelector("#container");
let timePressed = 0;
let press = false;
dragItem.addEventListener("mousedown", pressingDown, false);
dragItem.addEventListener("mouseup", notPressingDown, false);
dragItem.addEventListener("touchstart", pressingDown, false);
dragItem.addEventListener("touchend", notPressingDown, false);

function counter() {
	if (press) {
		timePressed++;
		scaleItem();
	} else {
		//timePressed = 0;
		
		//resetItem();
	}

	requestAnimationFrame(counter);
}
counter();

function pressingDown(e) {
	press = true;
	e.preventDefault();
}
function notPressingDown(e) {
	press = false;
}
function scaleItem() {
	let size = 1 + timePressed / 50;
	if (size > 15) {
		size = 15;
		//container.classList.add("stripes");
		// animation done
		$('.recording').show();
		$('#ball').hide();
	}
	dragItem.style.transitionDuration = "0s";
	dragItem.style.setProperty("--scale-value", size);
}
function resetItem() {
	dragItem.style.transitionDuration = ".2s";
	dragItem.style.setProperty("--scale-value", 1);
	container.classList.remove("stripes");
}


}));
