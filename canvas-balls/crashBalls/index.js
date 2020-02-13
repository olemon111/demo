/*
 * @Author: your name
 * @Date: 2020-01-27 17:24:12
 * @LastEditTime : 2020-01-28 18:45:50
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\crashBalls\index.js
 */
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let colorArray = ["#4CBF88", "#F2B134", "#6F4A70", "#FF6275", "#00B5C4"];
let ballArray = [];
let number = 50;
let flag = true;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Ball(x, y, mass, dx, dy, radius, color) {
	this.x = x;
	this.y = y;
	this.mass = mass;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.color = color;

	this.draw = () => {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.closePath();
	};
	this.update = ballArray => {
		if (
			this.x + this.dx < this.radius ||
			this.x + this.radius + this.dx > canvas.width
		) {
			this.dx = -this.dx;
		}
		this.x += this.dx;

		if (
			this.y + this.dy < this.radius ||
			this.y + this.dy + this.radius > canvas.height
		) {
			this.dy = -this.dy;
		}
		this.y += this.dy;

		for (let ball of ballArray) {
			if (this === ball) {
				continue;
			}
			if (
				distance(this.x, this.y, ball.x, ball.y) <= this.radius + ball.radius &&
				(this.x - ball.x) * (this.dx - ball.dx) +
					(this.y - ball.y) * (this.dy - ball.dy) <
					0
			) {
				resolveCollision(this, ball);
			}
		}
		this.draw();
	};
}
function resolveCollision(b1, b2) {
	let v1 = {
		dx: b1.dx,
		dy: b1.dy
	};
	let v2 = {
		dx: b2.dx,
		dy: b2.dy
	};

	let theta = -Math.atan2(b1.y - b2.y, b1.x - b2.x);

	// 旋转速度
	let v1Rotated = rotateV(v1, theta);
	let v2Rotated = rotateV(v2, theta);

	//根据完全弹性碰撞公式计算新的速度
	let v1RotatedAfterCollision = {
		dx:
			(v1Rotated.dx * (b1.mass - b2.mass) + 2 * b2.mass * v2Rotated.dx) /
			(b1.mass + b2.mass),
		dy: v1Rotated.dy
	};
	let v2RotatedAfterCollision = {
		dx:
			(v2Rotated.dx * (b2.mass - b1.mass) + 2 * b1.mass * v1Rotated.dx) /
			(b1.mass + b2.mass),
		dy: v2Rotated.dy
	};

	// 旋转回来并更新速度
	let v1AfterCollision = rotateV(v1RotatedAfterCollision, -theta);
	let v2AfterCollision = rotateV(v2RotatedAfterCollision, -theta);

	b1.dx = v1AfterCollision.dx;
	b1.dy = v1AfterCollision.dy;
	b2.dx = v2AfterCollision.dx;
	b2.dy = v2AfterCollision.dy;
}
function rotateV(v, theta) {
	return {
		dx: v.dx * Math.cos(theta) - v.dy * Math.sin(theta),
		dy: v.dy * Math.cos(theta) + v.dx * Math.sin(theta)
	};
}
function randomIntFromRange(low, high) {
	return Math.floor(Math.random() * (high - low + 1) + low);
}
function distance(x1, y1, x2, y2) {
	return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}
function init() {
	ballArray = [];
	for (let i = 0; i < number; i++) {
		flag = true;
		let radius = randomIntFromRange(8, 10);
		let x = randomIntFromRange(radius, canvas.width - radius);
		let y = randomIntFromRange(radius, canvas.height - radius);
		let mass = radius * 0.5;
		let vx = 2000 * (Math.random() - 0.5);
		let vy = 2000 * (Math.random() - 0.5);
		let color = colorArray[Math.floor(Math.random() * colorArray.length)];
		let newBall = new Ball(x, y, mass, vx, vy, radius, color);

		for (let j = 0; j < ballArray.length; j++) {
			let d = distance(newBall.x, newBall.y, ballArray[j].x, ballArray[j].y);
			if (newBall.radius + ballArray[j].radius > d) {
				i--;
				flag = false;
				break;
			}
		}
		if (flag) {
			ballArray.push(newBall);
		}
	}
}
function animate() {
	requestAnimationFrame(animate);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	for (let ball of ballArray) {
		ball.update(ballArray);
	}
}
window.addEventListener("resize", () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	init();
});
window.onload = () => {
	init();
	animate();
};
