/* Module 3: 
Use local href if YouTube connection fails
__________________________________________________ */

document.addEventListener("DOMContentLoaded", function() {
    var videos = document.querySelectorAll(".video-container");

    videos.forEach(function(videoContainer) {
        var youtubeEmbed = videoContainer.querySelector(".youtube-embed");
        var localVideo = videoContainer.querySelector(".local-video");

        youtubeEmbed.style.display = "none"; // Hide the YouTube embed by default
        localVideo.style.display = "none"; // Hide the local video by default

        youtubeEmbed.onerror = function() {
            localVideo.style.display = "block";
            localVideo.play();
        };

        if (!youtubeEmbed.getAttribute("onerror")) {
            youtubeEmbed.style.display = "block";
        } else {
            localVideo.style.display = "block";
            localVideo.play();
        }
    });
});
