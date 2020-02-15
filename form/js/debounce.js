/*
 * @Author: your name
 * @Date: 2020-02-15 13:16:53
 * @LastEditTime: 2020-02-15 14:38:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \form\debounce.js
 */

// 防抖函数
let timer = null;
export let debounce = (fn, delay) => {
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn.apply(this, args);
		}, delay);
	};
};
// module.exports = { debounce: debounce };
