
    function toggleContent(button) {
    const extraContent = button.previousElementSibling;
    if (extraContent.style.display === "none" || !extraContent.style.display) {
        extraContent.style.display = "block";
        button.textContent = "Thu gọn";
    } else {
        extraContent.style.display = "none";
        button.textContent = "Xem thêm";
    }
}

function openConfirmationModal() {
    document.getElementById("confirmationModal").style.display = "block";
}

// Function to close the modal
function closeModal() {
    document.getElementById("confirmationModal").style.display = "none";
}

// Function to handle the confirmation action
function confirmAction() {
    alert("You confirmed the action to open the Java IDE.");
    closeModal();
  
}


window.onclick = function(event) {
    if (event.target == document.getElementById("confirmationModal")) {
        closeModal();
    }
}; function openForm(service) {
    document.getElementById("service").value = service;
    document.getElementById("appointmentForm").style.display = "block";
}

document.getElementById("bookingForm").onsubmit = function(event) {
    event.preventDefault();
    alert("Đặt lịch thành công!");
    document.getElementById("appointmentForm").style.display = "none";
};

function toggleContent(button) {
    var content = button.previousElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}


function openConfirmationModal() {
    document.getElementById('confirmationModal').style.display = 'block';
}


function closeModal() {
    document.getElementById('confirmationModal').style.display = 'none';
}


function openForm(serviceName) {
    document.getElementById('appointmentForm').style.display = 'block';
    document.getElementById('service').value = serviceName;
}


function confirmAction() {
    alert('Đặt lịch thành công!');
    closeModal(); // Đóng modal sau khi xác nhận
}
function openNewTab() {
    // URL muốn mở
    const url = "handbook.html";
    // Mở tab mới
    window.open(url, "_blank");
}