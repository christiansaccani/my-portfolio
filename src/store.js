import { reactive } from 'vue'

export const store = reactive({

    arrayNav: ["About", "Projects", "Contacts"],
    
    arrayLanguages: [
        { name: "HTML", icon: '<i class="fa-brands fa-html5"></i>', color: "#e5532d" },
        { name: "CSS", icon: '<i class="fa-brands fa-css3-alt"></i>' },
        { name: "JavaScript", icon: '<i class="fa-brands fa-js"></i>'},
        { name: "PHP", icon: '<i class="fa-brands fa-php"></i>' }
    ],
    
    arrayLibraries: [
        { name: "Bootstrap", icon: '<i class="fa-brands fa-bootstrap"></i>'},
        { name: "React", icon: '<i class="fa-brands fa-react"></i>'},
        { name: "Vue/Vite", icon: '<i class="fa-brands fa-vuejs"></i>'},
        { name: "Laravel", icon: '<i class="fa-brands fa-laravel"></i>'},
    ],

    arraySocials: [
        { name: "GitHub", icon: '<i class="fa-brands fa-github"></i>', link:'https://github.com/christiansaccani'},
        { name: "Linkedin", icon: '<i class="fa-brands fa-linkedin-in"></i>', link:'https://www.linkedin.com/in/christian-saccani-a9445a208/'},
        { name: "Instagram", icon: '<i class="fa-brands fa-instagram"></i>', link:'https://www.instagram.com/'},
        // { name: "Mail", icon: '<i class="fa-regular fa-envelope"></i>', link:'mailto:christian.saccani99@gmail.com'},
    ]

});