/* =========================================================
   TRISHA × VARUN
   INTERACTIONS
   ========================================================= */


/* =========================================================
   REASONS
   ========================================================= */

const reasons = [

    "CAUSE UR SO CUTEEEEE",

    "AND I LOVE SPENDING TIME WITH U",

    "U TAKE CARE OF ME SO WELL",

    "AND MAKE ME LAUGH",

    "THERE'S SO MANYYYY I CAN'T EVEN LIST THEM ALL",

];


let currentReason = 0;


const reasonText =
    document.getElementById("reasonText");

const reasonNumber =
    document.getElementById("reasonNumber");

const nextReason =
    document.getElementById("nextReason");


if (
    reasonText &&
    reasonNumber &&
    nextReason
) {

    nextReason.addEventListener(
        "click",
        function () {

            currentReason++;

            if (
                currentReason >= reasons.length
            ) {

                currentReason = 0;

            }


            /* Fade out */

            reasonText.style.opacity =
                "0";

            reasonText.style.transform =
                "translateY(10px)";


            /* Change reason */

            setTimeout(
                function () {

                    reasonText.textContent =
                        reasons[currentReason];

                    reasonNumber.textContent =
                        String(
                            currentReason + 1
                        ).padStart(2, "0");


                    /* Fade in */

                    reasonText.style.opacity =
                        "1";

                    reasonText.style.transform =
                        "translateY(0)";

                },
                200
            );

        }
    );

}



/* =========================================================
   SONG IMAGE LIGHTBOX
   ========================================================= */


const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const closeLightbox =
    document.getElementById("closeLightbox");


/* =========================================================
   OPEN SONG IMAGE
   ========================================================= */


document.querySelectorAll(".song-photo").forEach(
    function (photo) {

        photo.addEventListener(
            "click",
            function () {

                const image =
                    photo.querySelector("img");


                if (
                    !image ||
                    !lightbox ||
                    !lightboxImage
                ) {

                    return;

                }


                lightboxImage.src =
                    image.src;

                lightboxImage.alt =
                    image.alt;


                lightbox.classList.add(
                    "open"
                );


                document.body.style.overflow =
                    "hidden";

            }
        );

    }
);



/* =========================================================
   CLOSE LIGHTBOX
   ========================================================= */


function closeImage() {

    if (!lightbox) {

        return;

    }


    lightbox.classList.remove(
        "open"
    );


    document.body.style.overflow =
        "";

}


/* Close using X */

if (closeLightbox) {

    closeLightbox.addEventListener(
        "click",
        closeImage
    );

}


/* Close by clicking outside image */

if (lightbox) {

    lightbox.addEventListener(
        "click",
        function (event) {

            if (
                event.target === lightbox
            ) {

                closeImage();

            }

        }
    );

}


/* Close using Escape */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeImage();

        }

    }
);



/* =========================================================
   SCROLL REVEAL ANIMATIONS
   ========================================================= */


const elements =
    document.querySelectorAll(
        ".memory-card, .song-photo, .cute-stat, .place-card, .person-card, .letter-paper"
    );


elements.forEach(
    function (element) {

        element.classList.add(
            "reveal"
        );

    }
);


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );


                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


elements.forEach(
    function (element) {

        observer.observe(
            element
        );

    }
);



/* =========================================================
   RANDOM LITTLE HEARTS
   ========================================================= */

/*
   A small ♡ or ✦ appears wherever
   you click a button or link.
*/


document.addEventListener(
    "click",
    function (event) {

        if (
            event.target.closest("button") ||
            event.target.closest("a")
        ) {

            createHeart(
                event.clientX,
                event.clientY
            );

        }

    }
);



/* =========================================================
   CREATE HEART
   ========================================================= */


function createHeart(x, y) {

    const heart =
        document.createElement(
            "span"
        );


    /* Random symbol */

    heart.textContent =
        Math.random() > 0.5
            ? "♡"
            : "✦";


    /* Position */

    heart.style.position =
        "fixed";

    heart.style.left =
        x + "px";

    heart.style.top =
        y + "px";


    /* Appearance */

    heart.style.pointerEvents =
        "none";

    heart.style.zIndex =
        "3000";

    heart.style.color =
        "#f58ca8";

    heart.style.fontSize =
        "18px";

    heart.style.transition =
        "all 1s ease";


    /* Add to page */

    document.body.appendChild(
        heart
    );


    /* Animate */

    requestAnimationFrame(
        function () {

            heart.style.transform =
                `translate(
                    ${Math.random() * 50 - 25}px,
                    -70px
                ) rotate(20deg)`;


            heart.style.opacity =
                "0";

        }
    );


    /* Remove after animation */

    setTimeout(
        function () {

            heart.remove();

        },
        1000
    );

}