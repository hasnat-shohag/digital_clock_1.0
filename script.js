let interval = setInterval(clock, 1000);

function clock(){
    let hours = document.getElementById('hour');
    let minutes = document.getElementById('minute');
    let seconds = document.getElementById('second');
    let am_pm = document.getElementById('am_pm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    am_pm.innerHTML = "AM";
    let hh = h;

    if(h === 0){
        h = 12;
    }
    if(hh>=12){ 
        am_pm.innerHTML = "PM";
    }
    if(h > 12){
        h -= 12;
    }
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    
}
