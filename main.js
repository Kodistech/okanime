let movies = [];

const defaultMovies = [
    // ROM-COM
    {
        id: 4224,
        title: "Toradora!",
        image: "https://cdn.myanimelist.net/images/anime/13/22128.jpg",
        genre: "Comedy, Romance",
        description: "Ryuuji và Taiga - cặp đôi oan gia nhưng dần dần nảy sinh tình cảm.",
        rating: "8.1/10",
        episodes: 25,
        status: "Finished Airing",
        year: 2008
    },
    {
        id: 37999,
        title: "Kaguya-sama: Love is War",
        image: "https://cdn.myanimelist.net/images/anime/1295/106551.jpg",
        genre: "Comedy, Psychological, Romance",
        description: "Cuộc chiến tâm lý xem ai sẽ là người tỏ tình trước giữa Kaguya và Shirogane.",
        rating: "8.4/10",
        episodes: 12,
        status: "Finished Airing",
        year: 2019
    },
    {
        id: 14813,
        title: "Oregairu",
        image: "https://cdn.myanimelist.net/images/anime/1786/121050.jpg",
        genre: "Comedy, Romance, Drama",
        description: "Hachiman Hikigaya và những mối quan hệ phức tạp ở câu lạc bộ tình nguyện.",
        rating: "8.0/10",
        episodes: 13,
        status: "Finished Airing",
        year: 2013
    },
    // ACTION / SHONEN
    {
        id: 20,
        title: "Naruto",
        image: "https://cdn.myanimelist.net/images/anime/13/17405.jpg",
        genre: "Action, Adventure, Fantasy",
        description: "Naruto Uzumaki - cậu bé mang trong mình Cửu Vĩ và ước mơ trở thành Hokage.",
        rating: "8.0/10",
        episodes: 220,
        status: "Finished Airing",
        year: 2002
    },
    {
        id: 21,
        title: "One Piece",
        image: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
        genre: "Action, Adventure, Fantasy",
        description: "Monkey D. Luffy và hành trình trở thành Vua Hải Tặc.",
        rating: "8.7/10",
        episodes: "?",
        status: "Currently Airing",
        year: 1999
    },
    {
        id: 16498,
        title: "Attack on Titan",
        image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
        genre: "Action, Drama, Suspense",
        description: "Nhân loại chiến đấu chống lại những Titan khổng lồ để sinh tồn.",
        rating: "8.5/10",
        episodes: 25,
        status: "Finished Airing",
        year: 2013
    },
    {
        id: 40748,
        title: "Jujutsu Kaisen",
        image: "https://cdn.myanimelist.net/images/anime/1171/109504.jpg",
        genre: "Action, Fantasy, Supernatural",
        description: "Yuji Itadori nuốt ngón tay Sukuna và bước vào thế giới chú thuật.",
        rating: "8.6/10",
        episodes: 24,
        status: "Finished Airing",
        year: 2020
    },
    {
        id: 38000,
        title: "Demon Slayer",
        image: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
        genre: "Action, Fantasy, Historical",
        description: "Tanjiro Kamado trở thành sát quỷ để cứu em gái Nezuko.",
        rating: "8.5/10",
        episodes: 26,
        status: "Finished Airing",
        year: 2019
    },
    // FANTASY / ISEKAI
    {
        id: 30831,
        title: "KonoSuba",
        image: "https://cdn.myanimelist.net/images/anime/8/77831.jpg",
        genre: "Adventure, Comedy, Fantasy",
        description: "Kazuma bị triệu hồi sang thế giới khác cùng nữ thần Aqua.",
        rating: "8.1/10",
        episodes: 10,
        status: "Finished Airing",
        year: 2016
    },
    {
        id: 11757,
        title: "Sword Art Online",
        image: "https://cdn.myanimelist.net/images/anime/11/39717.jpg",
        genre: "Action, Adventure, Fantasy, Romance",
        description: "Kirito bị mắc kẹt trong game VR và phải chiến đấu để sống sót.",
        rating: "7.2/10",
        episodes: 25,
        status: "Finished Airing",
        year: 2012
    },
    {
        id: 5114,
        title: "Fullmetal Alchemist: Brotherhood",
        image: "https://cdn.myanimelist.net/images/anime/1208/94745.jpg",
        genre: "Action, Adventure, Drama, Fantasy",
        description: "Hai anh em Elric tìm cách lấy lại cơ thể sau tai nạn giả kim thuật.",
        rating: "9.1/10",
        episodes: 64,
        status: "Finished Airing",
        year: 2009
    },
    // KHÁC
    {
        id: 9253,
        title: "Steins;Gate",
        image: "https://cdn.myanimelist.net/images/anime/1935/127974.jpg",
        genre: "Sci-Fi, Thriller, Drama",
        description: "Okabe Rintarou và cỗ máy thời gian, cùng mối tình với Kurisu.",
        rating: "9.0/10",
        episodes: 24,
        status: "Finished Airing",
        year: 2011
    },
    {
        id: 1535,
        title: "Death Note",
        image: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
        genre: "Supernatural, Thriller, Psychological",
        description: "Light Yagami nhặt được quyển sổ tử thần và quyết định trở thành thần chết.",
        rating: "8.6/10",
        episodes: 37,
        status: "Finished Airing",
        year: 2006
    },
    {
        id: 20507,
        title: "Noragami",
        image: "https://cdn.myanimelist.net/images/anime/1886/142017.jpg",
        genre: "Action, Adventure, Supernatural",
        description: "Yato - vị thần nghèo và hành trình tìm kiếm tín đồ.",
        rating: "8.0/10",
        episodes: 12,
        status: "Finished Airing",
        year: 2014
    },
    {
        id: 22319,
        title: "Tokyo Ghoul",
        image: "https://cdn.myanimelist.net/images/anime/5/64449.jpg",
        genre: "Action, Drama, Horror, Supernatural",
        description: "Kaneki Ken trở thành nửa người nửa ghoul sau tai nạn.",
        rating: "7.8/10",
        episodes: 12,
        status: "Finished Airing",
        year: 2014
    }
];

