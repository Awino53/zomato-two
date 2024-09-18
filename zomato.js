const locBtn  = document.getElementById("locations")

locBtn.addEventListener("click", (e)=>{
    let resultsel =  document.getElementById("results")
    if(resultsel.style.display === "block"){
         e.target.style.transform ="rotate(0)"
         resultsel.style.display = "none"
    }else{
        e.target.style.transform ="rotate(-180deg)"
        resultsel.style.display = "block"
    }
})

const bar = document.querySelector(".bar")
bar.addEventListener("click",(e)=>{
    let hidden = document.querySelector(".hidden-1")
    if(hidden.style.display === "block"){
        hidden.style.display ="none"
    }else{
        hidden.style.display = "block"
    }

    
})

const solid = document.querySelector(".bar-1")
solid.addEventListener("click",(e)=>{
    let show = document.querySelector(".hidden-1")
    if(show.style.display === "none"){
        show.style.display = "block"
    }else{
        show.style.display = "none"
    }
})