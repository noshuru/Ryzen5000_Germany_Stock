// ==UserScript==
// @name         MM
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.mediamarkt.de/de/search.html?query=Ryzen%209%205900X&t=1605034114828
// @grant        none
// ==/UserScript==

(function() {
    let descriptionArray = document.getElementsByClassName("FlexBox__StyledFlexItem-sc-1vld6r2-1 LJtJy ProductTilestyled__StyledFlexItemHeadline-sc-1w38xrp-8 eFfnRo");
    console.log(descriptionArray)
    let x = setTimeout(reload, 10000);
    interv();
    function interv(){
        for(let i = 0 ; i < descriptionArray.legnth ; ++i){
    	    let nodeList = descriptionArray[0].childNodes;
        	let node = nodeList[0]
        	let childrenList = node.children;
    	    let node2 = childrenList[1]
        	console.log(node2);
        	console.log(node2.outerText);
        	let d = node2.outerText;
        	d = d.substring(0,18)
        	console.log(d);
            if(d=="AMD Ryzen™ 9 5900X"){
                alert("RYZEN IS UP!");
            }else{
                console.log("not yet...")
                reload();
            }
        }
    }
    function reload(){
        location.reload();
    }
})();