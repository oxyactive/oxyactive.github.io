function copyAddress(id) {
    const svgElement = document.getElementById(id + 'Input');
    const title = svgElement.getAttribute('title');

    navigator.clipboard.writeText(title).then(() => {
        alert('copied the discord to clipboard: @' + title);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

function removeOverlay() {
    var overlay = document.getElementById('overlay');
    var userpage = document.getElementById('user-page');
    var audio = document.getElementById('backgroundsong');

    overlay.style.opacity = '0';
    userpage.style.display = 'flex';
    audio.volume = 0.3;
    audio.play();

    setTimeout(function() { 
        overlay.style.display = 'none';
    }, 2000);
}

function toggleMusic() {
    var mutebtn = document.getElementById("mutetext");
    mutebtn.innerHTML = (mutebtn.innerHTML === "off") ? "on" : "off";

    var audio = document.getElementById('backgroundsong');
    audio.muted = !audio.muted;
}

document.addEventListener("DOMContentLoaded", () => {
    // Immediately remove overlay on page load
    removeOverlay();

    // Title typewriter effect
    const prefix = "⠐ ";
    const titleText = "oxy";
    let index = 0;
    let isDeleting = false;

    function titleTypeWriter() {
        document.title = prefix + titleText.substring(0, index);

        if (!isDeleting && index < titleText.length) {
            index++;
            setTimeout(titleTypeWriter, 200);
        } else if (isDeleting && index > 0) {
            index--;
            setTimeout(titleTypeWriter, 200);
        } else {
            isDeleting = !isDeleting;
            setTimeout(titleTypeWriter, 1000);
        }
    }

    titleTypeWriter();

    // Multiple elements typewriter effect
    const elements = document.querySelectorAll('.typewriter');
    const texts = [".gg/oxyshorts", "i love brooke <3", "#999"];
    const typingSpeed = 100;
    const pauseDuration = 1000;
    let currentIndex = 0;

    elements.forEach((element) => {
        element.textContent = '';
        let textIndex = 0;
        let forward = true;

        function elementTypeWriter() {
            const currentText = texts[currentIndex];

            if (forward) {
                if (textIndex < currentText.length) {
                    element.textContent += currentText.charAt(textIndex);
                    textIndex++;
                    setTimeout(elementTypeWriter, typingSpeed);
                } else {
                    setTimeout(() => {
                        forward = false;
                        elementTypeWriter();
                    }, pauseDuration);
                }
            } else {
                if (textIndex > 0) {
                    textIndex--;
                    element.textContent = currentText.substring(0, textIndex);
                    setTimeout(elementTypeWriter, typingSpeed);
                } else {
                    currentIndex = (currentIndex + 1) % texts.length;
                    forward = true;
                    setTimeout(elementTypeWriter, pauseDuration);
                }
            }
        }

        elementTypeWriter();
    });
});
