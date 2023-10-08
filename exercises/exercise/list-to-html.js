const links = [
    {
        text: "Details",
        href: "Details-Page.html"
    },
    {
        text: "Contact Us",
        href: "Contact-Page.html"
    },
    {
        text: "Create Your Course",
        href: "Create-Course.html"
    },
    {
        text: "Mini-Games",
        href: "mini-games.html"
    },
    {
        text: "الموقع باللغة العربية",
        href: "index-ar.html"
    }
]

let footer = document.querySelector("footer");
for(let link of links){
    let tlink = document.createElement("a");
    tlink.title = link.text;
    tlink.href = link.href;

    footer.appendChild(tlink);
}