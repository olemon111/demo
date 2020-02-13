/* eslint-disable complexity */
/*
 * @Author: your name
 * @Date: 2020-01-25 20:35:53
 * @LastEditTime : 2020-02-04 00:32:52
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\ball\index.js
 */
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let colorArray = ["#4CBF88", "#F2B134", "#6F4A70", "#FF6275", "#00B5C4"];
let maxRadius = 60;
let number = 200;
let mouse = {
	x: canvas.width / 2,
	y: canvas.height / 2
};
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function ball(x, y, dx, dy, radius, color) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.color = color;
	this.minRadius = radius;
	this.draw = function() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
		ctx.fillStyle = this.color;
		ctx.fill();
	};
	this.update = () => {
		this.x += this.dx;
		this.y += this.dy;
		if (this.x < this.radius || this.x > canvas.width - this.radius) {
			this.dx = -this.dx;
		}
		if (this.y < this.radius || this.y > canvas.height - this.radius) {
			this.dy = -this.dy;
		}

		if (
			mouse.x - this.x > -50 &&
			mouse.x - this.x < 50 &&
			mouse.y - this.y > -50 &&
			mouse.y - this.y < 50 &&
			this.radius < maxRadius
		) {
			this.radius += 1;
		} else if (this.radius > this.minRadius) {
			this.radius -= 1;
		}
		this.draw();
	};
}
let ballArray = [];

function init() {
	ballArray = [];
	for (let i = 0; i < number; i++) {
		let radius = Math.random() * 4 + 2;
		let newBall = new ball(
			Math.random() * (canvas.width - 2 * radius) + radius, //x
			Math.random() * (canvas.height - 2 * radius) + radius, //y
			(Math.random() - 0.5) * 2, //dx
			(Math.random() - 0.5) * 2, //dy
			radius, //radius
			colorArray[Math.floor(Math.random() * 5)] //color
		);
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

window.addEventListener("mousemove", event => {
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
