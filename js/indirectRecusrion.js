let money = 100; //we have money to buy apples
let apple = 0; //number of apples we have purchased

function buyApple(x) {
    // console.log(x)
    if (x > 0) {
        console.log(`I have ${x} rupees and ${apple}`);
        buyMore(x);
    } else {
        console.log("I don't have more money!", apple);
    }
}

function buyMore(x) {
    apple++;
    buyApple(x - 10);
    // console.log("buy more", x)
}

buyApple(money);
