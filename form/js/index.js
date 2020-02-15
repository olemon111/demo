/*
 * @Author: your name
 * @Date: 2020-02-14 16:18:57
 * @LastEditTime : 2020-02-15 09:44:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\builder-form\builder.js
 */
// let debounce = require("./debounce").debounce;
// import { debounce } from "./debounce";
import { throttle } from "./throttle";
//构造者模式
let form = document.getElementById("form");
class Student {}
class StudentBuilder {
	constructor() {
		this.student = new Student();
	}
	setName(name) {
		//doSomething...
		this.student.name = name;
	}
	setGender(gender) {
		this.student.gender = gender;
	}
	setAge(age) {
		this.student.age = age;
	}
	build() {
		return this.student;
	}
}

function init() {
	let name = document.querySelector("[name=name]").value;
	let gender = document.querySelector("[name=gender]:checked").value;
	let age = document.querySelector("[name=age]").value;
	const builder = new StudentBuilder();
	builder.setName(name);
	builder.setGender(gender);
	builder.setAge(age);
	let student = builder.build();
	console.log(student);
}

// const oDebounce = debounce(init, 1000); //防抖
// form.addEventListener("submit", e => {
// 	let ev = e || window.event;
// 	ev.preventDefault();
// 	oDebounce();
// });
const oThrottle = throttle(init, 1000); //节流
form.addEventListener("submit", e => {
	let ev = e || window.event;
	ev.preventDefault();
	oThrottle();
});
