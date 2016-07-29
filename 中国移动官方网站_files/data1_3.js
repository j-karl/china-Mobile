/**
 * Created by stt on 2016/1/20 0020.
 */
//数据加载开始

//直达移动商城
var CmLocation = getProvCity();
if (!isMobile()) {
    var $shopT = $(".shopclass h1 a");
    $shopT.attr("href", $('<span/>').html(json607[0][0].href).text());
    $shopT.html($('<span/>').html(json607[0][0].name).text());
    $shopT.attr("divCode","INDEX_ZDH_ZDYDSC_"+CmLocation+"");
    $shopT.on("click",function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event',$(this).attr("divCode"));}});

    for (var i = 1; i < json607[0].length; i++) {
        var $shopA = $(".shopclass ul li").eq(i - 1).find("a");
        $shopA.html($('<span/>').html(json607[0][i].name).text());
        $shopA.attr("href", $('<span/>').html(json607[0][i].href).text());


        if(i==1){
            $shopA.attr("divCode","INDEX_ZDH_L_BUYSJ_"+CmLocation+"");
            $shopA.on("click",function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event',$(this).attr("divCode"));}});
        }else if(i==2){
            $shopA.attr("divCode","INDEX_ZDH_L_BTC_"+CmLocation+"");
            $shopA.on("click",function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event',$(this).attr("divCode"));}});
        }else if(i==3){
            $shopA.attr("divCode","INDEX_ZDH_L_BYW_"+CmLocation+"");
            $shopA.on("click",function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event',$(this).attr("divCode"));}});
        }else if(i==4){
            $shopA.attr("divCode","INDEX_ZDH_L_TPJ_"+CmLocation+"");
            $shopA.on("click",function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event',$(this).attr("divCode"));}});
        }else{
            $shopA.attr("divCode","INDEX_ZDH_L_GRZX_"+CmLocation+"");
            $shopA.on("click",function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event',$(this).attr("divCode"));}});
        }
    }
}



//主广告轮播图
for (var i = 0; i < json600.length; i++) {
    var decodeSrc = $('<span/>').html(json600[i].src).text();
    var decodeName = $('<span/>').html(json600[i].name).text();
    var decodeHref = $('<span/>').html(json600[i].href).text();

    var point = $('<li class="" data-target="#carousel-example-captions" data-slide-to=' + i + ' title=""></li>');
    point.attr("title", decodeName);

    var imagesDiv = $('<div class="item"><a href="#"><img data-holder-rendered="true" title="" src="" data-src="holder.js/900x500/auto/#777:#777" alt=""></a></div>');
    imagesDiv.find("a").attr("href", decodeHref);
    imagesDiv.find("a").attr("divCode","INDEX_AD_"+i+"_"+CmLocation);
    imagesDiv.find("a").on("click",function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event',$(this).attr("divCode"));}});
    imagesDiv.find("img").attr({"title": decodeName,"alt": decodeName,"src": decodeSrc});
    if (i == 0) {
        point.addClass("active");
        imagesDiv.addClass("active");
    }
    $(".banner ol").append(point);
    $(".banner .carousel-inner").append(imagesDiv);
}


//快捷服务区
if (json601.length > 0) {
    var cz_sbtn = document.getElementById("cz_sbtn");
    if (!document.all || document.documentMode >= 8) {
        cz_sbtn.onclick = function () {
            fun_czsubmit2();
        };
    } else {
        cz_sbtn.onclick = function () {
            fun_czsubmit2();
        };
    }

    $(".czjf a").attr("href", $('<span/>').html(json601[1][2].href).text());
	$(".czjf a").attr("divCode","INDEX_CZJF_" + CmLocation);
	$(".czjf a").click(function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event',$(this).attr("divCode"));}});

    var styleContent = "";

    for (var i = 0; i < json601.length; i++) {
        if (i == 0) {
            for (var j = 0; j < 12; j++) {
                styleContent += ".quickbtn .btns a.q" + j + "{background:url(" + json601[i][j].smallIcon + ") no-repeat center 15px;}";
                styleContent += ".quickbtn .btns a.q" + j + ":hover{background:url(" + json601[i][j].bigIcon + ") no-repeat center 15px;}";
            }
        }
    }
    var doc = document;
    var style = doc.createElement("style");
    style.setAttribute("type", "text/css");

    if (style.styleSheet) {// IE
        style.styleSheet.cssText = styleContent;
    } else {
        var cssText = doc.createTextNode(styleContent);
        style.appendChild(cssText);
    }

    var heads = doc.getElementsByTagName("head");
    if (heads.length)
        heads[0].appendChild(style);
    else
        doc.documentElement.appendChild(style);


    for (var i = 0; i < json601.length; i++) {
        if (i == 0) {
            for (var j = 0; j < 6; j++) {
                $("#kuaijiefuwu_" + j + "").text(json601[i][j].name);
                var liService = document.getElementById("kjfw_" + j + "");
                if (json601[i][j].type != 0) {
                    var divMark = document.createElement("div");
                    divMark.className = "xtip";

                    liService.appendChild(divMark);

                    switch (json601[i][j].type) {
                        case '1':
                            divMark.innerHTML = "惠";
                            break;
                        case '2':
                            divMark.innerHTML = "促";
                            break;
                        case '3':
                            divMark.innerHTML = "折";
                            break;
                        case '4':
                            divMark.innerHTML = "新";
                            break;
                        case '5':
                            divMark.innerHTML = "抢";
                            break;
                        case '6':
                            divMark.innerHTML = "热";
                            break;
                        case '7':
                            divMark.innerHTML = "秒";
                            break;
                        case '8':
                            divMark.innerHTML = "降";
                            break;
                        case '9':
                            divMark.innerHTML = "荐";
                            break;
                        default:
                            divMark.innerHTML = "送";
                    }
                }
            }
        } else {
            for (var j = 0; j < json601[i].length; j++) {
                if (j == 0) {

                    var pArr = new Array();
                    pArr = json601[i][j].href.split(",");
                    var insselect = document.getElementById("insselect");
                    var length = "";
                    if (pArr[pArr.length - 1] != "") {
                        length = pArr.length;
                    } else {
                        length = pArr.length - 1;
                    }

                    for (var k = 0; k < length; k++) {
                        var ahref = document.createElement("a");
                        if (k == 1) {
                            ahref.className = "on";
                            document.getElementById("cz_val").value = pArr[k];

                            rebate('' + pArr[k] + '');
                        }
                        ahref.id = "cz" + pArr[k] + "";
                        if (!document.all || document.documentMode >= 8) {
                            ahref.setAttribute("onclick", "fun_update_samount(" + (pArr[k]) + ");");
                        } else {

                            ahref.cz_val = pArr[k];
                            ahref.onclick = function () {
                                if (window.event) {
                                    var myObj = window.event.srcElement
                                    fun_update_samount(myObj.cz_val);
                                }
                            };
                        }
                        ahref.innerHTML = "" + pArr[k] + "元";
                        ahref.href = "javascript:void(0);"
                        insselect.appendChild(ahref);
                    }

                } else if (j == 1) {
                    if ((json601[i][j].href.indexOf("http") == 0) || (json601[i][j].href.indexOf("https") == 0) || (json601[i][j].href.indexOf("ftp") == 0)) {
                        var insselect = document.getElementById("insselect");
                        var ahref = document.createElement("a");
                        ahref.id = "cz0";
                        if (!document.all || document.documentMode >= 8) {
                            ahref.setAttribute("onclick", "fun_update_samount(0);");
                        } else {

                            ahref.onclick = function () {
                                fun_update_samount(0);
                            };
                        }
                        ahref.innerHTML = "其他";
                        ahref.href = $('<span/>').html(json601[i][j].href).text();
                        insselect.appendChild(ahref);
                    }
                }
            }
        }
    }
}


//判断是否是移动设备
function isMobile() {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        return true;
    }
    else {
        return false;
    }
}

var temp = 0;

function kaijieChama () {
	if(typeof(_tag)!= 'undefined') {_tag.dcsMultiTrack('WT.event',$(this).attr("divCode"));}
}

$(document).ready(function () {

    // 初始url
    $('#kuaijiefuwu_0').attr("divCode","INDEX_HFCX_"+CmLocation);
    $('#kuaijiefuwu_1').attr("href", $('<span/>').html(json601[0][1].href).text());
    $('#kuaijiefuwu_1').attr("divCode","INDEX_LLCX_"+CmLocation);
	$('#kuaijiefuwu_1').click(kaijieChama);
    $('#kuaijiefuwu_2').attr("href", $('<span/>').html(json601[0][2].href).text());
    $('#kuaijiefuwu_2').attr("divCode","INDEX_ZFZQ_"+CmLocation);
	$('#kuaijiefuwu_2').click(kaijieChama);
    $('#kuaijiefuwu_3').attr("href", $('<span/>').html(json601[0][3].href).text());
    $('#kuaijiefuwu_3').attr("divCode","INDEX_JFDH_"+CmLocation);
	$('#kuaijiefuwu_3').click(kaijieChama);
    $('#kuaijiefuwu_4').attr("href", $('<span/>').html(json601[0][4].href).text());
    $('#kuaijiefuwu_4').attr("divCode","INDEX_YHCX_"+CmLocation);
	$('#kuaijiefuwu_4').click(kaijieChama);
    $('#kuaijiefuwu_5').attr("href", $('<span/>').html(json601[0][5].href).text());
    $('#kuaijiefuwu_5').attr("divCode","INDEX_YWBL_"+CmLocation);


    $('#kuaijiefuwu_0').click(function () {
		
		if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event',$(this).attr("divCode"));}

        if (temp == 0) {
            $('.btns a').html("");
            $('.xtip').hide();
            if (!isMobile()) {
                $('.btns a').animate({width: "0px", left: "100%"}, 250, function () {
                    bbn()
                });
                $('.btns a').animate({width: "85px", left: "50%"}, 250, function () {
                    temp = 1;
                });
            } else {
                if ($(window).outerWidth(true) > 768) {
                    $('.btns a').animate({width: "0px", left: "100%"}, 250, function () {
                        bbn()
                    });
                    $('.btns a').animate({width: "85px", left: "50%"}, 250, function () {
                        temp = 1;
                    });
                } else {
                    $('.btns a').animate({width: "0px", left: "50%"}, 250, function () {
                        bbn();
                    });
                    $('.btns a').animate({width: "100%", left: "0%"}, 250, function () {
                        temp = 1;
                    });

                }
                //$('.btns a').animate({ width: "0px",left: "50%"}, 250,function(){bbn();});
                //$('.btns a').animate({ width: "100%",left: "0%"}, 250,function(){temp=1;});
            }
	        setTimeout(function () {
	            $('#kuaijiefuwu_0').html(json601[0][6].name).attr("href", $('<span/>').html(json601[0][6].href).text()).css('overflow', 'visible');
	            $('#kuaijiefuwu_1').html(json601[0][7].name).attr("href", $('<span/>').html(json601[0][7].href).text()).css('overflow', 'visible');
	            $('#kuaijiefuwu_2').html(json601[0][8].name).attr("href", $('<span/>').html(json601[0][8].href).text()).css('overflow', 'visible');
	            $('#kuaijiefuwu_3').html(json601[0][9].name).attr("href", $('<span/>').html(json601[0][9].href).text()).css('overflow', 'visible');
	            $('#kuaijiefuwu_4').html(json601[0][10].name).attr("href", $('<span/>').html(json601[0][10].href).text()).css('overflow', 'visible');
	            $('#kuaijiefuwu_5').html(json601[0][11].name).css('overflow', 'visible');
	        }, 500);

        }
    });


    $('#kuaijiefuwu_5').click(function () {

		if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event',$(this).attr("divCode"));}

        if (temp == 1) {
            $('.btns a').html("");

            if (!isMobile()) {
                $('.btns a').animate({width: "0px", left: "100%"}, 250, function () {
                    ccn();
                });
                $('.btns a').animate({width: "85px", left: "50%"}, 250, function () {
                    temp = 0;
                });
            } else {
                if ($(window).outerWidth(true) > 768) {
                    $('.btns a').animate({width: "0px", left: "100%"}, 250, function () {
                        ccn();
                    });
                    $('.btns a').animate({width: "85px", left: "50%"}, 250, function () {
                        temp = 0;
                    });
                } else {
                    $('.btns a').animate({width: "0px", left: "50%"}, 250, function () {
                        ccn();
                    });
                    $('.btns a').animate({width: "100%", left: "0%"}, 250, function () {
                        temp = 0;
                    });

                }


            }

	        setTimeout(function () {
	            $('#kuaijiefuwu_0').html(json601[0][0].name).css('overflow', 'visible');
	            $('#kuaijiefuwu_1').html(json601[0][1].name).attr("href", $('<span/>').html(json601[0][1].href).text()).css('overflow', 'visible');
	            $('#kuaijiefuwu_2').html(json601[0][2].name).attr("href", $('<span/>').html(json601[0][2].href).text()).css('overflow', 'visible');
	            $('#kuaijiefuwu_3').html(json601[0][3].name).attr("href", $('<span/>').html(json601[0][3].href).text()).css('overflow', 'visible');
	            $('#kuaijiefuwu_4').html(json601[0][4].name).attr("href", $('<span/>').html(json601[0][4].href).text()).css('overflow', 'visible');
	            $('#kuaijiefuwu_5').html(json601[0][5].name).attr("href", $('<span/>').html(json601[0][5].href).text()).css('overflow', 'visible');
	            $('.xtip').show();
	        }, 500);

        }
    });

});

function bbn() {
    var strprovcity = getProvCity(); // 获得省市代码

    $("#kuaijiefuwu_0").removeClass("q0").addClass("q6");
    $("#kuaijiefuwu_0").attr("target", "_blank");
    $("#kuaijiefuwu_0").attr("divCode","INDEX_HFCX_YECX_" + strprovcity);
    $("#kuaijiefuwu_0").attr("href", "#");
    $("#kuaijiefuwu_1").removeClass("q1").addClass("q7");
    $("#kuaijiefuwu_1").attr("divCode","INDEX_HFCX_TCYL_" + strprovcity);
    $("#kuaijiefuwu_1").attr("href", "#");
    $("#kuaijiefuwu_2").removeClass("q2").addClass("q8");
    $("#kuaijiefuwu_2").attr("divCode","INDEX_HFCX_ZDCX_" + strprovcity);
    $("#kuaijiefuwu_2").attr("href", "#");
    $("#kuaijiefuwu_3").removeClass("q3").addClass("q9");
    $("#kuaijiefuwu_3").attr("divCode","INDEX_HFCX_XDCX_" + strprovcity);
    $("#kuaijiefuwu_3").attr("href", "#");
    $("#kuaijiefuwu_4").removeClass("q4").addClass("q10");
    $("#kuaijiefuwu_4").attr("divCode","INDEX_HFCX_DGYW_" + strprovcity);
    $("#kuaijiefuwu_4").attr("href", "#");
    $("#kuaijiefuwu_5").removeClass("q5").addClass("q11");
    $("#kuaijiefuwu_5").attr("divCode","INDEX_HFCX_FH_" + strprovcity);
    $("#kuaijiefuwu_5").attr("target","");
    $("#kuaijiefuwu_5").attr("href", "javascript:void(0)");
}

function ccn() {
    var strprovcity = getProvCity(); // 获得省市代码

    $("#kuaijiefuwu_0").removeClass("q6").addClass("q0");
    $("#kuaijiefuwu_0").attr("divCode","INDEX_HFCX_" + strprovcity);
    $("#kuaijiefuwu_0").attr("target","");
    $("#kuaijiefuwu_0").attr("href", "javascript:void(0)");
    $("#kuaijiefuwu_1").removeClass("q7").addClass("q1");
    $("#kuaijiefuwu_1").attr("divCode","INDEX_LLCX_" + strprovcity);
    $("#kuaijiefuwu_1").attr("href", "#");
    $("#kuaijiefuwu_2").removeClass("q8").addClass("q2");
    $("#kuaijiefuwu_2").attr("divCode","INDEX_ZFZQ_" + strprovcity);
    $("#kuaijiefuwu_2").attr("href", "#");
    $("#kuaijiefuwu_3").removeClass("q9").addClass("q3");
    $("#kuaijiefuwu_3").attr("divCode","INDEX_JFDH_" + strprovcity);
    $("#kuaijiefuwu_3").attr("href", "#");
    $("#kuaijiefuwu_4").removeClass("q10").addClass("q4");
    $("#kuaijiefuwu_4").attr("divCode","INDEX_YHCX_" + strprovcity);
    $("#kuaijiefuwu_4").attr("href", "#");
    $("#kuaijiefuwu_5").removeClass("q11").addClass("q5");
    $("#kuaijiefuwu_5").attr("divCode","INDEX_YWBL_" + strprovcity);
    $("#kuaijiefuwu_5").attr("target", "_blank");
    $("#kuaijiefuwu_5").attr("href", "#");
}

