var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  this.step();
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};

makeDancer.prototype.getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

makeDancer.prototype.addLineUpClass = function() {
  this.$node.addClass('lineUp');
  // var styleSettings = {
  //   top: "5%",
  //   left: "5%"
  //   // position: 'fixed',
  //   // animation: 'none'
  // };

  // $('.lineUp').css(styleSettings);
}

