function $(obj,content){
	var range = range?range:document;
	var first = obj.charAt(0);
	if(first == "."){
		//className
		var classname= obj.substr(1);
		return getClass(classname,content);
	}else if(first == "#"){
		//Id
		var id= obj.substr(1);
		alert(id);
		return document.getElementById(id);
	}else if(/^[a-z][a-z1-6]{0,8}$/.test(obj)){
		//TagName
		return content.getElementsByTagName(obj);
	}
}

function getClass(classname,range){
	// alert("getClass");
	//初始化  在排序的时候用过
	var range = range?range:document;
	if(document.getElementsByClass){
		return range.getElementsByClass();
	}else{
		var all = range.getElementsByTagName("*");
		var arr = [];
		for(var i=0;i<all.length;i++){
			var str = all[i].className;
			if(check(str,classname)){
				arr.push(all[i]);
			}
		}
		return arr;
	}
}

function check(str,classname){
	var arr = str.split(" ");
	for(var i=0;i<arr.length;i++){
		if(arr[i] == classname){
			return true;
		}
		
	}
	return false;
}

/*
	获取样式的兼容性
	思路与上面的getContent()一样
*/
function getStyle(obj,arrt){
	if(obj.currentStyle){
		//ie6~8
		// alert(1+"ie");
		return obj.currentStyle[arrt];
	}else{
		//w3c
		// alert(2+"w3c");
		return getComputedStyle(obj,null)[arrt];
	}
}


Node.prototype.firstChild1 = function(type){

	return this.getChild(type)[0];
} 


Node.prototype.getChild = function(type){
		type = type==undefined?true:type;
		var child = this.childNodes;
		
		var arr = [];
		if(type){
			// alert("getChild true");
			for(var i=0;i<child.length;i++){

				if(child[i].nodeType == 1){
					// alert(child[i].nodeType);
					arr.push(child[i]);
				}
			}
			return arr;	
		}else{
			for(var i=0;i<child.length;i++){
				if(child[i].nodeType == 1 || (child[i].nodeType == 3 && child[i].nodeValue.replace(/^\s+|\s+$/g,"") )){
					arr.push(child[i]);
				}
			}
			return arr;	
		}
}

Node.prototype.lastChild1 = function(type){
	var length = this.getChild(type).length;
	return this.getChild(type)[length-1];
} 


Node.prototype.insertFirst = function(new1){


	var first = this.firstChild1();
	 this.insertBefore(new1,first);
}


