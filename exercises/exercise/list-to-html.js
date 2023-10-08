const links = [
    {
        text: "الموقع باللغة العربية",
        href: "index-ar.html"
    },
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
]

let footer = document.querySelector("footer");
for(let link of links){
    let tlink = document.createElement("a");
    let tText = document.createTextNode(link.text);
    tlink.appendChild(tText);
    tlink.href = link.href;

    footer.prepend(tlink);
}