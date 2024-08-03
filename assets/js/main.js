const shareBtn = document.getElementById("share");
const socialMedia = document.getElementById("social-media");

function toggleSocialMediaLinks() {
    socialMedia.classList.toggle("hidden");
    shareBtn.classList.toggle("active");
}

shareBtn.addEventListener("click", toggleSocialMediaLinks);
