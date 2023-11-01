

window.addEventListener("load", () => {

    let password = localStorage.getItem("password")


    let isPassword = password === `"Synchroweb3x"`

    if(isPassword){
        window.location.href="/index.html"

    }else{
        let p_input = document.querySelector(".p_input")
        let error = document.querySelector(".error")

        let button = document.querySelector("button")


        button.onclick = function(){
            if((p_input.value === "") || (p_input.value !== "Synchroweb3x")) {
                error.style.display = "block"
                p_input.classList.add("p_error")
            }

            if((p_input.value !== "") && (p_input.value === "Synchroweb3x")){
                alert(p_input.value)
                localStorage.setItem("password",JSON.stringify(p_input.value))
                window.location.href="/index.html"
            }

        }


        p_input.onkeyup = function(){
            if(error.style.display === "block" && p_input.classList.contains("p_error")){
                error.style.display = "none"
                p_input.classList.remove("p_error")
            }
        }
    }

    

})