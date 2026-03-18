const container = document.querySelector(".container")
const qrBtn = document.querySelector("#qr-header button")
const qrInput = document.querySelector("#qr-header input")
const qrImg = document.querySelector("#qr-code img")

// Eventos 
function generateQr() {
    const qrInputValue = qrInput.value

    console.log(qrInputValue)

    if(!qrInputValue) return

    qrBtn.innerText = "Gerando codigo..."
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInputValue}`


    qrImg.addEventListener("load", () => {
        container.classList.add("active")
        qrBtn.innerText = "Codigo QR gerado!"
    })
}
qrBtn.addEventListener("click", () => {
    generateQr()
})

qrInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        generateQr()
    }
})

qrInput.addEventListener("keyup", () => {

    if(!qrInput.value) {
        container.classList.remove("active")
        qrBtn.innerText = "Gerar QR Code!"
    }
})