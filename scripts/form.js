const kp1 = document.querySelector("#password");
const kp2 = document.querySelector("#password2");


kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (kp1.value !== kp2.value) {
		
		kp1.style.backgroundColor = "#fff0f3";
		kp2.style.backgroundColor = "#fff0f3";
    kp1.value = "";
		kp2.value = "";
		kp1.focus();
	} else {
		kp2.style.backgroundColor = "#00c400";
    kp1.style.backgroundColor = "#00c400";
		kp2.style.color = "#FFFFFF";
    kp1.style.color = "#FFFFFF";
	}
}
