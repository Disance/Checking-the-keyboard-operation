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
    let codeKeybox = document.querySelector('.code-key')
    let currentText = codeKeybox.innerHTML
    let newText = event.code + "&nbsp&nbsp&nbsp&nbsp" + currentText
    codeKeybox.innerHTML = newText
    switch (event.code) {
        case "KeyQ":
            keyQ.glow()
            break
        case "KeyW":
            keyW.glow()
            break
        case "KeyE":
            keyE.glow()
            break
        case "KeyR":
            keyR.glow()
            break
        case "KeyT":
            keyT.glow()
            break
        case "KeyY":
            keyY.glow()
            break
        case "KeyU":
            keyU.glow()
            break
        case "KeyI":
            keyI.glow()
            break
        case "KeyO":
            keyO.glow()
            break
        case "KeyP":
            keyP.glow()
            break
        case "KeyA":
            keyA.glow()
            break
        case "KeyS":
            keyS.glow()
            break
        case "KeyD":
            keyD.glow()
            break
        case "KeyF":
            keyF.glow()
            break
        case "KeyG":
            keyG.glow()
            break
        case "KeyH":
            keyH.glow()
            break
        case "KeyJ":
            keyJ.glow()
            break
        case "KeyK":
            keyK.glow()
            break
        case "KeyL":
            keyL.glow()
            break
        case "KeyZ":
            keyZ.glow()
            break
        case "KeyX":
            keyX.glow()
            break
        case "KeyC":
            keyC.glow()
            break
        case "KeyV":
            keyV.glow()
            break
        case "KeyB":
            keyB.glow()
            break
        case "KeyN":
            keyN.glow()
            break
        case "KeyM":
            keyM.glow()
            break
        case "ShiftLeft":
            keyShift.glow()
            break
        case "ControlLeft":
            keyCtrl.glow()
            break
        case "AltLeft":
            keyAlt.glow()
            break
        case "Space":
            keySpace.glow()
            break
    }
}