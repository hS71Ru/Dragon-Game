score = 0;
cross = true;
audio = new Audio ('gamemusic.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout( () =>{
        audio.play()
    }, 1000);

document.onkeydown = function(e){
    console.log("keyCodes is :",e.keycode)

    if(e.keycode == 38){
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(()=> {
            dino.classList.remove('animateDino')
        }, 700)
    }

        if(e.keycode == 39){
            dino = document.querySelector('.dino');
            dinoX= parseInt(window.getComputedStyle(dino , null).getPropertyValue('left'));
            dino.style.left= dinoX + 112 + "px";


        }
        if(e.keycode == 37){
            dino = document.querySelector('.dino');
            dinoX= parseInt(window.getComputedStyle(dino , null).getPropertyValue('left'));
            dino.style.left= (dinoX - 112) + "px";


        }
}

setInterval(() =>{
    dino=document.querySelector('.dino');
    gameOver=document.querySelector('.gameOver');
    obstacle= document.querySelector('.obstacle');
    dx= parseInt(window.getComputedStyle(dino , null).getPropertyValue('left'));
    dy= parseInt(window.getComputedStyle(dino , null).getPropertyValue('top'));

    ox= parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy= parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));

    offsetx=Math.abs(dx-ox);
    offsety=Math.abs(dy-oy);
})