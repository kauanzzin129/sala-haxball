const HBInit = require("haxball-headless");

const room = HBInit({
  roomName: "Sala do Brabo",
  maxPlayers: 10,
  public: true
});

room.onPlayerJoin = function(player) {
  room.sendChat("Seja bem-vindo, " + player.name + "!");
};
