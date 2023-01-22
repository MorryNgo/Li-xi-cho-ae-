const box = document.querySelector(".box")
const thiep= document.querySelector("body > div > div.bia")
const nap = document.querySelector("body > div > div.nap");
const lixi = document.querySelector("body > div > div.li-xi")
const song = document.getElementById("song")
song.load()
nap.addEventListener("click",open)
function open(){
    nap.style.animation='open linear 2s forwards';
    setTimeout(function(){lixi.style.animation='push-up linear 2s forwards';   
    nap.style.zIndex=0;},3000)
    setTimeout(function(){
        thiep.style.animation='disappeared linear 2s forwards'
        box.style.background= 'transparent'
        nap.style.animation='disappeared linear 2s forwards'
        setTimeout(() => {
            nap.remove()
            thiep.remove()
            lixi.style.background="url(https://github.com/MorryNgo/li-xi/raw/main/unknown_1.png)"

            song.play();    
            lixi.style.backgroundSize="cover"
            box.style.height = "0"
            box.style.width="auto"
            box.style.top = "400px"
            lixi.style.height="500px"
            lixi.style.width="600px"
           }, 3000);
    },5000)
}

