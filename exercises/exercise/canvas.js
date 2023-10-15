const canv = document.getElementById("canvas");
let write = false
const ctx = canv.getContext("2d")


const tagPos = (e)=>{
    let x = e.clientX - e.target.getBoundingClientRect().x;
    let y = e.clientY - e.target.getBoundingClientRect().y;

    return [x,y]
}


ctx.lineWidth = 2;
ctx.lineJoin = ctx.lineCap = "round";

canv.addEventListener("pointerdown",(e)=>{
    write = true;
    ctx.beginPath();

    const [x,y] = tagPos(e);
    ctx.moveTo(x,y)
})
canv.addEventListener("pointerup",()=>{
    write=false;
})
canv.addEventListener("pointermove",(e)=>{
    if(!write) return;
    const [x,y] = tagPos(e);
    ctx.lineTo(x,y);
    ctx.stroke();
})