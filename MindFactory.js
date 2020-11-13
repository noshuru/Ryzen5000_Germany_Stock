// ==UserScript==
// @name         Mind Factory
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.mindfactory.de/search_result.php?search_query=5900X
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

    let x = setTimeout(reload, getRandomInt(10, 30) * 1000);
    let descriptionArray = document.getElementsByClassName("pname");
    console.log(descriptionArray)

    interv();
    function interv(){
	    for(let i = 0 ; i < descriptionArray.length ; ++i){
    	    let d = descriptionArray[i].innerHTML;
            console.log(d);
  	        d = String(d);
            if (d.includes("AMD Ryzen 9 5900X")) {
                const notification = new Notification('MINDFACTORY HAS RYZEN 5900X STOCK', {
                    body: '5900X IN STOCK ON MINDFACTORY'
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
