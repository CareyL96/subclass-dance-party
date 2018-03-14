var makeCoolDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="coolDancer"></span>');
  this.setPosition(600, $('body').width() * Math.random());
};

makeCoolDancer.prototype = Object.create(makeDancer.prototype);

makeCoolDancer.prototype.constructor = makeCoolDancer;

var oldStep = makeDancer.prototype.step;

makeCoolDancer.prototype.step = function() {
  // if(!$(".coolDancer").hasClass(".lineUp")) {
  if (this.$node.hasClass('lineUp')) {
    clearTimeout(oldStep);
  } else {
    oldStep.call(this);
  }
  this.animate()
  // } 
  // if ($(".coolDancer").hasClass(".lineUp")) {
  //   alert('hasLineUp!')
  //   $('.coolDancer').css("animation", "none");
  // }
};

makeCoolDancer.prototype.animate = function() {
  var randomHeight = $('body').height() * Math.random();
  var randomWidth = $('body').width() * Math.random();
  var animationTime = 500;
  $('.coolDancer').animate({top: randomHeight, animationTime});
  $('.coolDancer').animate({width: this.getRandomInt(50, 100), height: this.getRandomInt(50, 100)}, 200);
  $('.coolDancer').hover(function() {
    $(this).height(400);
    $(this).width(400);
  });
}

makeDancer.prototype.killPig = function() {
  window.dancer.forEach(function(dancer) {
    var x = $(this).offset().left;
    var y = $(this).offset().top;
    console.log(x);
  });
}
