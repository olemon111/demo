/*
 * @Author: your name
 * @Date: 2020-02-15 16:50:19
 * @LastEditTime: 2020-02-15 16:50:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \form\throttle.js
 */
//函数节流
let flag = true;
export let throttle = (func, delay) => {
	return (...args) => {
		if (flag) {
			flag = false;
			setTimeout(() => {
				func.apply(this, args);
				flag = true;
			}, delay);
		}
	};
};
