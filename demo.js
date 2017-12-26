$(document).ready(() => {
    // ion.sound BGM
    ion.sound({
        sounds: [
            {
                name: "bgm_1",
                loop: false
            },
        ],
        volume: 0.5,
        path: "http://ojcokbt6a.bkt.clouddn.com/", // my test URL
        preload: true,
        multiplay: false
    });

    var framesUrl = [];
    for (let i = 1; i < 50; i++) {
        framesUrl.push('./images/frame-' + i + '.gif');
    }

    // frame animation
    var ani = new frame_ani({
        canvasTargetId: "c-1", // target canvas ID
        framesUrl: framesUrl, // frames url
        loop: true, // if loop
        height: 264, // source image's height (px)
        width: 263, // source image's width (px)
        frequency: 20, // count of frames in one second
        audioIonName: "bgm_1", // ion.sound audio name
        onComplete: function() { // complete callback
          console.log("Animation loop.");
        },
    });

    // preload & play
    ani.initialize(() => {
        ani.play();
    });

});