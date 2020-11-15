// player.loadPlaylist({
//     list: ['PL5gLLgg_obcGCUdaFLIKtUtQVy9o_CbNI', 'PL5gLLgg_obcEOSMP241BWUs-guqfoKv7-', 'PL5gLLgg_obcHiqml4Fok1hE6Uw6Ct4nOS'],
//     listType: String,
//     index: Number,
//     startSeconds: Number,
// }); Void

document.getElementById("ytplayer").on("click", function () {
    document.getElementById("video1")[0].src += "?autoplay=1";
},



    function onYouTubeIframeAPIReady() {
        let player;
        player.loadPlaylist({
            list: ['PL5gLLgg_obcGCUdaFLIKtUtQVy9o_CbNI', 'PL5gLLgg_obcEOSMP241BWUs-guqfoKv7-', 'PL5gLLgg_obcHiqml4Fok1hE6Uw6Ct4nOS'],
            listType: String,
            index: Number,
            startSeconds: Number,
            width: 560,               // Player width (in px)
            height: 316,              // Player height (in px)
            playerVars: {
                autoplay: 1,        // Auto-play the video on load
                controls: 1,        // Show pause/play buttons in player
                showinfo: 0,        // Hide the video title
                modestbranding: 1,  // Hide the Youtube Logo
                loop: 1,            // Run the video in a loop
                fs: 0,              // Hide the full screen button
                cc_load_policy: 0, // Hide closed captions
                iv_load_policy: 3,  // Hide the Video Annotations
                autohide: 0         // Hide video controls when playing
            },
            events: {
                onReady: function (e) {
                    e.target.mute();
                }
            }
        });
    }
)
