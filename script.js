// =========================================================
// 1. HIGHLIGHT MENU NAVIGASI AKTIF OTOMATIS
// =========================================================
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href");
        
        // Hapus class active bawaan
        link.classList.remove("active");

        // Jika URL cocok atau berada di halaman utama (index)
        if (currentPage === linkPage || (currentPage === "" && linkPage === "index.html")) {
            link.classList.add("active");
        }
    });
});

// =========================================================
// 2. TOMBOL BACK TO TOP
// =========================================================
// Buat elemen tombol secara dinamis
const backToTopBtn = document.createElement("button");
backToTopBtn.innerHTML = "↑";
backToTopBtn.id = "backToTop";
document.body.appendChild(backToTopBtn);

// Tampilkan tombol hanya saat halaman di-scroll ke bawah
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

// Efek scroll halus saat tombol diklik
backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchBerita");
    const cards = document.querySelectorAll(".card-berita-home");
    const gridBerita = document.querySelector(".grid-berita-home");

    if (searchInput && cards.length > 0) {
        // Buat elemen pesan 'Tidak Ditemukan'
        const noResults = document.createElement("div");
        noResults.className = "no-results-message";
        noResults.style.display = "none";
        noResults.innerHTML = "🔍 Berita yang Anda cari tidak ditemukan.";
        gridBerita.appendChild(noResults);

        searchInput.addEventListener("input", function () {
            const query = searchInput.value.toLowerCase().trim();
            let matches = 0;

            cards.forEach(card => {
                const title = card.querySelector("h3").textContent.toLowerCase();
                const desc = card.querySelector("p").textContent.toLowerCase();

                if (title.includes(query) || desc.includes(query)) {
                    card.style.display = "flex";
                    matches++;
                } else {
                    card.style.display = "none";
                }
            });

            // Tampilkan pesan jika hasil cari 0
            noResults.style.display = (matches === 0) ? "block" : "none";
        });
    }
});
