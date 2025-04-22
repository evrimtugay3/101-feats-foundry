console.log("Hello World modülü yüklendi!");  // Konsola log atma (F12 ile görebilirsiniz)

Hooks.on("ready", function() {
  // Oyun tamamen yüklendiğinde chat'e mesaj gönderelim
  ChatMessage.create({
    user: game.user.id, 
    content: "Merhaba Dünya! (Hello World modülü çalışıyor)"
  });
});

Hooks.on("renderActorSheet5eCharacter", (app, html, data) => {
  // Her karakter sayfası açıldığında sayfanın en altına bir not ekleyelim
  const notDiv = document.createElement("div");
  notDiv.innerHTML = "<em>Hello World! (modülden gelen not)</em>";
  html.append(notDiv);
});
