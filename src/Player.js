function Player() {
}
Player.prototype.play = function(game) {
  this.currentlyPlayingGame = game;
  this.isPlaying = true;
};

Player.prototype.pause = function() {
  this.isPlaying = false;
};

Player.prototype.resume = function() {
  if (this.isPlaying) {
    throw new Error("game is already playing");
  }

  this.isPlaying = true;
};

Player.prototype.makeFavorite = function() {
  this.currentlyPlayingGame.persistFavoriteStatus(true);
};
