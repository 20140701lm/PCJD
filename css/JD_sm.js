window.onload=function(){
	/*主轮播图*/
	var oshow_img=document.getElementById("show_img").getElementsByTagName("li"),
		opart=document.getElementById("part").getElementsByTagName("dd"),
		prev_key=document.querySelector(".prev_key"),
		next_key=document.querySelector(".next_key"),
		img_num=0,
		timer
		;
		timer_fcn();
		for(var i=0;i<opart.length;i++){
			opart[i].index=i;	
			/*移入低条显示某张图片*/
			opart[i].onmouseenter=function(){
				clearInterval(timer)
				img_num=this.index;
				hide_show();
			}
			opart[i].onmouseleave=function(){
				timer_fcn()
			}

			/*移入图片停止定时器移出开启定时器*/
			oshow_img[i].onmouseenter=function(){
				clearInterval(timer);
			}
			oshow_img[i].onmouseleave=function(){
				timer_fcn()
			}
		}


		/*右键*/
		next_key.onclick=function(){
			clearInterval(timer)
			img_num++;
			hide_show()
			timer_fcn()
		}


		/*左键*/
		prev_key.onclick=function(){
			clearInterval(timer)
			img_num--;
			hide_show()
			timer_fcn()
		}


		/*定时器包装函数*/
		function timer_fcn(){
			timer=setInterval(function(){
					hide_show()
					img_num++;
				},2000)
		}

		/*公用部分*/
		function hide_show(){
			if(img_num>5){
				img_num=0;
			}else if(img_num<0){
				img_num=5;
			}
			for(var j=0;j<oshow_img.length;j++){
					oshow_img[j].className=""
						opart[j].className=""
			}
			oshow_img[img_num].className="new_show";
			opart[img_num].className="new_square";
		}

	/*小轮播图*/
	var ch_img=document.getElementById("ch_ul").getElementsByTagName("li"),
		dotes=document.getElementById("dote").getElementsByTagName("span"),
		ch_a=document.querySelector(".ch_show").getElementsByTagName("a"),
		new_imgnum=0,
		ch_timer
		;
		ch_timers();
		for(var i=0;i<dotes.length;i++){
			dotes[i].index=i;
			dotes[i].onmouseenter=function(){
				clearInterval(ch_timer);
				new_imgnum=this.index;
				ch_public_area();
			}
			dotes[i].onmouseleave=function(){
				ch_timers();
			}
			ch_img[i].onmouseenter=function(){
				clearInterval(ch_timer);
			}
			ch_img[i].onmouseleave=function(){
				ch_timers();
			}
		}
		function ch_timers(){
				ch_timer=setInterval(function(){
				if(new_imgnum<0){
					new_imgnum=4
				}else if(new_imgnum>4){
					new_imgnum=0
				}
				ch_public_area()
				new_imgnum++
			},2000)
		}
		
		function ch_public_area(){
			for(var j=0;j<dotes.length;j++){
					dotes[j].className="";
					ch_img[j].className=" ";
					ch_a[j].className=" ";
				}
			dotes[new_imgnum].className="newdote";
			ch_img[new_imgnum].className="ch_newimg";
			ch_a[new_imgnum].className="ch_new_a";
		}

	/*hotshop 轮播图*/
	var cshs_page=document.querySelectorAll(".cs_hs_page"),
		cshsk_previ=document.querySelector(".cshs_key_previ"),
		cshsk_next=document.querySelector(".cshs_key_next"),
		cshsp_num=0,
		cshsp_timer
		;
	cshsp_timers();

	/*左键*/
	cshsk_previ.onclick=function(){
		clearInterval(cshsp_timer)
		cshsp_judge();
		cshsp_num--;
		cshsp_timers()
	};

	/*右键*/
	cshsk_next.onclick=function(){
		clearInterval(cshsp_timer)
		cshsp_judge();
		cshsp_num++;
		cshsp_timers()
	};


	for(var i=0;i<cshs_page.length;i++){
		cshs_page[i].onmouseenter=function(){
			clearInterval(cshsp_timer)
		};
		cshs_page[i].onmouseleave=function(){
			cshsp_timers()
		};
	};
	function cshsp_timers(){
		cshsp_timer=setInterval(function(){
			cshsp_judge();
			cshsp_num++;
		},3000)
	};
	function cshsp_judge(){
		if(cshsp_num>1){
			cshsp_num=0
		}else if(cshsp_num<0){
			cshsp_num=1
		}
		cshs_page[0].style.display="block";
		cshs_page[1].style.display="block";
		cshs_page[cshsp_num].style.display="none";
	};

	/*限时抢购倒计时*/
	var odate=document.querySelectorAll(".date");
	console.log(odate)
	var y = new Date(),str="",array=[];
	y.setHours(y.getHours()+9);
	setInterval(function(){
		var x = new Date(),num = y.getTime()-x.getTime();
		x.setHours(0,0,0,0);
		x.setMilliseconds(num);
		str= x.getHours()+":"+x.getMinutes()+":"+x.getSeconds();
		array=str.split(":")
		for(var i=0;i<array.length;i++){
			if(i===0){
				time(i);
			}else if(i===1){
				time(i);	
			}else{
				time(i);
			}
		}
	},1000)
	function time(i){
		var m=i,array2=[];
		m+=i;
		if(array[i].length===1){
			odate[m].innerText=0;
			odate[m+1].innerText=array[i]
		}else if(array[i].length===2){
			array2=array[i].split("")
			odate[m].innerText=array2[0];
			odate[m+1].innerText=array2[1];
		}	
	}

	/*楼层效果*/
	var lc=document.querySelector("#lc_list"),
		lcd_num=0,
		lc_dd=document.querySelector("#lc_list").getElementsByTagName("dd"),
		lc_lastdd=document.querySelector(".lc_lastdd")
		lc_tier=document.querySelectorAll(".public")
		;
		for(var i=0;i<lc_dd.length-1;i++){
			lc_dd[i].index=i;
			lc_dd[i].onclick=function(){
				document.documentElement.scrollTop=lc_tier[lcd_num].offsetTop+200;
			}
			lc_dd[i].onmouseenter=function(){
				lcd_num=this.index;
				public()
			}
		}
		lc_lastdd.onclick=function(){
			document.documentElement.scrollTop=0;
		}
		window.onscroll=function(){
			var otop=document.documentElement.scrollTop;
			lc.style.visibility=otop>500?"visible":"hidden";		
			for(var i=0;i<lc_tier.length;i++){
				if(otop>=lc_tier[i].offsetTop+200&&otop<lc_tier[i].offsetTop+lc_tier[i].offsetHeight){
					for(var j=0;j<lc_dd.length-1;j++){
						lc_dd[j].className="";
					}
					lc_dd[i].className="lcl_new";
				}
			}
			
		}
		function public(){
			for(var j=0;j<lc_dd.length;j++){
						lc_dd[j].className="";
			}
			lc_dd[lcd_num].className="lcl_new";
		}
}