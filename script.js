const hajo = document.querySelector("#s6 > .felho");
general()
function general() {
    setInterval(() => {
        const felho = document.createElement("div");
        felho.setAttribute("class", "kisf");
        hajo.appendChild(felho);
        setTimeout(() => {
            felho.remove();
            
        }, 10001);
    }, 1000);
   



    


    
}


