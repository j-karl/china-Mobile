/*
	4.0版首页立即充值
	需结合/js10086/index_new.js、/js10086/pcommon.js使用
	上线需要插码，插码需要配合基本码实现
	创建人：Jeffrey
	修改时间：2015-02-16
*/


var cz_provurls = new Array();
cz_provurls["bj"] = "http://www.bj.10086.cn/www/cmpay.jsp";
cz_provurls["gd"] = "http://gd.10086.cn/commodity/easypay/index.jsp";
cz_provurls["sh"] = "http://www.sh.10086.cn/sh/wsyyt/busi/1491.jsp";
cz_provurls["tj"] = "http://service.tj.10086.cn/app?service=page/payfeeonlinenew.PayFeeIndex&listener=initPage";
cz_provurls["cq"] = "http://service.cq.10086.cn/CHOQ/service/pay.jsp";
cz_provurls["ln"] = "http://www.ln.10086.cn/service/fee/onlinepay.xhtml";
cz_provurls["js"] = "http://service.js.10086.cn/wscz.jsp#WSCZYL";
cz_provurls["hb"] = "http://www.hb.10086.cn/service/payByBank!initExecute.action?menuid=netPay";
cz_provurls["sc"] = "http://www.sc.10086.cn/pay/bankpaymobile.jsp";
cz_provurls["sn"] = "https://service.sn.10086.cn/pay/app?service=page/BankYHKCash&listener=PayOnlineFast";
cz_provurls["he"] = "http://www.he.10086.cn/service/fee/paymentAction!initPaymentByBank.action";
cz_provurls["sx"] = "http://service.sx.10086.cn/pay.html";
cz_provurls["ha"] = "https://service.ha.10086.cn/service/pay/bank-card-pay.action?menuCode=1022";
cz_provurls["jl"] = "http://www.jl.10086.cn/service/billservice/pay/index.jsp";
cz_provurls["hl"] = "http://www.hl.10086.cn/service/fee/mobilepay/index_bankpay.jsp";
cz_provurls["nm"] = "http://www.nm.10086.cn/onlinerecharge/index.xhtml";
cz_provurls["sd"] = "http://www.sd.10086.cn/eMobile/jsp/common/prior.jsp?menuid=netPay";
cz_provurls["ah"] = "http://ah.10086.cn/czjf";
cz_provurls["zj"] = "http://service.zj.10086.cn/cz/";
cz_provurls["fj"] = "http://www.fj.10086.cn/service/fj_comm/include/frame.jsp?targetUrl=/service/mobilepay/toPayIndex.do?tagIndex=5";
cz_provurls["hn"] = "https://www.hn.10086.cn/service/fee/payment/bankPay.jsp";
cz_provurls["gx"] = "http://service.gx.10086.cn/fee/czjf2.jsp";
cz_provurls["jx"] = "http://service.jx.10086.cn/service/jxcontent/memberZone/onlinepay/payment.jsp";
cz_provurls["gz"] = "http://www.gz.10086.cn/upp/web/payfee/payTheFee/PayTheFeeAction?tag_id=TAG001&action=initPage";
cz_provurls["yn"] = "http://www.yn.10086.cn/service/app?service=page/payonline.BankPayNewEC&listener=secondInitPage";
cz_provurls["xz"] = "http://www.xz.10086.cn/service/fee/bankPayNew.jsp";
cz_provurls["hi"] = "http://www.hi.10086.cn/service/payfeenew/bankNumberChoose.do";
cz_provurls["gs"] = "http://www.gs.10086.cn/gs_obsh_service/SJZF_CZ.jsp";
cz_provurls["nx"] = "http://www.nx.10086.cn/service/payment/index.jsp";
cz_provurls["qh"] = "http://qh.10086.cn/ics/app?service=page/BankYHK&listener=initPage";
cz_provurls["xj"] = "http://www.xj.10086.cn/service/fee/payfeeonline/PayFeeDiscount/";
var notonline = ",";//未上线的省份用“,”包围起来组成字符串，如：“,qh,zj,”。首尾的“,”不可省略
var cmcurprov="sh";//插码默认省，正常默认值不会被使用


var cz_pinfo_status = 0;//未获得
var cz_pinfo_last = '';



