var makeCoolDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeCoolDancer.prototype = Object.create(makeDancer.prototype);

makeCoolDancer.prototype.constructor = makeCoolDancer;

var oldStep = makeCoolDancer.prototype.step;

makeCoolDancer.prototype.step = function() {
  oldStep.call(this);
};