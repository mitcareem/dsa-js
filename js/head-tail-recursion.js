function test1(x) {
    if (x > 0) {
        test1(x - 1);
        console.log(x);
    }
    // this is head recursion
}

function test2(x) {
    //this is tail recursion
    if (x > 0) {
        console.log(x);
        test2(x - 1);
    }
}


/*
If the recursive call occurs at the end of a method, 
it is called a tail recursion. The tail recursion is similar to a loop. 
The method executes all the statements before jumping into the next recursive call.

If the recursive call occurs at the beginning of a method, 
it is called a head recursion. 
The method saves the state before jumping into the next recursive call.

*/
test1(5)
test2(5);