//省份相关数据
var base_provinces = new Array();
var i_prov = 0;
base_provinces[i_prov++] = new Array("100","bj","北京");
base_provinces[i_prov++] = new Array("200","gd","广东");
base_provinces[i_prov++] = new Array("210","sh","上海");
base_provinces[i_prov++] = new Array("220","tj","天津");
base_provinces[i_prov++] = new Array("230","cq","重庆");
base_provinces[i_prov++] = new Array("240","ln","辽宁");
base_provinces[i_prov++] = new Array("250","js","江苏");
base_provinces[i_prov++] = new Array("270","hb","湖北");
base_provinces[i_prov++] = new Array("280","sc","四川");
base_provinces[i_prov++] = new Array("290","sn","陕西");
base_provinces[i_prov++] = new Array("311","he","河北");
base_provinces[i_prov++] = new Array("351","sx","山西");
base_provinces[i_prov++] = new Array("371","ha","河南");
base_provinces[i_prov++] = new Array("431","jl","吉林");
base_provinces[i_prov++] = new Array("451","hl","黑龙江");
base_provinces[i_prov++] = new Array("471","nm","内蒙古");
base_provinces[i_prov++] = new Array("531","sd","山东");
base_provinces[i_prov++] = new Array("551","ah","安徽");
base_provinces[i_prov++] = new Array("571","zj","浙江");
base_provinces[i_prov++] = new Array("591","fj","福建");
base_provinces[i_prov++] = new Array("731","hn","湖南");
base_provinces[i_prov++] = new Array("771","gx","广西");
base_provinces[i_prov++] = new Array("791","jx","江西");
base_provinces[i_prov++] = new Array("851","gz","贵州");
base_provinces[i_prov++] = new Array("871","yn","云南");
base_provinces[i_prov++] = new Array("891","xz","西藏");
base_provinces[i_prov++] = new Array("898","hi","海南");
base_provinces[i_prov++] = new Array("931","gs","甘肃");
base_provinces[i_prov++] = new Array("951","nx","宁夏");
base_provinces[i_prov++] = new Array("971","qh","青海");
base_provinces[i_prov++] = new Array("991","xj","新疆");
base_provinces[i_prov++] = new Array("000","","集团");
var default_prov = new Array("210","sh","上海");

//根据省份名称(北京)、省份三位识别码(100)、省份两位简称(bj)，返回省份三位识别码
function getProvCode(sim){
	var pname = "";
	for(var i=0;i<=31;i++){
		if(base_provinces[i][0] == sim || base_provinces[i][1] == sim || base_provinces[i][2] == sim){
			pname = base_provinces[i][0];
			break;
		}
	}
	return pname;
}

//根据省份名称(北京)、省份三位识别码(100)、省份两位简称(bj)，返回省份两位简称
function getProvBrief(sim){
	var pname = "";
	for(var i=0;i<=31;i++){
		if(base_provinces[i][0] == sim || base_provinces[i][1] == sim || base_provinces[i][2] == sim){
			pname = base_provinces[i][1];
			break;
		}
	}
	return pname;
}

//根据省份名称(北京)、省份三位识别码(100)、省份两位简称(bj)，返回省份名称
function getProvName(sim){
	var pname = "";
	for(var i=0;i<=31;i++){
		if(base_provinces[i][0] == sim || base_provinces[i][1] == sim || base_provinces[i][2] == sim){
			pname = base_provinces[i][2];
			break;
		}
	}
	return pname;
}


//根据省份名称(北京)、省份三位识别码(100)、省份两位简称(bj)，返回省份三位识别码
function getProvNum(sim){
	var pnum = "";
	for(var i=0;i<=31;i++){
		if(base_provinces[i][0] == sim || base_provinces[i][1] == sim || base_provinces[i][2] == sim){
			pnum = base_provinces[i][0];
			break;
		}
	}
	return pnum;
}


// 根据cookie返回归属省市,如果cookie中不存在归属省市,则返回000|000.
function getProvCity() {
    var rv = "100|100";
    var strCookie = document.cookie;
    var arrCookie = strCookie.split("; ");
    for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split("=");
        if (2 <= arr.length && "CmLocation" == arr[0]) {
            rv = arr[1];
            break;
        }
    }
    return rv;
}


//动态获取省份相关信息
function fun_pinfo() {
	fun_pinfo2(false);
}

