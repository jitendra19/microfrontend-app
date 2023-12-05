//  h1 = document.querySelector("div");
counter = 0
interval = setInterval(()=> {
    console.log(counter++);
    document.querySelector("div").innerHTML = "APP-1 counter - " + counter;
}, 1000);

setTimeout(()=> {
    clearInterval(interval);
}, 50000)