// ====================== KHỞI ĐỘNG ======================
window.onload = function () {
    const currentUser = localStorage.getItem('currentUser');

    if (!currentUser) {
        alert("Vui lòng đăng nhập để xem phim!");
        window.location.href = 'login.html';
        return;
    }

    document.getElementById('username-display').innerText = `Chào, ${currentUser}!`;

    // Hiện danh sách mặc định ngay
    movies = [...defaultMovies];
    renderMovies();
};

// ====================== ĐĂNG XUẤT ======================
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
}

// ====================== SEARCH ======================
async function searchAnime() {
    const query = document.getElementById('search-input').value.trim();
    const movieGrid = document.getElementById('movie-grid');

    if (!query) {
        showDefault();
        return;
    }

    movieGrid.innerHTML = `<div class="loading">Đang tìm kiếm "${query}"...</div>`;

    const url = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&limit=20&sfw=true`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        if (!data.data || data.data.length === 0) {
            movieGrid.innerHTML = `
                <div class="error">
                    <p>Không tìm thấy anime nào với từ khóa "<strong>${query}</strong>"</p>
                    <button onclick="showDefault()">Quay lại danh sách</button>
                </div>
            `;
            return;
        }

        movies = data.data.map(anime => ({
            id: anime.mal_id,
            title: anime.title_english || anime.title,
            image: anime.images?.jpg?.large_image_url || anime.images?.jpg?.image_url || '',
            genre: (anime.genres || []).map(g => g.name).join(', ') || 'Anime',
            description: anime.synopsis ? anime.synopsis.slice(0, 250) + '...' : 'Chưa có mô tả.',
            rating: anime.score ? `${anime.score}/10` : 'N/A',
            episodes: anime.episodes || '?',
            status: anime.status || 'Unknown',
            year: anime.year || 'N/A'
        }));

        renderMovies();
    } catch (err) {
        console.error(err);
        movieGrid.innerHTML = `
            <div class="error">
                <p>❌ Lỗi khi gọi Jikan API</p>
                <button onclick="showDefault()">Quay lại danh sách</button>
            </div>
        `;
    }
}

function handleSearchKey(event) {
    if (event.key === 'Enter') {
        searchAnime();
    }
}

// ====================== LỌC THEO THỂ LOẠI ======================
async function loadAnimeFromJikan(mode = 'top') {
    const movieGrid = document.getElementById('movie-grid');
    movieGrid.innerHTML = `<div class="loading">Đang tải...</div>`;

    let url = '';

    if (mode === 'romcom') {
        url = `https://api.jikan.moe/v4/anime?genres=22,24&order_by=popularity&sort=asc&limit=20&sfw=true`;
    } else if (mode === 'action') {
        url = `https://api.jikan.moe/v4/anime?genres=1&order_by=popularity&sort=asc&limit=20&sfw=true`;
    } else {
        url = `https://api.jikan.moe/v4/top/anime?limit=20`;
    }

    try {
        const res = await fetch(url);
        const data = await res.json();

        if (!data.data || data.data.length === 0) {
            movieGrid.innerHTML = `<div class="error"><p>Không có dữ liệu.</p></div>`;
            return;
        }

        movies = data.data.map(anime => ({
            id: anime.mal_id,
            title: anime.title_english || anime.title,
            image: anime.images?.jpg?.large_image_url || anime.images?.jpg?.image_url || '',
            genre: (anime.genres || []).map(g => g.name).join(', ') || 'Anime',
            description: anime.synopsis ? anime.synopsis.slice(0, 250) + '...' : 'Chưa có mô tả.',
            rating: anime.score ? `${anime.score}/10` : 'N/A',
            episodes: anime.episodes || '?',
            status: anime.status || 'Unknown',
            year: anime.year || 'N/A'
        }));

        renderMovies();
    } catch (err) {
        console.error(err);
        movieGrid.innerHTML = `
            <div class="error">
                <p>❌ Lỗi API</p>
                <button onclick="showDefault()">Quay lại danh sách</button>
            </div>
        `;
    }
}

