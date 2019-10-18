new Vue({
    el: "#projects",
    data: {
        projects: [
            {
                name: "0 + 1 = SOM",
                description:
                    "Created as a partnership with Braga Media Arts, it is a software and education programme with the goal of stimulating musical creation through logic and reasoning.",
                image: "img/software/01som.png",
                url: "https://01som.casadamusica.com/"
            },
            {
                name: "Caça Sons",
                description:
                    "Created as a partnership with the Porto City Hall, it is a software and education programme with the goal of stimulating deep listening and focus through music.",
                image: "img/software/cacasons.png",
                url: "http://digitopia.casadamusica.com/sons"
            },
            {
                name: "DigiDrone",
                description:
                    "Created as a partnership with Jazz ao Centro Clube, it is a software for music making, used as a tool for improvisation and music teaching.",
                image: "img/software/digidrone.png",
                url: "http://digitopia.casadamusica.com/DigiDrone"
            },
            {
                name: "Caixa de Ritmos",
                description:
                    "An ongoing project for the Caixa de Ritmos workshop by Paulo Neto and António Miguel.",
                image: "img/software/caixaritmos.png",
                url: "http://digitopia.casadamusica.com/CaixaRitmos"
            },
            {
                name: "Nouvelle Cuisine",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.",
                image: "img/software/nouvellecuisine.png",
                url: "http://digitopia.casadamusica.com/nouvellecuisine"
            },
            {
                name: "DigiGranular",
                description:
                    "Currently under development, DigiGranular is a web-based granular synthesis instrument.",
                image: "img/software/digigranular.png",
                url: "http://digitopia.casadamusica.com/DigiGranular"
            },
            {
                name: "DigiSonic",
                description:
                    "Currently under development, DigiSonic is a website focused on live coding in music, to be used by portuguese students.",
                image: "img/software/digisonic.png",
                url: "http://digitopia.casadamusica.com/DigiSonic"
            },
            {
                name: "NepTune",
                description:
                    "Created as a partnership SPACE, a Erasmus+ project, NepTune is a tool to be used in STEAM education, using the planets from our solar system as musical instruments.",
                image: "img/software/neptune.png",
                url: "https://neptune.nunoh.com/"
            },
            {
                name: "Gamult",
                description:
                    "Gamult was created as a controller for Casa da Música's Robotic Gamelan, and it is available in both the App Store and Play Store.",
                image: "img/software/gamult.png",
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
                position: "Curator, workshop leading, performance",
                about: "Óscar Rodrigues is a composer and educator from Porto. A member of the team since 2010, he's the current curator.",
                image: "img/team/oscar.jpg"
            },
            {
                name: "Pedro Augusto",
                position: "Sound art, performance",
                about: "Pedro Augusto is an artist and musician working in the fields of electronic music, performance art and installation.",
                image: "img/team/augusto.jpg"
            },
            {
                name: "Nuno Hespanhol",
                position: "Web development and programming",
                about: "Nuno is in charge of most of the code on Digitópia's projects. He is also a musician (studied classical guitar).",
                image: "img/team/nuno.png"
            },
            {
                name: "Filipe Fernandes",
                position: "Workshop leading, interactivity, performance",
                about: "Filipe is a composer specializing in electronics and community projects.",
                image: "img/team/filipe.jpg"
            },
            {
                name: "Manuel Brásio",
                position: "Video, performance",
                about: "Manuel is a composer and also handles Digitópia's video projects.",
                image: "img/team/brasio.jpg"
            },
            {
                name: "Ricardo Vieira",
                position: "Sound design, interactivity, performance",
                about: "Ricardo is a Jazz pianist specializing in electronics, performance, and sound installations.",
                image: "img/team/ricardo.jpg"
            },
        ]
    }
});

new Vue({
    el: "#noticias",
    data: {
        noticias: [
            {
                title: "Coming soon",
                subtitle: "Late October 2019",
                text: "This space is dedicated to the communication of Digitópia's activities, and its research."
            },
            {
                title: "Coming soon",
                subtitle: "Late October 2019",
                text: "This space is dedicated to the communication of Digitópia's activities, and its research."
            },
            {
                title: "Coming soon",
                subtitle: "Late October 2019",
                text: "This space is dedicated to the communication of Digitópia's activities, and its research."
            },
            {
                title: "Coming soon",
                subtitle: "Late October 2019",
                text: "This space is dedicated to the communication of Digitópia's activities, and its research."
            },
            {
                title: "Coming soon",
                subtitle: "Late October 2019",
                text: "This space is dedicated to the communication of Digitópia's activities, and its research."
            },
        ]
    }
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
