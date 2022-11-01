var something = (function () {
    var executed = false;
    return function () {
        if (!executed) {
            executed = true;
            // do something
            console.log("hello")
        }
        
    };
})();

something(); // "do something" happens
something(); // nothing happens