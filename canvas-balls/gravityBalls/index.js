/*
 * @Author: your name
 * @Date: 2020-01-27 11:31:54
 * @LastEditTime : 2020-01-27 22:54:00
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\gravityBalls\index.js
 */
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let colorArray = ["#4CBF88", "#F2B134", "#6F4A70", "#FF6275", "#00B5C4"];
let ballArray = [];
let number = 120;
let Gravity = 0.8;
let Friction = 0.9;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Ball(x, y, dx, dy, radius, color) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.color = color;

	this.draw = () => {
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		ctx.fill();
		ctx.closePath();
	};
	this.update = () => {
		if (
			this.x + this.radius + this.dx >= canvas.width ||
			this.x + this.dx <= this.radius
		) {
			this.dx = -this.dx;
			this.dx *= Friction;
		}
		this.x += this.dx;

		if (
			this.y + this.radius + this.dy >= canvas.height ||
			this.y + this.dy <= this.radius
		) {
			this.dy = -this.dy;
			this.dy *= Friction;
		} else {
			this.dy += Gravity;
			this.y += this.dy;
		}

		this.draw();
	};
}

function randomFromRange(low, high) {
	return low + Math.floor(Math.random() * (high - low + 1));
}

function init() {
	ballArray = [];
	for (let i = 0; i < number; i++) {
		let radius = randomFromRange(8, 16);
		let x = randomFromRange(radius, canvas.width - radius);
		let y = randomFromRange(radius, canvas.height - radius);
		let vx = randomFromRange(-1, 1);
		let vy = randomFromRange(1, 2);
		let color = colorArray[Math.floor(Math.random() * colorArray.length)];

		let newBall = new Ball(x, y, vx, vy, radius, color);
		ballArray.push(newBall);
	}
}

function animate() {
	requestAnimationFrame(animate);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	for (let ball of ballArray) {
		ball.update();
	}
}

window.addEventListener("mousedown", () => {
	init();
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
