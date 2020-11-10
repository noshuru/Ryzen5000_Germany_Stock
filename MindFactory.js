// ==UserScript==
// @name         Mind Factory
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.mindfactory.de/search_result.php/search_query/ryzen+9+5900X/filterKategorie/Hardware/filterKategorie2/Prozessoren%20(CPU)/filterKategorie3/AMD%20Desktop/filterKategorie4/Sockel%20AM4/listing_sort/7
// @grant        none
// ==/UserScript==

(function() {
    let x = setTimeout(reload,10000);
    let descriptionArray = document.getElementsByClassName("pname");
    console.log(descriptionArray)
    
    interv();
    function interv(){
	    for(let i = 0 ; i < descriptionArray.length ; ++i){
    	    let d = descriptionArray[i].innerHTML;
            console.log(d);
  	        d = String(d);
            d = d.substring(0,17)
            if(d=="AMD Ryzen 9 5900X"){
            alert("RYZEN IS UP!");
            }else{
                console.log("not yet...")
            }
	    }
    }
    function reload(){
        location.reload();
    }
})();