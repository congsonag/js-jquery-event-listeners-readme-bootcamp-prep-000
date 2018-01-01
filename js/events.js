//define functions here
function getIt() {
<<<<<<< HEAD
  $('p').on('click', alert('Hey!'))
=======
  $('p').on('click', function(e) {
    alert('Hey!');
  }
>>>>>>> 22c83fac4195fcc5bfd515c8562069bbe63f9b3c
}

function frameIt() {
  $('img').on('load', function () {
<<<<<<< HEAD
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('input').on('keydown', function(key) {
    if (key.which === 71) {
      alert('G has been pressed')
    }
  })
}

function submitIt() {
  $('input').on('submit', alert('Your form is going to be submitted now.'))
}
=======

  })
}
>>>>>>> 22c83fac4195fcc5bfd515c8562069bbe63f9b3c

$(document).ready(function(){

// call functions here
  getIt();
<<<<<<< HEAD
  frameIt();
  pressIt();
  submitIt();
=======
>>>>>>> 22c83fac4195fcc5bfd515c8562069bbe63f9b3c

});
