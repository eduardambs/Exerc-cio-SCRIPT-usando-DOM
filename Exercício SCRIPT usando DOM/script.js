function alteraCorDiv(){

    const div = 
        document.querySelector("#muda_cor");
    if(div.classList.contains("roxo")){
        div.classList.remove("roxo");
        div.classList.add("lilás");
    }else{
        div.classList.remove("lilás");
        div.classList.add("roxo");
    }
}

function init(){
    const btn = 
        document.getElementById("btn_cor");
    btn.onclick = alteraCorDiv;

    const div = 
        document.querySelector("#muda_cor");
    div.addEventListener("mouseup", function (event){
        alert(event.target.classList)
    });
    // btn.addEventListener("click", func);
    
}


window.onload = init;