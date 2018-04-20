//define functions here

function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
    return
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $(document).on('keydown', function(e){
    console.log(e);
  });
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();



});
