// ==UserScript==
// @name         Saturn
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.saturn.de/de/search.html?query=ryzen%209%205900X&t=1605031811158
// @grant        none
// ==/UserScript==

(function() {
    let descriptionArray = document.getElementsByClassName("Typostyled__StyledInfoTypo-sc-1jga2g7-0 bWsmLV");
    let x = setTimeout(reload, 10000);
    interv();
    function interv(){
        for(let i = 0 ; i < descriptionArray.length ; ++i){
            let marke = descriptionArray[0].firstChild.innerHTML;
            let description = descriptionArray[0].lastChild;
            console.log(descriptionArray[0]);
            description = String(description.data);
            console.log(marke);
            description = description.substring(0,15);
            console.log(description);
            if((marke == "AMD") && (description == " Ryzen™ 9 5900X")){
                alert("RYZEN IS UP!");
            }else{
                console.log("not yet...");
            }
        }
    }
    function reload(){
        location.reload();
    }
})();