function showDefault() {
    movies = [...defaultMovies];
    renderMovies();
    document.getElementById('search-input').value = '';
}

// ====================== RENDER ======================
function renderMovies() {
    const movieGrid = document.getElementById('movie-grid');

    if (movies.length === 0) {
        movieGrid.innerHTML = '<p>Không có anime nào.</p>';
        return;
    }

    movieGrid.innerHTML = movies.map(movie => `
        <div class="movie-card" onclick="showDetail(${movie.id})">
            <img src="${movie.image}" alt="${movie.title}" loading="lazy"
                 onerror="this.src='https://via.placeholder.com/200x280?text=No+Image'">
            <h3>${movie.title}</h3>
            <p class="rating">⭐ ${movie.rating}</p>
            <p class="genre-tag">${movie.genre.split(',')[0]}</p>
        </div>
    `).join('');
}

// ====================== CHI TIẾT ======================
function showDetail(id) {
    const movie = movies.find(m => m.id === id);
    if (!movie) return;

    document.getElementById('movie-list-section').classList.add('hidden');
    document.getElementById('movie-detail-section').classList.remove('hidden');

    document.getElementById('detail-content').innerHTML = `
        <div class="detail-container">
            <img src="${movie.image}" alt="${movie.title}"
                 onerror="this.src='https://via.placeholder.com/300x420?text=No+Image'">
            <div class="info">
                <h1>${movie.title}</h1>
                <p><strong>Thể loại:</strong> ${movie.genre}</p>
                <p><strong>Đánh giá:</strong> ⭐ ${movie.rating}</p>
                <p><strong>Số tập:</strong> ${movie.episodes}</p>
                <p><strong>Trạng thái:</strong> ${movie.status}</p>
                <p><strong>Năm:</strong> ${movie.year}</p>
                <p><strong>Nội dung:</strong> ${movie.description}</p>
                <button class="back-btn" style="background: #27ae60; margin-top: 15px;"
                        onclick="alert('Tính năng xem phim sẽ được cập nhật sau!')">
                    Xem ngay
                </button>
            </div>
        </div>
    `;
}

function closeDetail() {
    document.getElementById('movie-list-section').classList.remove('hidden');
    document.getElementById('movie-detail-section').classList.add('hidden');
}