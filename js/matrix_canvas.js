const matrixCanvas = document.getElementById(window.weaver.constants["MatrixCanvasId"])
const matrixCanvasCtx = matrixCanvas.getContext("2d")

const chanceToDrop = 0.999

var matrix = "01"
matrix = matrix.split("")

matrixCanvas.height = window.innerHeight
matrixCanvas.width = window.innerWidth
var fontSize = 10
var columns = matrixCanvas.width/fontSize

var drops = []
var maxYForDrop = matrixCanvas.height / fontSize

function randomInt(exclusiveMax){
    return Math.floor(Math.random() * exclusiveMax)
}
function isDrop(){
    return Math.random() > chanceToDrop
}

for(var x = 0; x < columns; x++){
    drops[x] = maxYForDrop

    if(isDrop()){
        drops[x] = randomInt(maxYForDrop)
    }
}

//drawing the characters
function draw()
{
    matrixCanvasCtx.fillStyle = "rgba(0, 0, 0, 0.04)"
    matrixCanvasCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height)

    matrixCanvasCtx.fillStyle = "rgba(244, 66, 125, 0.25)"
    matrixCanvasCtx.font = fontSize + "px arial"
    
    for(var i = 0; i < drops.length; i++)
    {
        var text = matrix[randomInt(matrix.length)]
        matrixCanvasCtx.fillText(text, i*fontSize, drops[i]*fontSize)

        if(drops[i] * fontSize > matrixCanvas.height && isDrop()){
            drops[i] = 0
            matrixCanvasCtx.fillStyle = "#222222"
            //matrixCanvasCtx.fillRect(i*fontSize, 0, fontSize, matrixCanvas.height)
        }

        drops[i]++
    }
}

matrixCanvasCtx.fillStyle = "#222222"
matrixCanvasCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height)

// set up color
matrixCanvasCtx.fillStyle = "rgba(0, 0, 0, 0.04)"
for(let i=0; i<100; i++){
    matrixCanvasCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height)
}

setInterval(draw, 35);
