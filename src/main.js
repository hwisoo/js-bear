import { bear } from './hungrybear.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import bearIcon from './images/bear.png';
import berriesIcon from './images/berries.jpeg';
import salmonIcon from './images/salmon.jpeg';
import mooseIcon from './images/moose.jpeg';


let bearImg = document.getElementById('bear');
bearImg.src = bearIcon;
let berriesImg = document.getElementById('berries');
berriesImg.src = berriesIcon;
let salmonImg = document.getElementById('salmon');
salmonImg.src = salmonIcon;
let mooseImg = document.getElementById('moose');
mooseImg.src = mooseIcon;

let hunger = document.getElementById('hunger');
// let berries = document.getElementById('berries');
// let salmon = document.getElementById("salmon");
// let moose = document.getElementById("moose");

$(document).ready(function () {
    let myBear = bear;
    myBear.setHunger();
    setInterval(update, 500);

    // berries.addEventListener("click", myBear.feed(5));
    $("#berries").on("click", function () {
        myBear.eatSmall();
    })

    $("#salmon").on("click", function () {
        myBear.eatMedium();
    })

    $("#moose").on("click", function () {
        myBear.eatLarge();
    })

    function update() {
        let msg;
        msg = myBear.getHunger();

        if (myBear.foodLevel <= 0) {
            msg = "You got eaten!";
            hunger.innerHTML = msg;
        } else {
            hunger.innerHTML = msg;
        }
    }




});