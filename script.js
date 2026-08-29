/* =========================================================
   JUSTINE & YVAN — SCRIPT GLOBAL
   04.09.2027
========================================================= */


/* =========================================================
   COMPTE À REBOURS
========================================================= */

const weddingDate =
    new Date(
        "2027-09-04T14:30:00"
    ).getTime();


function updateCountdown() {

    const ids = [
        "days",
        "hours",
        "minutes",
        "seconds"
    ];


    const elements =
        ids.map(
            function(id) {

                return document.getElementById(id);

            }
        );


    /*
        Si la page ne contient pas le compte à rebours,
        on arrête simplement la fonction.
    */

    if (
        elements.some(
            function(element) {

                return !element;

            }
        )
    ) {

        return;

    }


    const now =
        Date.now();


    const distance =
        weddingDate - now;


    /*
        Quand le mariage est arrivé,
        le compteur reste à zéro.
    */

    if (
        distance <= 0
    ) {

        elements[0].textContent =
            "000";

        elements[1].textContent =
            "00";

        elements[2].textContent =
            "00";

        elements[3].textContent =
            "00";

        return;

    }


    const days =
        Math.floor(
            distance /
            (
                1000 *
                60 *
                60 *
                24
            )
        );


    const hours =
        Math.floor(
            (
                distance /
                (
                    1000 *
                    60 *
                    60
                )
            )
            %
            24
        );


    const minutes =
        Math.floor(
            (
                distance /
                (
                    1000 *
                    60
                )
            )
            %
            60
        );


    const seconds =
        Math.floor(
            (
                distance /
                1000
            )
            %
            60
        );


    elements[0].textContent =
        String(days)
            .padStart(
                3,
                "0"
            );


    elements[1].textContent =
        String(hours)
            .padStart(
                2,
                "0"
            );


    elements[2].textContent =
        String(minutes)
            .padStart(
                2,
                "0"
            );


    elements[3].textContent =
        String(seconds)
            .padStart(
                2,
                "0"
            );

}


/*
    Premier affichage immédiatement.
*/

updateCountdown();


/*
    Puis mise à jour toutes les secondes.
*/

setInterval(
    updateCountdown,
    1000
);



/* =========================================================
   FAQ
========================================================= */

const faqButtons =
    document.querySelectorAll(
        ".faq-question"
    );


faqButtons.forEach(
    function(button) {


        button.addEventListener(
            "click",
            function() {


                const currentItem =
                    button.closest(
                        ".faq-item"
                    );


                if (
                    !currentItem
                ) {

                    return;

                }


                const wasOpen =
                    currentItem
                        .classList
                        .contains(
                            "open"
                        );


                /*
                    On ferme d'abord toutes les questions.
                */

                document
                    .querySelectorAll(
                        ".faq-item"
                    )
                    .forEach(
                        function(item) {


                            item
                                .classList
                                .remove(
                                    "open"
                                );


                            const symbol =
                                item.querySelector(
                                    ".faq-symbol"
                                );


                            if (
                                symbol
                            ) {

                                symbol.textContent =
                                    "+";

                            }


                        }
                    );


                /*
                    Si la question n'était pas déjà ouverte,
                    on l'ouvre.
                */

                if (
                    !wasOpen
                ) {


                    currentItem
                        .classList
                        .add(
                            "open"
                        );


                    const symbol =
                        currentItem
                            .querySelector(
                                ".faq-symbol"
                            );


                    if (
                        symbol
                    ) {

                        symbol.textContent =
                            "−";

                    }


                }


            }
        );


    }
);
