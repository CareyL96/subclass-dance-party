var makePigDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="pigDancer"></span>');
  this.setPosition('85%', $('body').width() * Math.random());
};

makePigDancer.prototype = Object.create(makeDancer.prototype);

makePigDancer.prototype.constructor = makePigDancer;

var oldStep = makeDancer.prototype.step;

makePigDancer.prototype.step = function() {
  // var randomHeight = $('body').height() * Math.random();
  var randomWidth = $('body').width() * Math.random();
  var animationTime = 500;
  // if(!$("pigDancer").hasClass(".lineUp")) {
    $('.pigDancer').animate({width: 25, height: 25}, 500);
    $('.pigDancer').animate({width:75, height: 75}, 500);
    
    // $('.pigDancer').hover(function() {
    //   $(this).height(400);
    //   $(this).width(400);
    // });
  // } 
  // if ($("pigDancer").hasClass(".lineUp")) {
  //   alert('hasLineUp!')
  //   $('pigDancer').css("animation", "none");
  // }
    oldStep.call(this);
};

