/*
 * @Author: your name
 * @Date: 2020-01-29 10:09:21
 * @LastEditTime : 2020-01-29 16:14:14
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\circle\index.js
 */
function randomIntFromRange(low, high) {
	return Math.floor(Math.random() * (high - low + 1) + low);
}
function randomDoubleFromRange(low, high) {
	return Math.random() * (high - low + 1) + low;
}

let ballArray = [];
let colorArray = ["#97A7F8", "#C957CA", "#76E2FE"];
let mouse = {
	x: window.innerWidth / 2,
	y: window.innerHeight / 2
};

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
function Ball(x, y, color) {
	this.x = x;
	this.y = y;
	this.color = color;
	this.width = 2;
	this.speed = 0.07;
	this.theta = randomDoubleFromRange(0, Math.PI * 2);
	this.dragspeed = 0.05;
	this.radius = randomIntFromRange(50, 80);
	this.draw = function(last) {
		ctx.beginPath();
		ctx.moveTo(last.x, last.y);
		ctx.lineWidth = this.width;
		ctx.strokeStyle = this.color;
		ctx.lineTo(this.x, this.y);
		ctx.stroke();
		ctx.closePath();
	};
	this.lastMouse = {
		x: this.x,
		y: this.y
	};
	this.update = function() {
		this.theta += this.speed;
		let last = {
			x: this.x,
			y: this.y
		};
		this.lastMouse.x += (mouse.x - this.lastMouse.x) * this.dragspeed;
		this.lastMouse.y += (mouse.y - this.lastMouse.y) * this.dragspeed;

		this.x = this.lastMouse.x + Math.cos(this.theta) * this.radius;
		this.y = this.lastMouse.y + Math.sin(this.theta) * this.radius;
		this.draw(last);
	};
}
function init() {
	let number = 100;
	for (let i = 0; i < number; i++) {
		newball = new Ball(
			canvas.width / 2,
			canvas.height / 2,
			colorArray[Math.floor(Math.random() * colorArray.length)]
		);
		ballArray.push(newball);
	}
}
function animate() {
	requestAnimationFrame(animate);
	ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	for (let ball of ballArray) {
		ball.update();
	}
}
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("mousemove", function(event) {
	mouse.x = event.clientX;
	mouse.y = event.clientY;
});
window.addEventListener("resize", () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	init();
});
window.onload = () => {
	init();
	animate();
};
