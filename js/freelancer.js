(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 71
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Scroll to top button appear
    $(document).scroll(function() {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $(".scroll-to-top").fadeIn();
        } else {
            $(".scroll-to-top").fadeOut();
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function() {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 80
    });

    // Collapse Navbar
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Floating label headings for the contact form
    $(function() {
        $("body")
            .on("input propertychange", ".floating-label-form-group", function(
                e
            ) {
                $(this).toggleClass(
                    "floating-label-form-group-with-value",
                    !!$(e.target).val()
                );
            })
            .on("focus", ".floating-label-form-group", function() {
                $(this).addClass("floating-label-form-group-with-focus");
            })
            .on("blur", ".floating-label-form-group", function() {
                $(this).removeClass("floating-label-form-group-with-focus");
            });
    });
})(jQuery); // End of use strict

new Vue({
    el: "#projects",
    data: {
        projects: [
            {
                name: "0 + 1 = SOM",
                description:
                    "Some quick example text to build on the card title and make up the bulk of the card's content.",
                image: "https://bulma.io/images/placeholders/1280x960.png",
                url: "https://01som.casadamusica.com/"
            },
            {
                name: "Caça Sons",
                description:
                    "Some quick example text to build on the card title and make up the bulk of the card's content.",
                image: "https://bulma.io/images/placeholders/1280x960.png",
                url: "https://cacasons.netlify.com/"
            },
            {
                name: "DigiGranular",
                description:
                    "Some quick example text to build on the card title and make up the bulk of the card's content.",
                image: "https://bulma.io/images/placeholders/1280x960.png",
                url: "https://digigranular.netlify.com"
            },
            {
                name: "DigiSonic",
                description:
                    "Some quick example text to build on the card title and make up the bulk of the card's content.",
                image: "https://bulma.io/images/placeholders/1280x960.png",
                url: "https://digisonic.netlify.com"
            },
            {
                name: "NepTune",
                description:
                    "Some quick example text to build on the card title and make up the bulk of the card's content.",
                image: "https://bulma.io/images/placeholders/1280x960.png",
                url: "https://neptune.nunoh.com/"
            },
            {
                name: "Gamult",
                description:
                    "Some quick example text to build on the card title and make up the bulk of the card's content.",
                image: "https://bulma.io/images/placeholders/1280x960.png",
                url: "https://digitopia.casadamusica.com/Gamult/"
            }
        ]
    }
});

new Vue({
    el: "#equipa",
    data: {
        team: [
            {
                name: "Óscar Rodrigues",
                position: "Curator",
                about: "Lorem ipsum dolor sit amet.",
                image: "img/team/oscar.jpg"
            },
            {
                name: "Pedro Augusto",
                position: "Curator",
                about: "Lorem ipsum dolor sit amet.",
                image: "img/team/augusto.jpg"
            },
            {
                name: "Nuno Hespanhol",
                position: "Curator",
                about: "Lorem ipsum dolor sit amet.",
                image: "img/team/nuno.png"
            },
            {
                name: "Filipe Fernandes",
                position: "Curator",
                about: "Lorem ipsum dolor sit amet.",
                image: "img/team/filipe.jpg"
            },
            {
                name: "Manuel Brásio",
                position: "Curator",
                about: "Lorem ipsum dolor sit amet.",
                image: "img/team/brasio.jpg"
            },
            {
                name: "Ricardo Vieira",
                position: "Curator",
                about: "Lorem ipsum dolor sit amet.",
                image: "img/team/ricardo.jpg"
            },
        ]
    }
});

new Vue({
    el: "#noticias"
});

new Vue({
    el: "#contactos",
    data: {
        socials: [
            {
                icon: "fa fa-envelope",
                url: "mailto:digitopia@casadamusica.com"
            },
            {
                icon: "fab fa-facebook-f",
                url: "https://www.facebook.com/DigitopiaCasaDaMusica"
            },
            {
                icon: "fab fa-youtube",
                url: "https://www.youtube.com/channel/UC4DkrdvxpZVrFCm_25Bi45Q"
            },
            {
                icon: "fab fa-instagram",
                url: "https://www.instagram.com/digitopiacasadamusica/"
            },
            {
                icon: "fab fa-vimeo",
                url: "https://vimeo.com/digitopia"
            },
            {
                icon: "fab fa-github",
                url: "https://github.com/Digitopia"
            }
        ]
    }
});
