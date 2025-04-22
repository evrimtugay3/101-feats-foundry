//console.log("Hello World modülü yüklendi!");

Hooks.on("ready", function() {
  ChatMessage.create({
    user: game.user.id, 
    content: "Merhaba Dünya! (Hello World modülü çalışıyor)"
  });
});

// Hooks.on("renderActorSheet5eCharacter", (app, html, data) => {
//   const notDiv = document.createElement("div");
//   notDiv.innerHTML = "<em>Hello World! (modülden gelen not)</em>";
//   html.append(notDiv);
// });