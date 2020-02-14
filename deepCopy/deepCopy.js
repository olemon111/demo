/*
 * @Author: your name
 * @Date: 2020-02-14 09:34:59
 * @LastEditTime : 2020-02-14 12:25:43
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\deepCopy\deepCopy.js
 */
function deepCopy(fromObj, toObj) {
	for (let key in fromObj) {
		let fromValue = fromObj[key];
		if (!isObject(fromValue)) {
			//不是引用类型直接传值
			toObj[key] = fromValue;
		} else {
			//引用类型
			let tempObj = new fromValue.constructor(); //创建一个新的对象
			// debugger;
			deepCopy(fromValue, tempObj); //递归调用给新对象赋值
			toObj[key] = tempObj;
		}
	}
}
function isObject(obj) {
	return obj instanceof Object;
}

let testFromObj = {
	//测试用例
	name: "明明",
	age: 10,
	hobby: ["a", "b", "c"],
	friend: {
		name: "天天",
		age: 8,
		pets: [{ name: "小白" }, { name: "小黄" }]
	},
	birth: new Date()
};
let testToObj = {};
deepCopy(testFromObj, testToObj);
console.log(testToObj);
