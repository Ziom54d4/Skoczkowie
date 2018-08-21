var yes = new Audio('sound/yes.wav');
var no = new Audio('sound/no.wav');

$(document).ready(function(){
    $('#obutton').click(function(){
        yes.play();
    });

    $('#tbutton').click(function(){
        no.play();
    })
});