window.onload = function(){
	var arr = $(".nav");
	var item = $(".zi_navi");
	
	for(var i=0;i<arr.length;i++){
		arr[i].index = i;
		arr[i].onmouseover = function(){
			item[this.index].style.display = "block";	
		}
		arr[i].onmouseout = function(){
			item[this.index].style.display = "none";	
			
		}
		
	}
	//登录

	var login = $(".log")[0];
	var login_xia = $(".login_xia")[0];
	// console.log(login);
	login.onmouseover = function(){
		login_xia.style.display = "block";

	}
	login.onmouseout = function(){
		login_xia.style.display = "none";
	}
	//手机营业厅
	var phone = $(".phone")[0];
	var ewm = $(".ewm")[0];
	phone.onmouseover = function(){
		ewm.style.display = "block";
	}
	phone.onmouseout = function(){
		ewm.style.display = "none";
	}
	// console.log(phone);

	//缴费金额
	var money = $(".money")[0];
	
	var money1 = $(".money1");
	console.log(money1);
	for(var i=0;i<money1.length;i++){
		money1[i].index = i;
		
		money1[i].onclick = function(){
			for(var j=0;j<money1.length;j++){
			money1[j].style.background="";
			money1[j].style.color="";
		}
			money1[this.index].style.background="#E40077";
			money1[this.index].style.color="#fff";
		}

	}



	//话费查询
	var btns2_top = $(".da");
	for(var i=0;i<btns2_top.length;i++){
		btns2_top[i].index = i;
		btns2_top[i].onmouseover = function(){
			btns2_top[this.index].style.width = "42px";
			btns2_top[this.index].style.height = "42px";
		}
		btns2_top[i].onmouseout = function(){
			btns2_top[this.index].style.width = "38px";
			btns2_top[this.index].style.height = "38px";
		}

	}


	//轮播
	/*
		1.先获取窗口元素。
		2.再获取图片元素。
		3.设置一个变量，监控图片的下标。
		4.先初始化图片，把第一张的层级调高，其他的调低
		5.调用时间间隔函数，每一次间隔把要展示的图片的层级调高
		其他的调低。(注意下标越界！)
	*/
	var banner = $(".banne")[0];
	var as = $("a",banner);
	var list = $("li",banner);
	var btnL = $(".last",banner)[0];
	var btnR = $(".next",banner)[0];
	var index = 0;
	// console.log(btnL);
	// console.log(as);
	as[0].style.zIndex=10;

	var t = setInterval(moveL,2000);

	// var flag = true;
	// btnL.onclick = function(){
	// 	if(flag){
	// 		flag = false;
	// 		moveL();
	// 	}
		
	// }
	// btnR.onclick = function(){
	// 	if(flag){
	// 		flag = false;
	// 		moveR();
	// 	}
	// }
	
	// function moveL(){	
	// 	index--;
	// 	if(index < 0){
	// 		index = list.length-1;
	// 		// alert(index);
	// 	}
	// 	for(var i=0;i<as.length;i++){
	// 		// as[i].style.zIndex = 5;
	// 		animate(as[i],{opacity:0});
	// 		list[i].className = "";//初始化
	// 	}
	// 	list[index].className="hot";
	// 	// as[index].style.zIndex=10;
	// 	animate(as[index],{opacity:1},function(){
	// 		flag = true;
	// 	});

	// }
	


	// function moveR(){	
	// 	index++;
	// 	if(index == as.length){
	// 		index = 0;
	// 	}
	// 	for(var i=0;i<as.length;i++){
	// 		// as[i].style.zIndex = 5;
	// 		animate(as[i],{opacity:0});
	// 		list[i].className = "";//初始化
	// 	}
	// 	list[index].className="hot";
	// 	// as[index].style.zIndex=10;
	// 	animate(as[index],{opacity:1},function(){
	// 		flag = true;
	// 	});

	// }
	// banner.onmouseover = function(){
	// 	clearInterval(t);
	// }
	// banner.onmouseout = function(){
	// 	t = setInterval(moveL,2000);

	// }

	// //轮播的选项卡,点击小点

	// for(var i=0;i<list.length;i++){
	// 	//自定义一个index属性，将i值放入
	// 	list[i].index = i;

	// 	list[i].onclick = function(){
	// 	//当前的图片和点击图片是同一张时，什么也不做
	// 	if(index == this.index){
	// 		return;
	// 	}
	// 	//初始化
	// 	for(var j=0;j<as.length;j++){
	// 		// as[j].style.zIndex = 5;
	// 		animate(as[j],{opacity:0});

	// 		list[j].className = "";//初始化
	// 	}
	// 		list[this.index].className = "hot";
	// 		// as[this.index].style.zIndex = 10;
	// 		animate(as[this.index],{opacity:1});
	// 		//把当前图片的下标 给 实时监控的index
	// 		index = this.index;
	// 	}

	// }



/*
	1.先获取元素。图片，图片外的框，轮播点，左右按钮
	2.要操作两个图片，所以需要两个参数，即下标。
	  要让图片移动，需要图片的width
	3.首先先要初始化，让第一张图片到中间，第一个圆点变红for(){}
	4.自动轮播用到了时间间隔函数,setInterval();
	5.先让next就位
	  动画animate  num = -width
	  			   next = 0
	  更新下标	   num = next(之前先判断一下next的界限)
	
	移上去停止，移出来开始
	win.onmouseover,win.onmouseout

	选项卡：
		1.用for循环，因为有好多个轮播点
		2.给list[i]添加一个index属性，存放i值
		3.给每一个list[i]添加一个onclick方法
		4.在方法中写，(要点击的点不确定，所以next变为this.index)
		5.继续思路，先就位，(加上按钮)，再动画，最后更新下标

	左右按钮：
		btnL.onclick
		1.和自动轮播一样，复制过来，修改。

*/
//左右移动的banner
	var widths = parseInt(getStyle(as[0],"width"));
	var num=0;
	var next=0;
	var flag = true;
	btnL.onclick = function(){
		if(flag){
			flag = false;
			moveR();
		}
		
	}
	btnR.onclick = function(){
		if(flag){
			flag = false;
			moveL();
		}
	}
	banner.onmouseover = function(){
		clearInterval(t);
	}
	banner.onmouseout = function(){
		t = setInterval(moveL,2000);
	}
	//初始化
	//第一张图片放到中间，其他的到右边准备好，第一个圆点变红
	for(var i=0;i<as.length;i++){
		if(i==0){
			continue;
		}
		as[i].style.left = widths+"px";

	}
	//图片向左移动
	function moveL(){
		next++;
		// alert(next);
		if(next == as.length){
			next = 0;
		}
		//让下一个就位
		as[next].style.left = widths+"px";
		//按钮
		list[num].className="";//变成初始化的状态
		list[next].className="hot";
		animate(as[num],{left:-widths});
		animate(as[next],{left:0},function(){
			flag = true;
		});
		num = next;
		
	}
	//图片向右移动
	function moveR(){
		next--;
		// alert(next);
		if(next < 0){
			next = as.length-1;
			// last= as.length-2;
		}
		as[next].style.left = -widths+"px";
		//
		list[num].className="";
		list[next].className="hot";
		animate(as[num],{left:widths});
		animate(as[next],{left:0},function(){
			flag = true;
		});
		num = next;
	}

	//小点儿的选项卡
	for(var i=0;i<list.length;i++){
		list[i].index = i;
		list[i].onclick = function(){
			if(num == this.index){
				return;
			}
			if(this.index<num){
				// alert(1);
				as[this.index].style.left = -widths+"px";
				animate(as[num],{left:widths});
				animate(as[this.index],{left:0});
				
			}else{
			//把要点击的圆点所对应的图片 放到准备的位置
				as[this.index].style.left = widths+"px";
			//让当前的图片向左移动，要出现的图片移到中间
				animate(as[num],{left:-widths});
				animate(as[this.index],{left:0});
			}
			//让当前的圆点初始化，要点击的圆点改变
				list[num].className = "";
				list[this.index].className = "hot";
			//作用：就是让下一张变为当前页，不点击以后圆点会接着走。
			//要点击的圆点就是下一张图片
				next = this.index;
			//移动之后，下一张图片变为当前图片
				num = next;
		}
	}

	//图片向左移动
	var area = $(".area_right11");
	var img = $(".imga");
	// console.log(img.length);

	for(var i=0;i<img.length;i++){
		img[i].index = i;
		img[i].onmouseover = function(){
			animate(img[this.index],{right:10},Tween.Linear);
		}
		img[i].onmouseout = function(){
			animate(img[this.index],{right:0},Tween.Linear);
		}
	}

	//设置imgBox的宽度
	//传入的个数不同，长度就不同
	/*
		每一个的宽度*个数；

		先移动第一个图片，
		把第一张图片放到最后。
		第一张移走之后，left还是等于-widths，下一张图片就会顶上去，所以需要把第二张设置成left=0;

	*/
	var roll = $(".roll")[0];
	Nodelunbo(roll,1);
	function Nodelunbo(obj,num){

		var tt = setInterval(moveeL,1500);
		var gundong = $(".gundong")[0];
		var img =$(".roll_img",gundong); 
		var btnL1 = $(".last1",obj)[0];

		var btnR1 = $(".next1",obj)[0];
		var widthss = parseInt(getStyle(img[0],"width"))+10;
		var flag1 = true;
		console.log(btnR1);

		obj.onmouseover = function(){
			clearInterval(tt);
		}
		obj.onmouseout = function(){
			tt = setInterval(moveeL,1500);
		}

		btnR1.onclick = function(){
			if(flag1){
				flag1 = false;
				moveeL();
			}
		}

		btnL1.onclick = function(){
			if(flag1){
				flag1 = false;
				moveeR();
			}

		}
		gundong.style.width = img.lenght * widthss+"px";
		function moveeL(){

			animate(gundong,{left:-num*widthss},function(){
				for(var i = 0;i<num;i++){
					var first = this.getChild()[0];
					gundong.appendChild(first);
					gundong.style.left = 0;
				}
				flag1 = true;
			});

		}

		function moveeR(){
			var last = gundong.lastChild1();
			// console.log(last);
			gundong.insertFirst(last);
			gundong.style.left = -num*widthss+"px";
			animate(gundong,{left:0},function(){
				flag1 = true;
			});
		}
	
		}



		var hengtiao = $(".hengtiao")[0];
		var yitiao = $(".yitiao");
		var widthsss = parseInt(getStyle(yitiao[0],"width"));
		var btnR2 = $(".btnR1")[0];
		var btnL2 = $(".btnL1")[0];
		var next2 = 0;
		console.log(btnR2);
		// btnR2.onclick = function(){
		// 	moveeeL();
		// }
		var ttt = setInterval(moveeeL(),2000);
		function moveeeL(){
			next2++;
			if(next2 == yitiao.length){
				next2=0;
			}
		
			yitiao[next2].style.left = -widthsss;
			// var first = this.getChild()[0];
			// console.log(first);
		}





		//kf客服
		var kf1 = $(".kf1")[0];
		var kf2 = $(".kf2")[0];
		var kf3 = $(".kf3")[0];
		kf1.onmouseover = function(){
			animate(kf1,{right:40});
		}
		kf1.onmouseout = function(){
			animate(kf1,{right:-25});
		}
			kf2.onmouseover = function(){
			animate(kf2,{right:40});
		}
		kf2.onmouseout = function(){
			animate(kf2,{right:-25});
		}
			kf3.onmouseover = function(){
			animate(kf3,{right:40});
		}
		kf3.onmouseout = function(){
			animate(kf3,{right:-25});
		}
}