const share = document.querySelector(".iconShare");

console.log(share);

share.onclick = function () {

    if (document.querySelector("#hidee").classList.contains("hide")) {
        document.querySelector("#hidee").classList.add("share-hide");
        document.querySelector("#hidee").classList.remove("hide");
        
        if (window.matchMedia("(max-width: 768px)").matches) { 
         share.style.top = '10px';   
        }
    } 
    else {
        share.style.top = '';   
        document.querySelector("#hidee").classList.add("hide");
        document.querySelector("#hidee").classList.remove("share-hide");
    }

};