function fun_pinfo2(needShowWait){
	var pho = document.getElementById("cz_pho").value;
	
	if(/^\d+$/.test(pho)){
		if(pho.length>=3){
			var sph = "";
			var checkb = false;
			if(pho.length>=7){
				sph = pho.substring(0,7);
				checkb = (isPhoneNumber(sph+"1234")==0);
			} else if(pho.length==11){
				sph = pho;
				checkb = (isPhoneNumber(sph)==0);
			} else {
				sph = pho.substring(0,3);
				checkb = (isPhoneNumber(sph+"12345678")==0);
			}
			if(checkb){
				fun_hiddenerr();
				if((pho.length==7 || pho.length==11) && cz_pinfo_last != pho.substring(0,7)){
					cz_pinfo_status = 0;
				}
				if((pho.length==7 || pho.length==11) && cz_pinfo_status == 0){
					//执行
					cz_pinfo_last=pho.substring(0,7);
					var wrong = function(){
						fun_showerr("已断开,请重试");
					}
					var tid = null;
					if(needShowWait){
						fun_showerr("请稍候...");
						tid = window.setTimeout(wrong, 5000);
					}
					//Ajax请求服务器，获得结果（是否正确获得信息,省URL或错误代码）
					var resfun= function(rst){
						var rs = rst.split(" ");
						if(rs[0]=="Y"){
							var bif = getProvBrief(rs[1]);
							var nomsg = "归属省未开通该项业务";
							nomsg = "非本省号码";
							if(notonline.indexOf("," + bif + ",") != -1){
								clearTO(tid);
								cz_pinfo_status=0;
								fun_showerr(nomsg);
							} else {
								var acurl = $('<span/>').html(json601[1][2].href).text();
								if(acurl==null || acurl==""){//正常不会被执行
									clearTO(tid);
									cz_pinfo_status=0;
									fun_showerr(nomsg);
								} else {

									if(location.pathname.toLowerCase().indexOf(bif)!=-1){
										document.getElementById("cz_form").action=acurl;
										cmcurprov = getProvCity();
										cz_pinfo_status=1;//已获得
										clearTO(tid);
										fun_hiddenerr();

									}
									else{
										clearTO(tid);
										cz_pinfo_status=0;
										fun_showerr(nomsg);
									}
								}
							}
						} else if (rs[0]=="N"){
							clearTO(tid);
							cz_pinfo_status=0;
							fun_showerr("请输入正确的移动号码");
						}
					}

					//执行Ajax
					var majax = false;
					if (window.XMLHttpRequest) {
						majax = new XMLHttpRequest();
					} else if (window.ActiveXObject) {
						majax = new ActiveXObject("Microsoft.XMLHTTP");
					}
					if (majax) {
						try{
							majax.open("GET", "/service/prov/prov.jsp?phone=" + pho.substring(0,7) + "1234",false);
							majax.onreadystatechange = function() {
								if (majax.readyState == 4) {
									if(majax.status == 200){
										resfun(majax.responseText);
									}else{
										clearTO(tid);
										cz_pinfo_status=0;
										if(needShowWait){
											fun_showerr("已断开,请重试");
										}
									}
								}
							}
							majax.send(null);
						}catch(te){
							cz_pinfo_status=0;
							if(needShowWait){
								fun_showerr("已断开,请重试");
							}
						}
					} else {
						clearTO(tid);
						if(needShowWait){
							alert("您的浏览器不支持Ajax实现!");
						}
					}
				}
			} else {
				fun_showerr("请输入正确的移动号码");
			}
		} else {
			fun_hiddenerr();
		}
	} else if (pho.length>0){
		fun_showerr("请输入正确的移动号码");
	} else {
		fun_hiddenerr();
	}
}

//页面判断、表单提交
function fun_czsubmit(){
	//fun_chama("INDEX_LJCZ_ZS");
	
	var cz_pho = $("#cz_pho").get(0);
	var pho = cz_pho.value;
	
	if (pho == cz_pho.defaultValue) {
		$("#cz_pho").css("color","#ff0000");
		$("#cz_pho").css("font-family","微软雅黑");
		return;
	}
	
	
	if (isPhoneNumber(pho) != 0) {
		fun_showerr("请输入正确的移动号码");
		fun_chama("INDEX_LJCZ_SB");
		return;
	}

	//Add Cookie
	setCookie("czonehis", pho);

	var sum = document.getElementById("cz_val").value;
	if(sum!=30 && sum != 50 && sum!=100 && sum!=300 && sum!=500 && sum!=0){//正常不会被执行
		fun_showerr("请重新选择金额");
		fun_chama("INDEX_LJCZ_SB");
		return;
	}
	if (!fun_iserrblock()) {
		if (cz_pinfo_status==1) {
			cz_pinfo_status = 0;
			fun_chama("INDEX_LJCZ_" + cmcurprov);
			fun_chama2();
			document.getElementById("cz_form").submit();
		}
		else if(cz_pinfo_status==0) {
			fun_pinfo2(true);
			if(cz_pinfo_status == 1){
				cz_pinfo_status = 0;
				fun_chama("INDEX_LJCZ_" + cmcurprov);
				fun_chama2();
				document.getElementById("cz_form").submit();
			}
			else {
				fun_chama("INDEX_LJCZ_SB");
			}
		}
	}else{
		fun_chama("INDEX_LJCZ_SB");
	}
}


