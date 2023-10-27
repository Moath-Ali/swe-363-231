class footerItem{
    constructor(text,href){
        this.text = text;
        this.href = href;
    }

}


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
let listOfObject = []
for(let link of links){
    listOfObject.push(new footerItem(link.text, link.href));
}


let footer = document.querySelector("footer");
for(let link of listOfObject){
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


//api stuff
fetch("https://api.api-ninjas.com/v1/hobbies?category=general", {
    headers:{
        'X-Api-Key': 'n93UmEBxz5jz+Khk/jXJVQ==6d4CRkFR46xH80UN'
    }
})
.then((res)=>{
    return res.json();
})
.then((data) =>{
    const h2 = document.getElementById("hobby");
    h2.innerText = h2.innerText+" "+data.hobby
})
.catch((e)=>{
    console.log("ERROR",e);
})
