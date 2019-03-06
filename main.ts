const SW: number = window.innerWidth,
    SH: number = window.innerHeight,
    canvas = document.getElementsByTagName("canvas")[0],
    context = <CanvasRenderingContext2D>canvas.getContext("2d");

var rockets: Rocket[] = [];

main();

function main() {
    shoot();
    // setInterval(shoot, 1000);
}

/**发射烟花 */
function shoot() {

    let rocket = new Rocket();
    rockets.push(rocket);

}


class Rocket {

}