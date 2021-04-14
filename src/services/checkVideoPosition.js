export default function checkVideoInViewport(elements) {
 
    document.addEventListener("scroll", () => {

        elements.forEach((element) => {

            if (!getVideoPosition(element) && !element.paused) {
                element.pause();
            }
        });
    });
}

function getVideoPosition(el) {
    var rect = el.getBoundingClientRect();
    return !(rect.top > window.innerHeight || rect.bottom < 0);
}

