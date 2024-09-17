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