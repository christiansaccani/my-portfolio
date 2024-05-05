import { reactive } from 'vue'

export const store = reactive({

    arrayNav: ["About", "Projects", "Contacts"],
    
    arrayLanguages: [
        { name: "HTML", icon: '<i class="fa-brands fa-html5"></i>', color: "#e5532d" },
        { name: "CSS", icon: '<i class="fa-brands fa-css3-alt"></i>' },
        { name: "JavaScript", icon: '<i class="fa-brands fa-js"></i>'},
        { name: "SASS/SCSS", icon: '<i class="fa-brands fa-sass"></i>'},
        { name: "PHP", icon: '<i class="fa-brands fa-php"></i>' }
    ],
    
    arrayLibraries: [
        { name: "Bootstrap", icon: '<i class="fa-brands fa-bootstrap"></i>'},
        { name: "Vue/Vite", icon: '<i class="fa-brands fa-vuejs"></i>'},
        { name: "Laravel", icon: '<i class="fa-brands fa-laravel"></i>'},
        { name: "React", icon: '<i class="fa-brands fa-react"></i>'},
    ],

    arraySocials: [
        { name: "GitHub", icon: '<i class="fa-brands fa-github"></i>'},
        { name: "Instagram", icon: '<i class="fa-brands fa-instagram"></i>'},
        { name: "Linkedin", icon: '<i class="fa-brands fa-linkedin-in"></i>'},
        { name: "Mail", icon: '<i class="fa-regular fa-envelope"></i>'},
    ]

});