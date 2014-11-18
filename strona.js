/* Galeria*/

$('.arrow-next').click(function(e) {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();
    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
    };
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');
    e.preventDefault();
  });
  $('.arrow-prev').click(function(e) {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();
    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
    }    
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    prevSlide.fadeIn(600).addClass('active-slide');
    e.preventDefault();
  });
/*menu*/
$(document).ready(function() {
$("#jedena").click(function(e) {
$('body').load("http://127.0.0.1:8020/strona%20html_jquery/odcinki.html");
e.preventDefault();
});
});
$(document).ready(function() {
$("#jedenb").click(function(e) {
$('body').load("http://127.0.0.1:8020/strona%20html_jquery/bohaterowie.html");
e.preventDefault();
});
});
$(document).ready(function() {
$("#jedenc").click(function(e) {
$('body').load("http://127.0.0.1:8020/strona%20html_jquery/kosmici.html");
e.preventDefault();
});
});
$(document).ready(function() {
$("#jedend").click(function(e) {
$('body').load("http://127.0.0.1:8020/strona%20html_jquery/wrogowie.html");
e.preventDefault();
});
});
$(document).ready(function() {
$("#jedene").click(function(e) {
$('body').load("http://127.0.0.1:8020/strona%20html_jquery/wcielenia.html");
e.preventDefault();
});
});
$(document).ready(function() {
$("#jedenf").click(function(e) {
$('body').load("http://127.0.0.1:8020/strona%20html_jquery/formularz.html");
e.preventDefault();
});
});
/*inne*/
$("#ramka-tekst").hover(function() {
$("#tardiss").hide();
$("#ramka-tekst").css("font-size", "16px");
$("#ramka-tekst").css("float", "none");
$("#ramka-tekst").css("width", "600px");
});
$(".stopka p").append("<p>Wrocław 2014</p>");
$("h1").mouseover(function(e){
	$("h1").text("The doctor who??");
	e.preventDefault();
});