function fun_czsubmit2(){
	//fun_chama("INDEX_LJCZ_ZS");
	var pho = document.getElementById("cz_pho").value;
	
	if (pho == "请输入手机号码") {
		$("#cz_pho").css("color","#ff0000");
		$("#cz_pho").css("font-family","微软雅黑");
		return;
	} 
	
	if(isPhoneNumber(pho) != 0){
		fun_showerr("请输入正确的移动号码");
		fun_chama("INDEX_LJCZ_SB");
		return;
	}

	//Add Cookie
	setCookie("czonehis", pho);

	var sum = document.getElementById("cz_val").value;
	if(sum!=30 && sum != 50 && sum!=100 && sum!=300 && sum!=500 && sum!=0){//正常不会被执行
		fun_showerr("请重新选择金额");
		fun_chama("INDEX_LJCZ_SB");
		return;
	}
	if (!fun_iserrblock()) {
		if (cz_pinfo_status==1) {
			cz_pinfo_status = 0;
			fun_chama("INDEX_LJCZ_" + cmcurprov);
			fun_chama2();
			document.getElementById("cz_form").submit();
		}
		else if(cz_pinfo_status==0) {
			fun_pinfo2(true);
			if(cz_pinfo_status == 1){
				cz_pinfo_status = 0;
				fun_chama("INDEX_LJCZ_" + cmcurprov);
				fun_chama2();
				document.getElementById("cz_form").submit();
			}
			else {
				fun_chama("INDEX_LJCZ_SB");
			}
		}
	}else{
		fun_chama("INDEX_LJCZ_SB");
	}
}


//插码函数，避免异常
function fun_chama(sign){
	try{
		if (typeof(_tag)!= 'undefined'){
			_tag.dcsMultiTrack('WT.event', sign);
		}
	}catch(t){}
}

//分号码、金额插码
function fun_chama2(){
	try{
		var amountobj = document.getElementById("cz_val");
		var mobileNoobj = document.getElementById("cz_pho");
		if (typeof(_tag)!= 'undefined'){
			_tag.dcsMultiTrack('WT.INDEX_mobile',mobileNoobj.value,'WT.INDEX_money',amountobj.value);
		}
	}catch(t){}
}

//初始化手机号码框
function fun_initpho(){
	var pho = getCookie("czonehis");
	if(pho!=null && isPhoneNumber(pho) == 0){
		document.getElementById("cz_pho").value=pho;
	}
}

function fun_showerr(str){
	setInnerText(document.getElementById("cz_div_notice"),str);
	fun_showdiv("cz_div_notice");
}

function fun_hiddenerr(){
	fun_hiddendiv("cz_div_notice");
}

function fun_iserrblock(){
	return (document.getElementById("cz_div_notice").style.display=="block");
}

function fun_tocamountdis(){
	var o = document.getElementById("cz_amall");
	if(o.style.display=="block"){
		o.style.display="none"
	} else {
		o.style.display="block"
	}
}

//清除定时任务
function clearTO(tid){
	try{
		window.clearTimeout(tid);
	}catch(e){}
}

function setInnerText(obj,str){
	while (obj.childNodes.length != 0) {
		obj.removeChild(obj.childNodes[0]);
	}
	
	obj.appendChild(document.createTextNode(str));
}

function fun_showfs(){
	fun_showdiv("cz_fs");
}

function fun_hidfs(){
	fun_hiddendiv("cz_fs");
}

function fun_showdiv(oid){
	var o = document.getElementById(oid);
	if(o){
		o.style.display = "block";
	}
}

function fun_hiddendiv(oid){
	var o = document.getElementById(oid);
	if(o){
		o.style.display = "none";
	}
}

function fun_update_samount(amount){
	// setInnerText(document.getElementById("cz_amdis"),"充值"+amount + "元");
	
	if (amount == 0) {
		document.getElementById("cz_val").value = "";
	}
	else {
		document.getElementById("cz_val").value = amount;
	}
	

	$("#cz0").attr("class","");
	$("#cz30").attr("class","");
	$("#cz50").attr("class","");
	$("#cz100").attr("class","");
	$("#cz300").attr("class","");
	$("#cz500").attr("class","");
	var czsubmit_src = "";
    $(".czsubmit span").html(czsubmit_src);
	
	
	if(amount == 0){ $("#cz0").attr("class","on");rebate("0");}
	if(amount == 30){ $("#cz30").attr("class","on");rebate("30");}
	if(amount == 50) {$("#cz50").attr("class","on");rebate("50");}
	if(amount == 100){ $("#cz100").attr("class","on");rebate("100");}
	if(amount == 300){ $("#cz300").attr("class","on");rebate("300");}
	if(amount == 500){ $("#cz500").attr("class","on");rebate("500");}

}


function rebate(money){
	var jsonURL = './depositprompt'+getProvNum(previewProv)+'.json';
					
	$.getJSON(jsonURL,function(data){
		var czsubmit_src = "";
		for(var i = 0;i<data['data'].length;i++){
			if(money==data['data'][i].money_sum){
				czsubmit_src = $('<span/>').html(data['data'][i].special_offer).text();
				break;
			}
		}
		$(".czjf span").html(czsubmit_src);
	});
	
}






/**
 * Created by stt on 2015/12/10 0010.
 */
