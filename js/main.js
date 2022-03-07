let sections = [...document.getElementsByTagName("main")[0].children];


sections.forEach(element => {
    element.classList.add("hide-section")
});

sections[0].classList.remove("hide-section");

[...document.getElementById("navigator").children].forEach(element => {
    element.addEventListener("click", () => {
        [...document.getElementById("navigator").children].forEach(element => {
            element.classList.remove("nav-item-selected")
        })
        element.classList.add("nav-item-selected")
        sections.forEach(element => {
            element.classList.add("hide-section")
        })
        document.getElementById(element.id.substring(4)).classList.remove("hide-section");
    })
})