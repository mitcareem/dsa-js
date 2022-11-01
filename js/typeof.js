// function y() {
//     // var i = 1;
//     for (var i = 1; i <= 5; i++) {
//         function x(x) {
//             setTimeout(function () {
//                 console.log(x);
//             }, 1000);
//         }
//         x(i);
//     }
// }
// y();

var a = 1;
function y() { }
var b = a + typeof y;
console.log(b);
