function z() {
    let a = 100;
    function x() {
        var b = 10;
        function y() {
            console.log(a + b);
        }
        var b = 20
        y();
    }

    x();
}

z();

//inner function along with its lexical scope forms a closure
//and inner function always remember their lexical scope and its reference
//even the parent function pope out from call stack but inner function remember its lexical scope


//learn module design pattern

(function() {

    // declare private variables and/or functions

    return {
        // declare public variables and/or functions
    }

})();


var HTMLChanger = (function() {
    var contents = 'contents'

    var changeHTML = function() {
    var element = document.getElementById('attribute-to-change');
    element.innerHTML = contents;
    }

    return {
    callChangeHTML: function() {
        changeHTML();
        console.log(contents);
    }
    };

})();

HTMLChanger.callChangeHTML();       // Outputs: 'contents'
console.log(HTMLChanger.contents);  // undefined


//module design pattern simulate the behavior fo classes, factory function , constructor function, object literals but in other way
