var gambarSkr = 1;

function slider(argument) {	
	gambarSkr++;
	if (gambarSkr > 4) {
		gambarSkr = 1;
	}
	document.getElementById("gambar").src = "img/" + gambarSkr + ".jpg";
}

function autoSlider() {
	slider();
	var waktu = setTimeout("autoSlider()", 2000);
}