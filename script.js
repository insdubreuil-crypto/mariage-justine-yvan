/* =========================
   COMPTE À REBOURS
========================= */

const weddingDate =
    new Date("2027-09-04T14:30:00").getTime();

function updateCountdown() {

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    if (
        !daysElement ||
        !hoursElement ||
        !minutesElement ||
        !secondsElement
    ) {
        return;
    }

    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {
        daysElement.textContent = "000";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";
        return;
    }

    const days =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours =
        Math.floor((distance / (1000 * 60 * 60)) % 24);

    const minutes =
        Math.floor((distance / (1000 * 60)) % 60);

    const seconds =
        Math.floor((distance / 1000) % 60);

    daysElement.textContent =
        String(days).padStart(3, "0");

    hoursElement.textContent =
        String(hours).padStart(2, "0");

    minutesElement.textContent =
        String(minutes).padStart(2, "0");

    secondsElement.textContent =
        String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);


/* =========================
   FAQ
========================= */

document
    .querySelectorAll(".faq-question")
    .forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                const item =
                    this.closest(".faq-item");

                item.classList.toggle("open");

                const symbol =
                    this.querySelector(".faq-symbol");

                if (symbol) {
                    symbol.textContent =
                        item.classList.contains("open")
                        ? "−"
                        : "+";
                }
            }
        );
    });
