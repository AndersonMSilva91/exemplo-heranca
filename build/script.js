"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Duck_1 = require("./Duck");
var duck = new Duck_1.Duck('Patolino o Mago', 3, 50, 2, true, 'preto c/ verde');
function takeOff(animal) {
    animal.fly();
}
takeOff(duck);
function Alake(animal) {
    animal.swim();
}
Alake(duck);
function Awalk(animal) {
    animal.walk();
}
Awalk(duck);
