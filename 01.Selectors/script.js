// to select a Elememt via tag name and hide
$('h2').hide();

// to select a Element via id and hide
$('#heading1').hide();

// to select a element via class name and hide
$('.heading2').hide();

// to Combinators selector 
$('p span').css("color","red")

// Select a First Element on ul
$('ul#list li:first').css("color","blue")

// Select a Last Element on ul
$('ul#list li:last').css("color","red")

// Select a Even Element on ul
$('ul#list li:even').css("color","yellow")

// Select a Odd Element on ul
$('ul#list li:odd').css("background-color","green")

// Select a nth-child Element on ul
$('ul#list li:nth-child(2n)').css("list-style-type","none")

// Select button via type
$(':button').hide()

// Attribute Selector
$('[href]').css("color","red")

$('a[href="http://facebook.com"]').css("color","black")

// universal  Selector
$('*').css('outline',"1px solid red")