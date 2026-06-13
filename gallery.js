/* Final Project: Accessible Interactive Photo Gallery
   Xử lý toàn diện sự kiện Mouse (Chuột) và Keyboard (Bàn phím)
*/

// Hàm 1: Chạy ngay khi trang web vừa load xong (onload)
function initializeGallery() {
    console.log("Gallery initialized! Document loaded successfully.");

    // Lấy tất cả các tấm ảnh có class là 'preview'
    var images = document.querySelectorAll(".preview");

    // Vòng lặp duyệt qua từng tấm ảnh để tự động thêm thuộc tính tabindex
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        console.log("Added tabindex='0' to image index: " + i + " (Alt: " + images[i].alt + ")");
    }
}

// Hàm 2: Cập nhật khung ảnh lớn (Kích hoạt khi đưa chuột vào HOẶC khi nhấn Tab trúng ảnh)
function upDate(previewPic) {
    console.log("Focus/Mouseover Event Triggered!");
    console.log("Current Image Src: " + previewPic.src);
    console.log("Current Image Alt: " + previewPic.alt);

    var mainImageDiv = document.getElementById("image");
    
    // Đổi chữ hiển thị thành alt của ảnh
    mainImageDiv.innerHTML = previewPic.alt;
    
    // Đổi ảnh nền
    mainImageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

// Hàm 3: Khôi phục trạng thái cũ (Kích hoạt khi rút chuột ra HOẶC khi tab chuyển sang chỗ khác)
function unDo() {
    console.log("Blur/Mouseleave Event Triggered - Resetting Gallery View.");

    var mainImageDiv = document.getElementById("image");
    
    // Trả ảnh nền về trống
    mainImageDiv.style.backgroundImage = "url('')";
    
    // Trả lại dòng chữ hướng dẫn ban đầu
    mainImageDiv.innerHTML = "Hover over an image below or use Tab to display here.";
}
