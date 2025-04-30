document.addEventListener("DOMContentLoaded", function() {
    let mtext = document.getElementById("texttitle");
    let mvid = document.getElementById("promovideo");

    const message =  [
        "Join our company in Technology Zone of Visionary Innovation Hub for unparalleled opportunities in cutting-edge tech development! 15 QUOTAS LEFT!",
        "Become part of the Innovation Zone at Visionary Innovation Hub, where creativity meets research for groundbreaking solutions! 10 QUOTAS LEFT!",
        "Discover the Eco Zone at Visionary Innovation Hub, dedicated to sustainable practices and technologies for a greener future! 12 QUOTAS LEFT!"
    ];

    let i = Math.floor(Math.random() * message.length);
    mtext.innerHTML = message[i];

    function randomMessage() {
        i++;
        if (i > 2) {
            i = 0;
        }
        mtext.innerHTML = message[i];
    }
    setInterval(randomMessage, 3000); 

    const video = [
        '<source src="https://personal.cs.cityu.edu.hk/~cs2204/2024/video/video1.mp4" type="video/mp4"> <source src="https://personal.cs.cityu.edu.hk/~cs2204/2024/video/video1.webm" type="video/webm">',
        '<source src="https://personal.cs.cityu.edu.hk/~cs2204/2024/video/video2.mp4" type="video/mp4"> <source src="https://personal.cs.cityu.edu.hk/~cs2204/2024/video/video2.webm" type="video/webm">'
    ];

    let a = 0;
    mvid.innerHTML = video[a];

    mvid.addEventListener("ended", function() {
        if (a == 0) {
            a += 1;
        }
        else {
            a -= 1;
        }
        mvid.innerHTML = video[a];
        mvid.load();
        mvid.play();
    });
});