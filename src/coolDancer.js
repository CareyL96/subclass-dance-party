var makeCoolDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="coolDancer"></span>');
  this.setPosition(600, $('body').width() * Math.random());
};

makeCoolDancer.prototype = Object.create(makeDancer.prototype);

makeCoolDancer.prototype.constructor = makeCoolDancer;

var oldStep = makeCoolDancer.prototype.step;

makeCoolDancer.prototype.step = function() {
  var colors = ['red', 'green', 'blue', 'orange', 'yellow'];
  var randomHeight = $('body').height() * Math.random();
  // var randomWidth = $('body').width() * Math.random();
  var animationTime = 500;
  $('.coolDancer').animate({top: randomHeight, animationTime});
  $('.coolDancer').animate({width: this.getRandomInt(50, 100), height: this.getRandomInt(50, 100)}, 200);
  $('.coolDancer').hover(function() {
    $(this).height(400);
    $(this).width(400);
  });
  oldStep.call(this);
};

