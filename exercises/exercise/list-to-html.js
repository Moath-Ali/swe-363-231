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
    tlink.innerText = link.text;
    tlink.href = link.href;

    footer.prepend(tlink);
}


//this is to remove the alert
const cbtn = document.getElementById("closeBtn");
const alert = document.querySelector("alert") ;
cbtn.addEventListener("click",()=>{
    alert.remove();
})