$(function () {
    //主广告轮播（移动端）
    if (isMobile()) {
        $('#carousel-example-captions').hammer().on('swipeleft swipeleftup swipeleftdown', function () {
            $(this).carousel('next');
        });
        $('#carousel-example-captions').hammer().on('swiperight swiperightup swiperightdown', function () {
            $(this).carousel('prev');
        });
    }
    //4G专区图片晃动
    if ($(document.body).outerWidth(true) > 768) {
        $(".fourg .row section img").mouseover(function () {
            $(this).animate({right: "10px"}, 250);
        }).mouseout(function () {
            $(this).animate({right: "0px"}, 250);
        });
        //买手机区图片晃动
        $(".buyphone .row img").mouseover(function () {
            $(this).animate({right: "10px"}, 250);
        }).mouseout(function () {
            $(this).animate({right: "0px"}, 250);
        });
        //业务推荐去图片晃动
        $(".ywtj .row section img").mouseover(function () {
            $(this).animate({right: "10px"}, 250);
        }).mouseout(function () {
            $(this).animate({right: "0px"}, 250);
        });
    }
    //辅助需求导航区窄屏幕伸缩效果

    $(".index-help .row h2 a").click(function () {
        if ($(this).parent().siblings(".linkgroup").is(":hidden")) {
            $(this).parent().siblings(".linkgroup").show();
            $(this).html("×");
        } else {
            $(this).parent().siblings(".linkgroup").hide();
            $(this).html("+");
        }
        return false;
    });

    //公告滚动

    (function () {
        var ul = $(".indexgg ul");
        var interval = null;
        var timeOut = null;
        //向右运动
        var funcRight = function () {
            $(".indexgg ul li:first").appendTo(ul);

        }
        //向左运动
        var funcLeft = function () {
            $(".indexgg ul li:last").prependTo(ul);
        }

        function do_move() {
            if (interval) {
                clearInterval(interval);
            }
            interval = setInterval(funcRight, 4000);
        }

        function stop_move() {
            clearInterval(interval);
            interval = null;
        }

        do_move();


        if (!isMobile()) {
            $(".qhbtn").on({
                "mouseover": function () {
                    stop_move();
                },
                "mouseout": function () {
                    do_move();
                }
            });

            ul.on({
                "mouseover": function () {
                    clearInterval(interval);
                },
                "mouseout": function () {
                    if (interval) {
                        clearInterval(interval);
                    }
                    interval = setInterval(funcRight, 4000);
                }
            });
            $(".qhbtn .left").click(function () {
                if (interval) {
                    clearInterval(interval);
                }
                funcLeft();
            });
            $(".qhbtn .right").click(function () {
                if (interval) {
                    clearInterval(interval);
                }
                funcRight();
            });

        } else {
            $('.qhbtn .left').hammer().on('tap', function () {
                if (interval) {
                    clearInterval(interval);
                }
                if (timeOut) {
                    clearTimeout(timeOut);
                }
                funcLeft();
                timeOut = setTimeout(do_move);
            });
            $('.qhbtn .right').hammer().on('tap', function () {
                if (interval) {
                    clearInterval(interval);
                }
                if (timeOut) {
                    clearTimeout(timeOut);
                }

                funcRight();
                timeOut = setTimeout(do_move);
            });
        }

    }());

    //优惠促销轮播图

    (function () {
        var g_bMoveLeft = true;//控制左右移动
        var g_oTimer = null;//移动定时器
        var g_oTimerOut = null;//无缝移动定时器

        var g_bPause = true;//控制是否连续运动还是每个图片停顿
        var g_iPauseTime = 4000;//默认运动间隔
        var g_iSpeed = 5;//每次移动像素
        var g_distance = parseInt($(".indexbox").outerWidth(true));//滚动距离
        var g_imageDsitance = parseInt($(".indexbox").first().outerWidth(true));//单个图片div宽度


        //初始化--图片翻倍 相对定位 增加最外层宽度
        var allImages = $(".yhgundong").children().clone(true);//图片复制
        $(".yhgundong").append(allImages);
        var length = $(".yhgundong").children().length;//图片总长度
        $(".yhgundong").css({"position": "absolute", "left": "0px", "width": length * g_distance});
        $(window).resize(function () {
            $(".yhgundong").css({"position": "absolute", "left": "0px", "width": length * g_distance});

        });


        //开始运动函数
        function startMove(bLeft) {
            g_bMoveLeft = bLeft;

            if (g_oTimer) {
                clearInterval(g_oTimer);
            }
            if (g_oTimerOut) {
                clearTimeout(g_oTimerOut);
            }

            g_oTimer = setInterval(doMove, 5);
        }


        //停止运动函数
        function stopMove() {
            clearInterval(g_oTimer);
            g_oTimer = null;
        }

        //pc端添加事件
        if (!isMobile()) {
            $(".yhnext").hide();
            $(".yhpre").hide();
            $(".yhgundong div").on({
                "mouseover": function () {
                    stopMove();
                },
                "mouseout": function () {
                    startMove(g_bMoveLeft);
                }
            });
            $(".yhnext").show();
            $(".yhpre").show();

            $(".yhpre").click(function () {
                startMove(false);
            });
            $(".yhnext").click(function () {
                startMove(true);
            });
        }

        startMove(false);
        if (isMobile()) {
            //滑动
            $('.yhgundong').hammer().on('swipeleft', function () {
                startMove(false);
            });
            $('.yhgundong').hammer().on('swiperight', function () {
                startMove(true);
            });

            //左右按钮触摸
            $('.yhnext').hammer().on('tap', function () {
                startMove(true);
            });
            $('.yhpre').hammer().on('tap', function () {
                startMove(false);
            });

            //左右拖动
            var downX = 0;
            var downLeft = 0;
            var touchCenter = 0;
            var downTime = 0;
            $('.yhgundong').hammer().on('panstart', function (ev) {
                downTime = Date.now();
                stopMove();
                ev.preventDefault();
                downX = Math.ceil(ev.gesture.changedPointers[0].clientX);
                downLeft = parseInt($(this).css("left"));
                $('.yhgundong').hammer().on('panmove', function (e) {

                    var touchCenter = Math.ceil(e.gesture.changedPointers[0].clientX);
                    $(".yhgundong").css("left", downLeft + touchCenter - downX);
                    if (parseInt($(".yhgundong").css("left")) <= -length * g_distance / 2) {
                        $(".yhgundong").css("left", 0);
                    }
                    if (parseInt($(".yhgundong").css("left")) >= 0) {
                        $(".yhgundong").css("left", -length * g_distance / 2);
                    }

                });
                $('.yhgundong').hammer().on('panend', function (e) {
                    var touchCenter = Math.ceil(e.gesture.changedPointers[0].clientX);
                    if (touchCenter > downX) {
                        startMove(true);
                    } else {
                        startMove(false);
                    }

                });

            });
        }

        //运动函数执行一次left改变g_iSpeed
        function doMove() {
            var scrollElement = $(".yhgundong");
            var left = parseInt($(".yhgundong").css("left"));

            $(window).resize(function () {
                g_imageDsitance = parseInt($(".indexbox").first().outerWidth(true));//单个图片div宽度
            });

            if (g_bMoveLeft) {

                left += g_iSpeed;
                if (left >= 0) {
                    left -= length * g_distance / 2;
                }

            } else {
                left -= g_iSpeed;
                if (left <= -length * g_distance / 2) {

                    left += length * g_distance / 2;

                }
            }

            if (g_bPause) {

                if (Math.abs(left - Math.round(left / g_imageDsitance) * g_imageDsitance) < Math.ceil(g_iSpeed / 2)) {
                    stopMove();
                    g_oTimerOut = setTimeout
                    (
                        function () {
                            startMove(g_bMoveLeft);
                        }, g_iPauseTime
                    );

                    left = Math.round(left / g_imageDsitance) * g_imageDsitance;
                }
            }


            $(".yhgundong").css("left", left);
        }

    }());


    //快速显示title
    $.fn.extend({
        showTitle: function () {
            var x = 10, y = 20;
            this.mouseover(function (e) {
                this.myTitle = this.title;
                this.title = "";
                var showDiv = "<div id='showDiv' style='z-index:9999;position: absolute;border: solid 1px #dfdfdf;background-color: white;padding: 0px 2px;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;'>" + this.myTitle + "</div>";
                $("body").append(showDiv);
                $("#showDiv").css({
                    "top": (e.pageY + y) + "px",
                    "left": (e.pageX + x) + "px"
                }).show("fast");
            }).mouseout(function () {
                this.title = this.myTitle;
                $("#showDiv").remove();
            }).mousemove(function (e) {
                $("#showDiv").css({
                    "top": (e.pageY + y) + "px",
                    "left": (e.pageX + x) + "px"
                });
            });
        }
    });
    if (!isMobile()) {
        //手机区title显示
        $(".lianjie3 img").showTitle();
        //业务推荐title显示
        $(".ywtj .row img").showTitle();
        //4G专区title显示
        $(".fourg .row img").showTitle();
        //主广告轮播图 title
        $(".banner img").showTitle();
        $(".banner ol li").showTitle();
        //优惠促销区title
        $(".yhcx img").showTitle();
        //主广告title
        $(".indexgg .row li a").showTitle();
    }

    //插码
    function tagFun(target) {
        if (typeof(_tag) != 'undefined') {
            _tag.dcsMultiTrack('WT.event', target);
        }
    }


    //在线客服
    $(".rfu div").hover(function(){
        $(this).animate({left:-84+"px"},500);
    },function(){
        $(this).animate({left:-20+"px"},500);
    });

    //文件调查
    $(document).ready(function (){
        $(".rfu2 div").hover(function(){
            $(this).animate({left:-108+"px"},500);
        },function(){
            $(this).animate({left:-20+"px"},500);
        })
    });

    if(isMobile()){
        $("#rfu2").css("display","none");
        $("#rfu").css("display","none");
    }
});




