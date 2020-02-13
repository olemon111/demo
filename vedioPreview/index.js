/*
 * @Author: your name
 * @Date: 2020-02-11 11:13:04
 * @LastEditTime : 2020-02-11 16:52:09
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\bilibili-vedioPreview\index.js
 */
let list = document.querySelector(".list");
let [totalWidth, totalheight, column, row] = [994, 130, 10, 2]; //设置总图片宽高、行列容纳图片数

list.addEventListener("mousemove", e => {
	let event = e || window.event;
	if (event.target.nodeName === "LI") {
		let num = event.target.attributes[0].value; //获取图片总数11
		let [width, height] = [totalWidth / column, totalheight / row];
		let index = Math.ceil(e.offsetX / (width / num)); //计算鼠标的位置对应的图片的索引(从1开始)
		let current_row = Math.ceil(index / column);
		let current_column =
			index % column ? index % column : index ? column : index;

		event.target.style.backgroundPosition =
			"-" +
			(current_column - 1) * width +
			"px -" +
			(current_row - 1) * height +
			"px";

		event.target.firstChild.style.width = event.offsetX + "px"; //滚动条
	} else {
		for (let li of list.getElementsByTagName("li")) {
			li.style.backgroundPosition = "0px 0px"; //回到原图
		}
	}
});
