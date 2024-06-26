console.log("Hello, world!");
gsap.registerPlugin(ScrollTrigger);

// CURRENT TIME
// Function to update the displayed time
function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // Add leading zeros if needed
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    // Display the updated time
    document.getElementById("currentTime").textContent =
        hours + ":" + minutes + ":" + seconds;
}

// Update the clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);

// /* Source code trail cursor: https://www.youtube.com/watch?v=7eE8xPyXSR4 */
// const coords = { x: 0, y: 0 };
// const circles = document.querySelectorAll(".circle");

// const cursor = document.querySelector(".cursor");

// circles.forEach(function (circle, index) {
//     circle.x = 0;
//     circle.y = 0;
//     circle.style.backgroundColor = "white";
// });

// window.addEventListener("mousemove", function (e) {
//     coords.x = e.clientX;
//     coords.y = e.clientY;
// });

// function animateCircles() {
//     let x = coords.x;
//     let y = coords.y;

//     cursor.style.top = x;
//     cursor.style.left = y;

//     circles.forEach(function (circle, index) {
//         circle.style.left = x - 12 + "px";
//         circle.style.top = y - 12 + "px";

//         circle.style.scale = (circles.length - index) / circles.length;

//         circle.x = x;
//         circle.y = y;

//         const nextCircle = circles[index + 1] || circles[0];
//         x += (nextCircle.x - x) * 0.3;
//         y += (nextCircle.y - y) * 0.3;
//     });

//     requestAnimationFrame(animateCircles);
// }

// animateCircles();

// INTRO
// Rose animation
// const introRoseImg = document.querySelector("#loading_screen__rose");
// console.log(introRoseImg);

// gsap.from(introRoseImg, {
//     opacity: 0,
//     // rotation: 100,
//     // duration: 2.5,
//     duration: 0.00001,
//     // ease: "elastic.out(1,0.3)",
//     onComplete: () => {
//         const blackScreen = document.querySelector("#loading_screen");
//         // Page move up
//         gsap.fromTo(
//             blackScreen,
//             {},
//             {
//                 y: "-100dvh",
//                 // duration: 3.2,
//                 duration: 0.00001,
//                 ease: "expo.out",
//                 width: "200%",
//                 onComplete: () => {
//                     blackScreen.remove();
//                 },
//             }
//         );
//     },
// });

const headerLogo = document.querySelector(".logo");
const paths = headerLogo.querySelectorAll("path");
const rotationTimeline = gsap.timeline({ paused: true });

rotationTimeline.to(headerLogo, {
    rotation: 360,
    duration: 2,
    ease: "none",
    repeat: -1,
});
rotationTimeline.to(
    paths,
    {
        fill: "darkred",
        duration: 0,
    },
    0
);

headerLogo.addEventListener("mouseenter", () => {
    rotationTimeline.play();
});
headerLogo.addEventListener("mouseleave", () => {
    rotationTimeline.reverse();
});

// Header shift
// gsap.registerPlugin(ScrollTrigger);

// const header = document.querySelector("header");
// const metadata = document.querySelector("header > #metadata");

// function animateElement(element) {
//     gsap.to(element, {
//         flexDirection: "row",
//         scrollTrigger: {
//             trigger: element,
//             start: "top 20vh",
//             scrub: true,
//             markers: true,
//         },
//     });
// }

// animateElement(header);
// animateElement(metadata);

// LANDING PAGE
// Name scroll
// SRC: www.youtube.com/watch?v=AqMESJ51e3o - Tweaked to work without React
window.addEventListener("load", () => {
    const firstText = document.querySelector(".first-text");
    const secondText = document.querySelector(".second-text");
    const slider = document.querySelector(".slider");

    let xPercent = 0;
    let direction = -1;

    const animate = () => {
        if (xPercent < -100) {
            xPercent = 0;
        } else if (xPercent > 0) {
            xPercent = -100;
        }
        firstText.style.transform = `translateX(${xPercent}%)`;
        secondText.style.transform = `translateX(${xPercent}%)`;
        requestAnimationFrame(animate);
        xPercent += 0.1 * direction;
    };

    // Start animation
    animate();

    // ScrollTrigger setup
    gsap.to(slider, {
        scrollTrigger: {
            trigger: document.documentElement,
            scrub: 0.25,
            start: 0,
            end: window.innerHeight,
            onUpdate: (e) => (direction = e.direction * -1),
        },
        x: "-500px",
    });
});

// INTRO
document.addEventListener("DOMContentLoaded", () => {
    gsap.set(".img", { y: "100dvh" });
    gsap.set(".slider__container", { y: 200, opacity: 0.25 });
    gsap.set("header", { y: 25, opacity: 0 });
    gsap.set("h1", { y: 25, opacity: 0 });

    const tl = gsap.timeline({ delay: 1 });

    tl.to("img", {
        y: "-100dvh",
        duration: 1.5,
        stagger: 0.05,
        ease: "power3.inOut",
    })
        // .to(
        //     ".loader-imgs",
        //     {
        //         x: 0,
        //         duration: 3,
        //         ease: "power3.inOut",
        //     },
        //     "-=2.5"
        // )
        .to(".loader", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 1,
            ease: "power3.inOut",
        })
        .to(
            ".slider__container",
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.1,
                ease: "power3.inOut",
            },
            "-=0.1"
        )
        .to(
            ["header", "h1"],
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.1,
                ease: "power3.inOut",
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            },
            "-=0.25"
        );
});
