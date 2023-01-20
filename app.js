const box = document.querySelector(".box")
const thiep= document.querySelector("body > div > div.bia")
const nap = document.querySelector("body > div > div.nap");
const lixi = document.querySelector("body > div > div.li-xi")
const song = document.getElementById("song")
nap.addEventListener("click",open)

function open(){
    nap.style.animation='open linear 2s forwards';
    setTimeout(function(){lixi.style.animation='push-up linear 2s forwards';   nap.style.zIndex=0},3000)
    setTimeout(function(){
        thiep.style.animation='disappeared linear 2s forwards'
        box.style.background= 'transparent'
        nap.style.animation='disappeared linear 2s forwards'
    },5000)
    setTimeout(function(){
        lixi.innerHTML='a'
        lixi.style.animation='sizeup linear 3s forwards'
            setTimeout(() => {
                lixi.innerHTML='a iu'
            }, 2000);
            setTimeout(() => {
                lixi.innerHTML='a iu e'
            }, 3000);
            song.play()
            song.loop = true;
},7500)
}

