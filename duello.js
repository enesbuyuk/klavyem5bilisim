function enes(){
    const dizi = document.getElementById('yazilacak-metin').textContent.split(" ");
    var sayi = -1;
	document.body.onkeyup = function(e){
		if(e.keyCode == 32){
		    let enes = ++sayi;
		    document.getElementById('yazilan-metin').value = dizi[enes]; 
		}
	}
}
enes();