/**
 * Created by stt on 2016/1/20 0020.
 */
//动态加载js，无阻塞加载js

function loadScript(url,callback){
    var script = document.createElement("script");
    script.type = "text/javascript";
    if(script.readyState){
        script.onreadystatechange = function(){
            if(script.readyState=="loaded"||script.readyState=="complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    }else{
        script.onload = function(){
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);

}


//判断手机终端
//判断是否是移动设备
function isMobile() {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        return true;
    }
    else {
        return false;
    }
}


// 判断字符串是否是手机号码
// 0是手机号码 1不是11位数字 2号码前缀不正确
/* 用于检验手机号的位数以及检验此手机中是否为中国移动的手机号*/
/* 由于存在携号转网的情况 允许3个运营商的全部号段（试点中）*/
// 中国移动号码段：134(0至8号段) 135 136 137 138 139 147 150 151 152 157 158 159 178 182 183 184 187 188
// 中国联通号码段：130 131 132 145 155 156 175 176 185 186
// 中国电信号码段：133 153 173 177 180 181 189
// 虚拟运营商号码段：170 171
function isPhoneNumber(phone) {
    var rv = 0;

    var mbphnoM = /^(13[4-9])|^(147)|^(150)|^(151)|^(152)|^(157)|^(158)|^(159)|^(178)|^(182)|^(183)|^(184)|^(187)|^(188)/;
    var mbphnoU = /^(130)|^(131)|^(132)|^(145)|^(155)|^(156)|^(175)|^(176)|^(185)|^(186)/;
    var mbphnoT = /^(133)|^(153)|^(173)|^(177)|^(180)|^(181)|^(189)/;
    var mbphnoV =/^(170)|^(171)/;

    var num11 = /^\d{11}$/; //11位数字;

    if (null != phone && "" != phone && num11.exec(phone)) {

        if (mbphnoM.exec(phone) || mbphnoU.exec(phone) || mbphnoT.exec(phone) || mbphnoV.exec(phone)) {
            rv = 0;
        }
        else {
            rv = 2;
        }
    }
    else {
        rv = 1;
    }

    return rv;
}



// Create a cookie with the specified name and value.
function setCookie(sName, sValue) {

    // Expires the cookie in one month
    var date = new Date();
    date.setMonth(date.getMonth() + 1);

    if (window.location.hostname == 'www.10086.cn' || window.location.hostname == '10086.cn') {
        document.cookie = sName + "=" + escape(sValue) + "; expires=" + date.toUTCString() + "; domain=10086.cn; path=/";
    }
    else {
        document.cookie = sName + "=" + escape(sValue) + "; expires=" + date.toUTCString() + "; path=/";
    }

}

// Retrieve the value of the cookie with the specified name.
function getCookie(sName) {
    // cookies are separated by semicolons
    var aCookie = document.cookie.split("; ");
    var aCrumb = null;
    for (var i=0; i < aCookie.length; i++) {
        // a name/value pair (a crumb) is separated by an equal sign
        aCrumb = aCookie[i].split("=");
        if (sName == aCrumb[0]) {
            return unescape(aCrumb[1]);
        }
    }
    // a cookie with the requested name does not exist
    return null;
}

// Delete the cookie with the specified name.
function delCookie(sName) {

    if (window.location.hostname == 'www.10086.cn' || window.location.hostname == '10086.cn') {
        document.cookie = sName + "=; expires=Fri, 31 Dec 1999 23:59:59 GMT; domain=10086.cn; path=/";
    }
    else {
        document.cookie = sName + "=; expires=Fri, 31 Dec 1999 23:59:59 GMT; path=/";
    }


}




var cur_prov_code = "";
function initProvCodeByIp() {
	cur_prov_code = "";
	var XMLHttpRequestObject = false;
	if (window.XMLHttpRequest) {
		XMLHttpRequestObject = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
	}
	if (XMLHttpRequestObject) {
		XMLHttpRequestObject.open("GET", "/service/ip/ip.jsp",false);
		XMLHttpRequestObject.onreadystatechange = function() {
			if (XMLHttpRequestObject.readyState == 4
				&& XMLHttpRequestObject.status == 200) {
				cur_prov_code = getProvCode(XMLHttpRequestObject.responseText.substring(0,3));
			}
		}
		XMLHttpRequestObject.send(null);
	}
}
function initProvCodeByCookie(){
	cur_prov_code = "";
	var strCookie = document.cookie;
	var arrCookie = strCookie.split("; ");
	for ( var i = 0; i < arrCookie.length; i++) {
		var arr = arrCookie[i].split("=");
		if ("CmProvid" == arr[0]) {
			cur_prov_code = getProvCode(arr[1]);
			break;
		}
	}
}
function initProvCodeByUrl(){
	cur_prov_code = "";
	var curl = document.URL;
	for(var i=0;i<=30;i++){
		if(curl.indexOf("/" + base_provinces[i][1] + "/") != -1){
			cur_prov_code = base_provinces[i][1];
			break;
		}
	}
}

//根据URL获取当前登录省份两位简称
function getCurProvCodeByUrl(){
	initProvCodeByUrl();
	return getProvCode(cur_prov_code);
}

//根据Cookie获取当前登录省份两位简称
function getCurProvCodeByCookie(){
	initProvCodeByCookie();
	return getProvCode(cur_prov_code);
}

//根据IP获取当前登录省份两位简称
function getCurProvCodeByIp(){
	initProvCodeByIp();
	return getProvCode(cur_prov_code);
}

//初始化省份数据
function initProvCode(){
	initProvCodeByUrl();//第一步：按URL地址初始化
	if(getProvCode(cur_prov_code) == "000"){
		initProvCodeByCookie();//第二步：按Cookie初始化
	}
	if(getProvCode(cur_prov_code) == "000"){
		initProvCodeByIp();//第三步：按IP初始化
	}
}


//获取当前登录省份三位代码
function getCurProvCode(){
	initProvCode();
	return getProvCode(cur_prov_code);
}

//获取当前登录省份两位简称
function getCurProvBrief(){
	initProvCode();
	return getProvBrief(cur_prov_code);
}

//获取当前登录省份名称
function getCurProvName(){
	initProvCode();
	return getProvName(cur_prov_code);
}

//获取当前登录省份三位代码，默认北京
function getCurProvCode2(){
	var rv = "";
	initProvCode();
	if(getProvCode(cur_prov_code) == "000"){
		rv = default_prov[0];
	} else {
		rv = getProvCode(cur_prov_code);
	}
	return rv;
}

//获取当前登录省份两位简称，默认北京
function getCurProvBrief2(){
	var rv = "";
	initProvCode();
	if(getProvCode(cur_prov_code) == "000"){
		rv = default_prov[1];
	} else {
		rv = getProvBrief(cur_prov_code);
	}
	return rv;
}

//获取当前登录省份名称，默认北京
function getCurProvName2(){
	var rv = "";
	initProvCode();
	if(getProvCode(cur_prov_code) == "000"){
		rv = default_prov[2];
	} else {
		rv = getProvName(cur_prov_code);
	}
	return rv;
}


/**
 * Created by stt on 2015/12/16 0016.
 */
//判断横屏竖屏幕

if(isMobile()){
    (function(){
        var supportOrientation=(typeof window.orientation == "number" && typeof window.onorientationchange == "object");

        var updateOrientation=function(){
            if(supportOrientation){
                updateOrientation=function(){
                    var orientation=window.orientation;
                    switch(orientation){
                        case 90:
                        case -90:
                            orientation="landscape";
                            break;
                        default:
                            orientation="portrait";
                    }
                    if(orientation=="landscape"){

                        if($(window).outerWidth(true)>768){
                            $('.btns a').css({width: "85px", left: "50%"});
                        }else{
                            $('.btns a').css({ width: "100%",left: "0%"});
                        }
                    }else{
                        $('.btns a').css({ width: "100%",left: "0%"});
                    }

                    //$(".yhgundong").css({"position": "absolute", "left": "0px", "width": length * g_distance});
                };
            }else{
                updateOrientation=function(){
                    var orientation=(window.innerWidth > window.innerHeight)? "landscape":"portrait";
                    if(orientation=="landscape"){

                        if($(window).outerWidth(true)>768){
                            $('.btns a').css({width: "85px", left: "50%"});
                        }else{
                            $('.btns a').css({ width: "100%",left: "0%"});
                        }

                    }else{

                        $('.btns a').css({ width: "100%",left: "0%"});
                    }

                    //$(".yhgundong").css({"position": "absolute", "left": "0px", "width": length * g_distance});
                };
            }
            updateOrientation();
        };

        var init=function(){
            updateOrientation();
            if(supportOrientation){
                window.addEventListener("orientationchange",updateOrientation,false);
            }else{
                // window.setInterval(updateOrientation,5000);
                updateOrientation();
            }
        };

        if (typeof document.addEventListener != "undefined") {
            window.addEventListener("DOMContentLoaded",init,false);
        } else {
            document.attachEvent("DOMContentLoaded",init);
        }
        $(window).resize(function () {
            init();
        });

    })();
}



