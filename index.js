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

function uploadFile() {
  const fileInput = document.getElementById("fileUpload");
  const fileList = document.getElementById("fileList");

  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];
    const newFile = document.createElement("div");
    newFile.textContent = `File: ${file.name}`;
    fileList.appendChild(newFile);
  }
}
