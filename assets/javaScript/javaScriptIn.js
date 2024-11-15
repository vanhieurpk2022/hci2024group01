const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; // Variable to store user's message
const inputInitHeight = chatInput.scrollHeight;

// API configuration
const API_KEY = "AIzaSyDtbiDYkdiRd5S-cBMEo-u-wCnpOxo5YfM"; // Your API key here
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;

const createChatLi = (message, className) => {
  // Create a chat <li> element with passed message and className
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", `${className}`);
  let chatContent =
    className === "outgoing"
      ? `<p></p>`
      : `<span class="material-symbols-outlined"><i class="fa-solid fa-robot"></i> </span><p></p>`;
  chatLi.innerHTML = chatContent;
  chatLi.querySelector("p").textContent = message;
  return chatLi; // return chat <li> element
};

const generateResponse = async (chatElement) => {
  const messageElement = chatElement.querySelector("p");

  // Define the properties and message for the API request
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [
        {
          role: "user",
          parts: [{ text: userMessage }],
        },
      ],
    }),
  };

  // Send POST request to API, get response and set the reponse as paragraph text
  try {
    const response = await fetch(API_URL, requestOptions);
    const data = await response.json();
    if (!response.ok) throw new Error(data.error.message);

    // Get the API response text and update the message element
    messageElement.textContent =
      data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1");
  } catch (error) {
    // Handle error
    messageElement.classList.add("error");
    messageElement.textContent = error.message;
  } finally {
    chatbox.scrollTo(0, chatbox.scrollHeight);
  }
};

const handleChat = () => {
  userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
  if (!userMessage) return;

  // Clear the input textarea and set its height to default
  chatInput.value = "";
  chatInput.style.height = `${inputInitHeight}px`;

  // Append the user's message to the chatbox
  chatbox.appendChild(createChatLi(userMessage, "outgoing"));
  chatbox.scrollTo(0, chatbox.scrollHeight);

  setTimeout(() => {
    // Display "Thinking..." message while waiting for the response
    const incomingChatLi = createChatLi("Thinking...", "incoming");
    chatbox.appendChild(incomingChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
    generateResponse(incomingChatLi);
  }, 600);
};
// Tự động gửi tin nhắn khi trang tải xong
document.addEventListener("DOMContentLoaded", () => {
  const dataFromStorage = localStorage.getItem("data"); // Lấy dữ liệu từ localStorage
  if (dataFromStorage) {
    chatInput.value = dataFromStorage; // Gán dữ liệu vào input
    handleChat(); // Gọi hàm để gửi tin nhắn
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const fileData = localStorage.getItem("file"); // Lấy nội dung file từ localStorage
  if (fileData) {
    chatInput.value = fileData; // Gán nội dung file vào chatInput
    handleChat(); // Thực hiện gửi tin nhắn
  }
});

chatInput.addEventListener("input", () => {
  // Adjust the height of the input textarea based on its content
  chatInput.style.height = `${inputInitHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
  // If Enter key is pressed without Shift key and the window
  // width is greater than 800px, handle the chat
  if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
    e.preventDefault();
    handleChat();
  }
});

sendChatBtn.addEventListener("click", handleChat);
// closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
// chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("show-chatbot");
});

function getRunOnLoad() {
  // Lấy giá trị từ input
  const defaultData = document.getElementById("inputGetData").value;
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0]; // Lấy file từ input

  // Kiểm tra xem dữ liệu có trống không
  if (!defaultData && !fileInput) {
    alert("Vui lòng nhập dữ liệu trước khi tiếp tục!");
    return;
  }

  // Hàm đọc file
  const readFile = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      // Khi đọc thành công
      reader.onload = () => resolve(reader.result);

      // Khi có lỗi
      reader.onerror = () => reject(reader.error);

      // Đọc file dưới dạng text
      reader.readAsText(file);
    });
  };

  // Đọc file và lưu vào localStorage
  if (file) {
    readFile(file)
      .then((fileContent) => {
        // Lưu file content vào localStorage
        localStorage.setItem("file", fileContent);

        // Lưu input data vào localStorage
        localStorage.setItem("data", defaultData || "");

        // Điều hướng sang trang khác
        window.location.href = "./chatBot.html";
      })
      .catch((error) => {
        console.error("Lỗi khi đọc file:", error);
        alert("Không thể đọc file. Vui lòng thử lại!");
      });
  } else {
    // Nếu không có file, chỉ lưu dữ liệu từ input
    localStorage.setItem("data", defaultData);

    // Điều hướng sang trang khác
    window.location.href = "./chatBot.html";
  }
}
