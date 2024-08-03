const shareBtn = document.getElementById("share");
const authorInfo = document.getElementById("author-info");
const socialMedia = document.getElementById("social-media");

function toggleSocialMediaLinks() {
    authorInfo.classList.toggle("hidden");
    socialMedia.classList.toggle("hidden");
    shareBtn.classList.toggle("active");
}
shareBtn.addEventListener("click", toggleSocialMediaLinks);
