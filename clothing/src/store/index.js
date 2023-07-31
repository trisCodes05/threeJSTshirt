import { proxy } from "valtio";


const state = proxy({

    intro:true,//isloged in 
    color : '#caa08f',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png'


})

export default state;