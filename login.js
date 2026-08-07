if (localStorage.getItem('currentUser')) {
    window.location.href = 'main.html';
}

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const user = document.getElementById('login-username').value;
    const pass = document.getElementById('login-password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Tìm user trong "database"
    const validUser = users.find(u => u.username === user && u.password === pass);

    if (validUser) {
        // Lưu trạng thái đăng nhập
        localStorage.setItem('currentUser', user);
        alert("Đăng nhập thành công!");
        window.location.href = 'main.html';
    } else {
        alert("Sai tên đăng nhập hoặc mật khẩu!");
    }
});
