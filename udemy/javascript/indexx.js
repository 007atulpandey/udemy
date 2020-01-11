const parallex= document.getElementById("parallex");
window.addEventListener('scroll',function()
{
    let offset=window.pageYOffset;
    console.log(offset);
    parallex.style.backgroundPositionY=offset*0.5 +"px";

})
const par= document.getElementById("par");
window.addEventListener('scroll',function()
{
    let offset=window.pageYOffset;
    console.log(offset);
    par.style.backgroundPositionY=offset*1 +"px";

})
