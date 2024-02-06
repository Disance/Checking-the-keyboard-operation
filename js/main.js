class GlowKey {
    constructor(selector){
        this.$key = document.querySelector(selector)
    }
    glow(){
        this.$key.style.background = "blue"
    }
}

class Keys extends GlowKey{
    constructor(options){
        super(options.selector)
        this.$key.style.background = options.background
    }
}

const keyQ = new Keys({
    selector: "#q",
})
const keyW = new Keys({
    selector: "#w",
})
const keyE = new Keys({
    selector: "#e",
})
const keyR = new Keys({
    selector: "#r",
})
const keyT = new Keys({
    selector: "#t",
})
const keyY = new Keys({
    selector: "#y",
})
const keyU = new Keys({
    selector: "#u",
})
const keyI = new Keys({
    selector: "#i",
})
const keyO = new Keys({
    selector: "#o",
})
const keyP = new Keys({
    selector: "#p",
})
const keyA = new Keys({
    selector: "#a",
})
const keyS = new Keys({
    selector: "#s",
})
const keyD = new Keys({
    selector: "#d",
})
const keyF = new Keys({
    selector: "#f",
})
const keyG = new Keys({
    selector: "#g",
})
const keyH = new Keys({
    selector: "#h",
})
const keyJ = new Keys({
    selector: "#j",
})
const keyK = new Keys({
    selector: "#k",
})
const keyL = new Keys({
    selector: "#l",
})
const keyZ = new Keys({
    selector: "#z",
})
const keyX = new Keys({
    selector: "#x",
})
const keyC = new Keys({
    selector: "#c",
})
const keyV = new Keys({
    selector: "#v",
})
const keyB = new Keys({
    selector: "#b",
})
const keyN = new Keys({
    selector: "#n",
})
const keyM = new Keys({
    selector: "#m",
})
const keyShift = new Keys({
    selector: "#shift",
})
const keyAlt = new Keys({
    selector: "#alt",
})
const keyCtrl = new Keys({
    selector: "#ctrl",
})
const keySpace = new Keys({
    selector: "#space",
})
document.onkeydown = function(event){
    if (event.code == "KeyQ"){
        keyQ.glow()
    }else if(event.code == "KeyW"){
        keyW.glow()
    }else if(event.code == "KeyE"){
        keyE.glow()
    }else if(event.code == "KeyR"){
        keyR.glow()
    }else if(event.code == "KeyT"){
        keyT.glow()
    }else if(event.code == "KeyY"){
        keyY.glow()
    }else if(event.code == "KeyU"){
        keyU.glow()
    }else if(event.code == "KeyI"){
        keyI.glow()
    }else if(event.code == "KeyO"){
        keyO.glow()
    }else if(event.code == "KeyP"){
        keyP.glow()
    }else if(event.code == "KeyA"){
        keyA.glow()
    }else if(event.code == "KeyS"){
        keyS.glow()
    }else if(event.code == "KeyD"){
        keyD.glow()
    }else if(event.code == "KeyF"){
        keyF.glow()
    }else if(event.code == "KeyG"){
        keyG.glow()
    }else if(event.code == "KeyH"){
        keyH.glow()
    }else if(event.code == "KeyJ"){
        keyJ.glow()
    }else if(event.code == "KeyK"){
        keyK.glow()
    }else if(event.code == "KeyL"){
        keyL.glow()
    }else if(event.code == "KeyZ"){
        keyZ.glow()
    }else if(event.code == "KeyX"){
        keyX.glow()
    }else if(event.code == "KeyC"){
        keyC.glow()
    }else if(event.code == "KeyV"){
        keyV.glow()
    }else if(event.code == "KeyB"){
        keyB.glow()
    }else if(event.code == "KeyN"){
        keyN.glow()
    }else if(event.code == "KeyM"){
        keyM.glow()
    }else if(event.code == "ControlLeft"){
        keyCtrl.glow()
    }else if(event.code == "Space"){
        keySpace.glow()
    }else if(event.code == "AltLeft"){
        keyAlt.glow()
    }else if(event.code == "ShiftLeft"){
        keyShift.glow()
    }
}