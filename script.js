let display = document.querySelector(".display")
let buffer = ""
const allKeys = document.querySelectorAll(".keys")

function clearAll() {
    buffer = ""
    display.innerText = ""
}

for (let i = 0; i < allKeys.length; i++){
    allKeys[i].addEventListener("click", (e) => {
        let buttonText = e.target.innerText
        
        if (buttonText === "C") {
            buffer = ""
            display.innerText = ""
        }
        else if(buttonText === "="){
            if (buffer === "") {
                display.innerText = "0"
            }
            else {
                display.innerText = eval(buffer)
                buffer = ""
            }
        }
        else if (buttonText === "Back-Space") {
            if (buffer === "") {
                display.innerText = "0"
            }
            else {
                display.innerText = buffer.substr(0, buffer.length - 1)
                buffer = display.innerText
            }
        }
        else {
            buffer = buffer + buttonText
            display.innerText = buffer
        }
    })
}
