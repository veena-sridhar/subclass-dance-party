var makeRoadRunner = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  var randomRRPictures = ['roadrunner-1.png', 'roadrunner-2.gif', 'roadrunner-3.gif'];
  var randomPicture = Math.floor(Math.random() * randomRRPictures.length);
  this.$node = $('<img class="roadRunner" src="' + randomRRPictures[randomPicture] + '"/>');
  this.setPosition(top, left);
};

makeRoadRunner.prototype = Object.create(makeDancer.prototype);

makeRoadRunner.prototype.constructor = makeRoadRunner;

makeRoadRunner.prototype.step = function(timeBetweenSteps) {
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  this.$node.toggle();
};

makeRoadRunner.prototype.setPosition = function(top, left) {
  makeDancer.prototype.setPosition.call(this, top, left);
};

