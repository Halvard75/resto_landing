// je cache les menus
$('#contenu1').css("display","none");
$('#contenu2').css("display","none");
$('#contenu3').css("display","none");

// je les fais apparaître

$('#presentation').click(function(){
    $('#contenu1').toggle();
});

$('#menu').click(function(){
    $('#contenu2').toggle();
});

$('#lorem').click(function(){
    $('#contenu3').toggle();
});

