var endDate =new Date().getTime()+12*60*60*60*60;
var current =  new Date().getTime();
console.log(" current : ", current );

console.log(" endDate : ", endDate);

var timer = setInterval(function() {

    let now = new Date().getTime();
    let t = endDate - now;
    
    if (t >= 0) {
    
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);
        // let mil=Math.floor((t % (1000 * 60*10000000000000000)) / 1000);
        // let mil= +new Date() %100000000000000
        // console.log(mil);
    
        // document.getElementById("timer-days").innerHTML = days +
        // "<span class='label'>DAY :</span>";
    
        document.getElementById("timer-hours").innerHTML = ("0"+hours).slice(-2) +
        "<span class='label'>h</span>";
    
        document.getElementById("timer-mins").innerHTML = ("0"+mins).slice(-2) +
        "<span class='label'>m</span>";
    
        document.getElementById("timer-secs").innerHTML = ("0"+secs).slice(-2) +
        "<span class='label'>s </span>";
    
    } else {

        document.getElementById("timer").innerHTML = "The countdown is over!";
    
    }
    
}, 1000);