/*
 * @Author: your name
 * @Date: 2020-02-14 16:18:57
 * @LastEditTime : 2020-02-15 09:44:24
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\builder-form\builder.js
 */
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
// 防抖函数
let timer = null;
let debounce = (fn, delay) => {
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn.apply(this, args);
		}, delay);
	};
};
const oDebounce = debounce(init, 1000); //修饰
form.addEventListener("submit", e => {
	let ev = e || window.event;
	ev.preventDefault();
	oDebounce();
});
