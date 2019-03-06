"use strict";
var SW = window.innerWidth, SH = window.innerHeight, canvas = document.getElementsByTagName("canvas")[0], context = canvas.getContext("2d");
var rockets = [];
main();
function main() {
    shoot();
    // setInterval(shoot, 1000);
}
/**发射烟花 */
function shoot() {
    var rocket = new Rocket();
    rockets.push(rocket);
}
var Rocket = /** @class */ (function () {
    function Rocket() {
    }
    return Rocket;
}());
