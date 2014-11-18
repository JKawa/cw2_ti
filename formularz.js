var Imie = document.getElementById("imie").value;
var Nazwisko = document.getElementById("nazwisko").value;
var Email = document.getElementById("email").value;
var Wiadomosc = document.getElementById("wiad").value;
  	$("#wyslij").click(function() {
if (Imie.length == 0) {
        alert('Puste pole-imie');
        $("#imie").css("background","red");
       }
if (Nazwisko.length == 0) {
        alert('Puste pole-nazwisko');
        $("#nazwisko").css("background","red");
}
if (Email.length == 0) {
        alert('Puste-pole-Email');
        $("#email").css("background","red");
}
    var Wzor = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i ;
    if (!Wzor.test(this.value)) {
        alert("Błędny adres e'mail!");
    }
if (Wiadomosc.length == 0) {
        alert('Puste-pole-wiadomość');
        $("#wiad").css("background","red");
}
});
$("#wstecz").click(function() {
window.location = window.location;
});



