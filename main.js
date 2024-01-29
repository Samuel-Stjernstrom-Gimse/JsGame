import  './style.css'
import {resources} from "./src/resorce";

const  canvas = document.querySelector('#game-canvas')
const  ctx = canvas.getContext('2d')

const  draw = () => {
    const  player = resources.images.player
    if(player.isLoaded) {
        ctx.drawImage(player.image, 0, 0)
    }
}

setInterval(() => {
    draw()

}, 300)