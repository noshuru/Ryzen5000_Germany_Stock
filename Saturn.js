// ==UserScript==
// @name         MM
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.saturn.de/de/search.html?query=Ryzen%209%205900X
// @grant        none
// ==/UserScript==

(function() {
    if (Notification.permission === "granted") {
      console.log("we have permission");
   } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(permission => {
         console.log(permission);
         let showNotification = true
      });
   }
    let descriptionArray = document.getElementsByClassName("FlexBox__StyledFlexItem-sc-1vld6r2-1 LJtJy ProductTilestyled__StyledFlexItemHeadline-sc-1w38xrp-8 eFfnRo");
    console.log(descriptionArray)
    let x = setTimeout(reload, getRandomInt(10, 30) * 1000);
    interv();
    function interv(){
        for(let i = 0 ; i < descriptionArray.length ; ++i){
    	    let nodeList = descriptionArray[i].childNodes;
        	let node = nodeList[0]
        	let childrenList = node.children;
    	    let node2 = childrenList[1]
        	console.log(node2);
        	console.log(node2.outerText);
        	let d = node2.outerText;
        	console.log(d);
            if (d.includes("AMD Ryzen™ 9 5900X")) {
                const notification = new Notification('SATURN HAS RYZEN 5900X STOCK', {
                    body: '5900X IN STOCK ON SATURN'
                })
                notification.onclick = (e) => {
                    window.focus();
                };
                let sound = 'https://srv-store5.gofile.io/download/ox731g/Air-raid-siren.mp3'
                var player = document.createElement('audio');
                player.src = sound;
                player.preload = 'auto'
                player.play();

            }else{
                console.log("not yet...")
                //reload();
            }
        }
    }
    function reload(){
        location.reload();
    }
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
})();
