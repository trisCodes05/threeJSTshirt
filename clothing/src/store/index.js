import { proxy } from "valtio";


const state = proxy({

    intro:true,//isloged in 
    color : '#caa08f',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './logo_mid.png',
    fullDecal: './logo_mid.png'


})

export default state;