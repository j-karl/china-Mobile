/**
 * Created by stt on 2016/1/20 0020.
 */
//数据加载开始


//紧急公告
if (json606.length > 0) {
    var $jjgg = $(".jjgg a");
    $jjgg.attr("href", $('<span />').html(json606[0].href).text());
    $jjgg.html($('<span/>').html(json606[0].name).text());
    $jjgg.attr("divCode","INDEX_JJGG");
    $jjgg.on("click",function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event',$(this).attr("divCode"));}});
    $(".jjgg").css("display", "block");
}

//优惠促销区
for (var i = 0; i < json610.length; i++) {
    if (json610[i].src != null) {
        var name = $('<span/>').html(json610[i].name).text();
        var details = $('<span/>').html(json610[i].details).text();
        var alt = $('<span/>').html(json610[i].alt).text();
        var href = $('<span/>').html(json610[i].href).text();
        var src = $('<span/>').html(json610[i].src).text();


        var element = $('<div class="indexbox"><a target="_blank" href="#" class="lianjie1"><h1>像充话费一样充流量</h1><h2>流量直充 限时7折特惠</h2></a><a target="_blank" href="#" class="lianjie2"><img title="流量直充 限时7折特惠" src="../images/index/yhcx1.jpg" class="indeximg"></a></div>');
        var $yhcxA = element.find("a");
        $yhcxA.attr("href", href);
        $yhcxA.attr("target","_blank");
        $yhcxA.attr("divCode","INDEX_YHCX_"+(i+1)+"_"+CmLocation);
        $yhcxA.on("click",function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event',$(this).attr("divCode"));}});
        element.find("h1").html(name);
        element.find("h2").html(details);
        element.find("a:eq(1) img").attr({"title": alt, "alt": alt, "src": src});
        $("#yhgundong").append(element);
    }
}

//4G专区json 属性：name栏目名、title及alt；href链接地址；src图片地址；details优惠购机介绍内容，用<p></p>分隔；price优惠购机价格
if (window.location.href.indexOf("/xj/") == -1) {
    $(".fourg .indextitle a").attr("href", $('<span/>').html(json611[0].href).text());
    $(".fourg .indextitle a").attr("divCode","INDEX_4G_CKGD_"+CmLocation);
	$(".fourg .indextitle a").on("click",function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event',$(this).attr("divCode"));}});

    $(".fourg .titlepic a").attr("href", $('<span/>').html(json611[1].href).text());
    $(".fourg .titlepic a").attr("divCode","INDEX_4G_LEFT_"+CmLocation);
	$(".fourg .titlepic a").on("click",function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event',$(this).attr("divCode"));}});
    
    $(".fourg .titlepic img").attr({
        "src": "/images/index/300380.gif",
        "data-original": $('<span/>').html(json611[1].src).text(),
        "title": $('<span/>').html(json611[1].alt).text()
    });
    $(".fourg .titlepic img").addClass("lazy");

    for (var i = 2; i < json611.length; i++) {
        $("#indexboxcon_" + (i - 1) + " .lianjie1 h1").html($('<span/>').html(json611[i].name).text());
        $("#indexboxcon_" + (i - 1) + " .lianjie1 h2").html($('<span/>').html(json611[i].details).text());
        $("#indexboxcon_" + (i - 1) + " .lianjie1").attr("href", $('<span/>').html(json611[i].href).text());
        $("#indexboxcon_" + (i - 1) + " .lianjie1").attr("divCode","INDEX_4G_ZQ_" + (i-1) + "_"+CmLocation);
		$("#indexboxcon_" + (i - 1) + " .lianjie1").on("click",function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event',$(this).attr("divCode"));}});

        
        $("#indexboxcon_" + (i - 1) + " .lianjie2 .indeximg").attr({
            "src": "/images/index/220130.gif",
             "data-original": $('<span/>').html(json611[i].src).text(),
            "title": $('<span/>').html(json611[i].alt).text()
        });
        $("#indexboxcon_" + (i - 1) + " .lianjie2 .indeximg").addClass("lazy");
        $("#indexboxcon_" + (i - 1) + " .lianjie2").attr("href", $('<span/>').html(json611[i].href).text());
        $("#indexboxcon_" + (i - 1) + " .lianjie2").attr("divCode","INDEX_4G_ZQ_" + (i-1) + "_"+CmLocation);
		$("#indexboxcon_" + (i - 1) + " .lianjie2").on("click",function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event',$(this).attr("divCode"));}});

    }
}else{
    $(".fourg").hide();
}
//买手机数据添加
var pre = "http://shop.10086.cn/";
$(".buyphone .indextitle a").attr("href", $('<span/>').html(json612[0].href).text());
$(".buyphone .indextitle a").attr("divCode","INDEX_MSJ_CKGD_"+CmLocation);
$(".buyphone .indextitle a").on("click",function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event',$(this).attr("divCode"));}});

// 准备自动同步价格所需数据
var bSyncPrice = false; // 是否存在必须要同步的价格信息
var arrSyncList = new Array(); // 需要同步的价格区域列表
var goodsSkuId = ""; // 价格查询参数
arrSyncList[0] = false;

for (var i = 1; i < json612.length; i++) {

	var cmPrice = json612[i].cmPrice;
	
	if(cmPrice != null && 0 <= cmPrice.indexOf("goodsId") && 0 <= cmPrice.indexOf("skuId")) {
		cmPrice = cmPrice.replace("<","");
		cmPrice = cmPrice.replace(">","");
		goodsSkuId += "_" + encodeURIComponent(cmPrice);
		
		arrSyncList[i] = true;
		bSyncPrice = true;
	}
	else {
		goodsSkuId += "_"
		arrSyncList[i] = false;
	}
	
}

function drawPrice(jsonData) {
	
	
	var i;
	
	for (i=1;i<jsonData.priceData.length;i++) {
		if (arrSyncList[i]) {
			$(".buyphone .indexbox:eq(" + (i - 1) + ") p").html(jsonData.priceData[i].cmPriceInterface);
		}
	}
	

	
}


if (bSyncPrice) { // 同步价格数据
	
		var hostname = "www1.10086.cn";

		var ajaxurlTable;
		ajaxurlTable = "http://" + hostname + "/service/homepageprice/homepageprice.jsp?mcmsPrice=" + goodsSkuId;

		$.ajax({
		url: ajaxurlTable,
		dataType: "jsonp",
		jsonpCallback: "jsoncallback",
		success:
			function(jsonData){
				
				drawPrice(jsonData);
	  
			}
	  
		});


	
}


for (var i = 1; i < json612.length; i++) {
    if (json612[i].href != null && json612[i].href.toLowerCase().indexOf("http://") == 0) {
        pre = "";
    }
    else {
        pre = "http://shop.10086.cn/";
    }
    var name = $('<span/>').html(json612[i].name).text();
    var details = $('<span/>').html(json612[i].details).text();
    name = $('<span/>').html(name).text();
    details = $('<span/>').html(details).text();
    var price = $('<span/>').html(json612[i].price).text();
    var cmPrice = $('<span/>').html(json612[i].cmPrice).text();
    var href = $('<span/>').html(pre + json612[i].href).text();
    var phoneIcon = $('<span/>').html(json612[i].phoneIcon).text();

    $(".buyphone .indexbox:eq(" + (i - 1) + ") a").attr("href", href);
    $(".buyphone .indexbox:eq(" + (i - 1) + ") a").attr("divCode","INDEX_MSJ_SJ" + i + "_"+CmLocation);
		$(".buyphone .indexbox:eq(" + (i - 1) + ") a").on("click",function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event',$(this).attr("divCode"));}});

    $(".buyphone .indexbox:eq(" + (i - 1) + ") h2").html(name);
    $(".buyphone .indexbox:eq(" + (i - 1) + ") h3").html(details);
    
    if (price != null && price.length != "") {
    	$(".buyphone .indexbox:eq(" + (i - 1) + ") span").html(price);
    }
    
    if (! arrSyncList[i]) {
    	$(".buyphone .indexbox:eq(" + (i - 1) + ") p").html(cmPrice);
  	}
    
    
    
    $(".buyphone .indexbox:eq(" + (i - 1) + ") img").attr({
        "src": "/images/index/220265.gif",
        "data-original": $('<span/>').html(json612[i].src).text(),
        "title": $('<span/>').html(json612[i].alt).text()
    });
    $(".buyphone .indexbox:eq(" + (i - 1) + ") img").addClass("lazy");

    if (json612[i].phoneIcon == null) {
        $(".buyphone .indexbox:eq(" + (i - 1) + ") " + ".buyphonejb0" + i).hide();
    } else {
        $(".buyphone .indexbox:eq(" + (i - 1) + ") " + ".buyphonejb0" + i).html(phoneIcon);
    }
}
//业务推荐数据添加
$(".ywtj .indextitle a").attr("href", $('<span/>').html(json613[0].href).text());
$(".ywtj .indextitle a").attr("divCode","INDEX_YWTJ_CKGD_"+CmLocation);
$(".ywtj .indextitle a").on("click",function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event',$(this).attr("divCode"));}});
$(".ywtj .titlepic a").attr("href", $('<span/>').html(json613[1].href).text());
$(".ywtj .titlepic a").attr("divCode","INDEX_YWTJ_LEFT_"+CmLocation);
$(".ywtj .titlepic a").on("click",function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event',$(this).attr("divCode"));}});

$(".ywtj .titlepic img").attr({
    "src": "/images/index/300380.gif",
    "data-original": $('<span/>').html(json613[1].src).text(),
    "title": $('<span/>').html(json613[1].alt).text()
});
$(".ywtj .titlepic img").addClass("lazy");

for (var i = 2; i < json613.length; i++) {
    $("#ywtj_" + (i - 1) + " .lianjie1 h1").html($('<span/>').html(json613[i].name).text());
    $("#ywtj_" + (i - 1) + " .lianjie1 h2").html($('<span/>').html(json613[i].details).text());
    $("#ywtj_" + (i - 1) + " .lianjie1").attr("href", $('<span/>').html(json613[i].href).text());
    $("#ywtj_" + (i - 1) + " .lianjie1").attr("divCode","INDEX_YWTJ_" + (i-1) + "_"+CmLocation);
	$("#ywtj_" + (i - 1) + " .lianjie1").on("click",function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event',$(this).attr("divCode"));}});

    $("#ywtj_" + (i - 1) + " .lianjie2 .indeximg").attr({
        "src": "/images/index/220130.gif",
        "data-original": $('<span/>').html(json613[i].src).text(),
        "title": $('<span/>').html(json613[i].alt).text()
    });
    $("#ywtj_" + (i - 1) + " .lianjie2 .indeximg").addClass("lazy");
    
    $("#ywtj_" + (i - 1) + " .lianjie2").attr("href", $('<span/>').html(json613[i].href).text());
	$("#ywtj_" + (i - 1) + " .lianjie2").attr("divCode","INDEX_YWTJ_" + (i-1) + "_"+CmLocation);
	$("#ywtj_" + (i - 1) + " .lianjie2").on("click",function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event',$(this).attr("divCode"));}});

}
//公告
for (var i = 0; i < json603.length; i++) {
    var decodeName = $('<span/>').html(json603[i].name).text();
    var decodeHref = $('<span/>').html(json603[i].href).text();
    var decodeDate = $('<span/>').html(json603[i].date).text();
    $(".indexgg ul li:eq(" + i + ") a").attr({"title": decodeName, "href": decodeHref});
    $(".indexgg ul li:eq(" + i + ") a").html(decodeName);
    $(".indexgg ul li:eq(" + i + ") span").html(decodeDate);
    
    if (i == 0) {
    	$(".indexgg ul li:eq(" + i + ") a").attr("divCode","INDEX_GG_Z1_"+CmLocation);
    }
    else if (i == 1) {
    	$(".indexgg ul li:eq(" + i + ") a").attr("divCode","INDEX_GG_Z2_"+CmLocation);
    }
    else if (i == 2) {
    	$(".indexgg ul li:eq(" + i + ") a").attr("divCode","INDEX_GG_y1_"+CmLocation);
    }
    else {
    	$(".indexgg ul li:eq(" + i + ") a").attr("divCode","INDEX_GG_y2_"+CmLocation);
    }
	$(".indexgg ul li:eq(" + i + ") a").on("click",function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event',$(this).attr("divCode"));}});

}

//辅助需求导航区
for (var i = 0; i < json604.length; i++) {
    $(".index-help .help_list:eq(" + i + ") h2 span").html($('<span/>').html(json604[i][0].name).text());
    if (json604[i][0].hotImg != "null") {
        var HotImg = $('<img>');
        HotImg.attr("class", "serviceHotImg");
        HotImg.attr("src", json604[i][0].hotImg);
        $(".index-help .help_list:eq(" + i + ") h2").append(HotImg);
    }
    for (var j = 1; j < json604[i].length; j++) {

        $(".index-help .help_list:eq(" + i + ") .linkgroup a:eq(" + (j - 1) + ")").attr("href", $('<span/>').html(json604[i][j].href).text());
        $(".index-help .help_list:eq(" + i + ") .linkgroup a:eq(" + (j - 1) + ")").attr("divCode","INDEX_SE_FZXQ" + (i+1) + "_" + j + "_"+CmLocation);
		$(".index-help .help_list:eq(" + i + ") .linkgroup a:eq(" + (j - 1) + ")").on("click",function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event',$(this).attr("divCode"));}});

        var name = $('<span/>').html(json604[i][j].name).text();
        $(".index-help .help_list:eq(" + i + ") .linkgroup a:eq(" + (j - 1) + ")").html(name);
        if (json604[i][j].hotImg != "null") {
            var HotImg = $('<img>');
            HotImg.attr("class", "serviceHotImg");
            HotImg.attr("src", json604[i][j].hotImg);
            $(".index-help .help_list:eq(" + i + ") .linkgroup a:eq(" + (j - 1) + ")").append(HotImg);
        }
    }
}

//在线客服

if(json605.length>0){
    $("#rfu .cjwt a").attr("href",$('<span/>').html(json605[0].href).text());
    $("#rfu .cjwt a").attr("divCode","INDEX_ZXKF_ZXZX_"+CmLocation);
	$("#rfu .cjwt a").on("click",function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event',$(this).attr("divCode"));}});
    $("#rfu .zxzx a").attr("href",$('<span/>').html(json605[1].href).text());
    $("#rfu .zxzx a").attr("divCode","INDEX_ZXKF_CJWT_"+CmLocation);
	$("#rfu .zxzx a").on("click",function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event',$(this).attr("divCode"));}});
    $("#rfu .tsjy a").attr("href",$('<span/>').html(json605[2].href).text());
    $("#rfu .tsjy a").attr("divCode","INDEX_ZXKF_TSJY_"+CmLocation);
	$("#rfu .tsjy a").on("click",function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event',$(this).attr("divCode"));}});

}


$("img.lazy").lazyload();



































