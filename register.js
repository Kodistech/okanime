if (localStorage.getItem('currentUser')) {
    window.location.href = 'login.html';
}

document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const user = document.getElementById('reg-username').value;
    const pass = document.getElementById('reg-password').value;
    const confirm = document.getElementById('reg-confirm').value;

    if (pass !== confirm) {
        alert("Mật khẩu xác nhận không khớp!");
        return;
    }

    // Lấy danh sách user cũ hoặc tạo mảng mới
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Kiểm tra xem user đã tồn tại chưa
    if (users.find(u => u.username === user)) {
        alert("Tên đăng nhập đã tồn tại!");
        return;
    }

    // Thêm user mới
    users.push({ username: user, password: pass });
    localStorage.setItem('users', JSON.stringify(users));

    // Tự động đăng nhập luôn sau khi đăng ký
    localStorage.setItem('currentUser', user);

    alert("Đăng ký thành công!");
    window.location.href = 'login.html';
});
