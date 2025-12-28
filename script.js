const links = document.querySelectorAll(".nav-link");

links.forEach(link => {
    link.addEventListener("click", function () {
        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});

// Active menu saat scroll
window.addEventListener("scroll", () => {
    let fromTop = window.scrollY + 80;

    links.forEach(link => {
        const section = document.querySelector(link.getAttribute("href"));
        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        }
    });
});

function showGallery(type) {
  const galleries = document.querySelectorAll('.gallery');
  const tabs = document.querySelectorAll('.tab');

  galleries.forEach(g => g.classList.remove('active'));
  tabs.forEach(t => t.classList.remove('active'));

  document.getElementById(type).classList.add('active');
  event.target.classList.add('active');
}

// Scroll ke section project
document.getElementById("scrollBtn").addEventListener("click", () => {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
});

// Copy email
document.getElementById("copyBtn").addEventListener("click", () => {
    const email = document.getElementById("email").innerText;
    navigator.clipboard.writeText(email);
    alert("Email berhasil disalin!");
});