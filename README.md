# Ryzen5000_Germany_Stock
A bunch of JS scripts for usage with Tampermonkey to refresh 3 German shop websites, looking for Ryzen 5000 series
1) In order to change the CPU you wish to look for, change the if statement towards the ends (put proper model name inside " ", for example if(d=="AMD Ryzen 9 5900X) or if(d=="AMD Ryzen 8 5800X) )
2) In order to change the refresh time, change let x = setTimeout(reload, <here put your refresh timer in miliseconds, aka write seconds and add 000>)