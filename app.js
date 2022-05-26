//    QUESTÃO 1
var resp1_val = document.querySelector('#resp1')
var resp2_val = document.querySelector('#resp2')
var resp3_val = document.querySelector('#resp3')
var resp4_val = document.querySelector('#resp4')

var button = document.querySelector("div.form button")

button.addEventListener("click", () => {
    if(resp1_val.checked == true){
        document.querySelector("#perg1").setAttribute('class', 'cert')

    }
})



