var yes = new Audio('yes.wav');
var no = new Audio('no.wav');

$(document).ready(function(){
    $('#obutton').click(function(){
        yes.play();
    });

    $('#tbutton').click(function(){
        no.play();
    })
});
