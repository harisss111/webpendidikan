// Script untuk simulasi pengiriman pesan di ruang diskusi
function sendMessage() {
  var message = document.getElementById("chat-input").value;
  var messagesDiv = document.querySelector(".messages");

  if (message.trim() !== "") {
    var newMessage = document.createElement("p");
    newMessage.innerHTML = "<strong>Anda:</strong> " + message;
    messagesDiv.appendChild(newMessage);
    document.getElementById("chat-input").value = ""; // Hapus input
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll ke bawah
  }
}
