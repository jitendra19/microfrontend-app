//  h1 = document.querySelector("div");
counter1 = 0
interval1 = setInterval(()=> {
    counter1++;
    counter1++;
    console.log(counter1);
    document.querySelector("#app2-div").innerHTML = "APP-2 counter - " + counter1;
}, 1000);

setTimeout(()=> {
    clearInterval(interval1);
}, 50000)