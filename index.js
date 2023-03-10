function opentab(tabname){
    document.getElementsByClassName("active-link")[0]?.classList.remove("active-link");
    document.getElementById(tabname).classList.add("active-link");
    var toActive = document.getElementById(tabname).getAttribute("data-expand");
    document.getElementsByClassName("active-tab")[0]?.classList.remove("active-tab");
    document.getElementById(toActive).classList.add("active-tab");
 }
