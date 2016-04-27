$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.line').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i].$node.hasClass('coyote')) {
        window.dancers[i].$node.animate({
          'left': '10%',
        });
      } else if (window.dancers[i].$node.hasClass('roadRunner')) {
        window.dancers[i].$node.animate({
          'left': '90%',
        });
      }
    }
  }); 
  
  var playMusic = function () {
    $('#music')[0].volume = 0.7;
    $('#music')[0].load();
    $('#music')[0].play();
  };
  playMusic();

  setTimeout(function() {
    playMusic();
  }, 35000);

  var killCoyote = function() {
    for (var i = 0; i < dancers.length; i++) {
      if (dancers[i].constructor === makeAnvil) {
        var $anvil = dancers[i].$node.offset();    
      }
    }
    for (i = 0; i < dancers.length; i++) {
      if (dancers[i].constructor === makeWileECoyote) {
        var $coyote = dancers[i].$node.offset();
        if ($anvil.left + 25 <= $coyote.left || $anvil.left - 25 <= $coyote.left) {
          dancers[i].$node.remove();
        }
      }
    }
  };

  setInterval(killCoyote, 200);

});



