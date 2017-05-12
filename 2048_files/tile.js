function Tile(position, value) {

	if (typeof position == 'object' && (position.value || position.previousPosition || position.mergedFrom)) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = position.value;

  this.previousPosition = position.previousPosition;
  this.mergedFrom       = position.mergedFrom;
	} else {

  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
  }
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};
