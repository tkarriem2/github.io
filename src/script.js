var testMode = 0,
    maintMode = 0,
    devMode = 0,
    hrdCnt = 0,
    showAds = 0,
    availChat = 0,
    mdlConstruct = 0,
    drdly = 500;
var charAst = "#";
var updtLstUpdt = 0; //Change to 1 for DT Stamp change - Update lastupdate/vers in Data.js
var b, c, d, e, f, hostscp, dlpath, seq, srcPnlBtn;


$(document).ready(function () {
    //Initial Dom setup 
    document.title = resData.name + " - " + resData.title;
    hostscp = (window.location.pathname === resData.localpath) ? 0 : 1; //0 = Local, 1 = Ext
    resData.docPrefix = "MTKRes_" + getQtrYr(resData.currver) + "_v";
    $(['img/mtkres.png']).preload();
    //Maintainence Mode 
    if (maintMode > 0) {
        logui('Maintainence mode: ENABLED');
        $(['img/maintenance2.gif']).preload();
    }
    //Add Metatags to disable cache - Development Mode 
    if (devMode > 0) {
        logui("Dev Mode - No Caching enabled");
        $.each(devMdTgs, function (q, t) {
            $(t).appendTo(document.head);
        });
    }
    //Run Dev Tests
    !testMode < 1 ? runDevTests() : "";
    //getScrList();
    /*$(document).on('click', function (e) {
        logui($(e.target).text());
    });*/

    //Add Link tags for Favicon 
    $.each(hdrFavIco, function (h, x) {
        if (hostscp > 0 && _.includes(x, 'img' || 'cfg')) {
            var y = x.search('img') > 1 ? x.search('img') : x.search('cfg');
            var w = x.substr(0, y) + "" + window.location.href + "/" + x.substr(y);
            $(w).appendTo(document.head);
        } else {
            $(x).appendTo(document.head);
        }
    });

    // Set PreCache
    setSiteNfo();

    $('#mdl1').modal({
        dismissible: false,
        opacity: 0.5,
        inDuration: 500,
        outDuration: 150,
        startingTop: '5%',
        endingTop: '15%',
        ready: function (modal, trigger) {
            $(".dragHdr").drags({
                    handle: 'dragHdr'
                }),
                $(".dragHdr i").on('click', function () {
                    clsMdl();
                }),
                $('.dragHdr').css('z-index', parseInt($('#mdl1').css('z-index')) + 1),
                $(".mdlLbl1").text(mdlLblArr[mdlConstruct])
        },
        complete: function () {
                clsMdl();
            } // Callback for Modal close
    });

    //AdDiv element
    if (showAds === 0) {
        $("#ads-Section").hide();
        $("#docs-Section").addClass("push-s1 push-m2 push-l2");
    }
    //Template and JSON injections
    $('#hdrTitle').parent('a').attr('href', window.location.href);
    $('#mngPg').attr('href', mdlArrUris[3]);
    $('#hdrTitle span:nth-child(2), .prnNm').append(resData.name);
    $('#hdrTitle span:nth-child(3), .prnCrts').append(resData.subname);
    $('#contact1').append('<span itemprop="email">' + resData.email + '</span>');
    $("#contact1").on('click', function () {
        openWin("mailto:" + resData.email + "?subject=Re: Web Resume");
        return false;
    });
    $('#contact2').append('<span itemprop="telephone">' + resData.contact + '</span>');
    $("#caboose").append(resData.caboose);
    $('#copyr').append(resData.copyright);
    $('#copyr').find('a').attr('href', window.location.href);
    $("#btnUp").addClass('scale-transition scale-out');


    var hdrBtnsLi = $(".hdrBtn");
    $.each(hdrBtnsLi, function (o, p) {
        $(p).addClass("vertical-align font-sPlus");
        $(p).append('<span class="hide-on-small-only">' + btnLbls[o] + '</span>');
        if (o === 2) {
            $(mdlData.dropTmpl[0]).insertAfter(p);
            $(p).attr('id', 'drpDwnBtn');
        }
    });
    //Data Pop Start
    $.each(hdrsJSN, function (u, v) {
        var subStr = u; //Primary Hdr
        var subStr1 = v.split(","); //Secondary Hdrs Arr
        var preFx = subStr.substring(0, 4).toLowerCase();
        var artclId = strFx[2].concat(_.capitalize(preFx));
        var JSNstr = preFx.concat("JSN"); //JSON Article Data - Name String
        var getJSN = evl(JSNstr); //JSON Article Data - Object | Array
        var GetTmpl = [
            charAst.concat(preFx.concat(strFx[0])),
            "." + preFx.concat(strFx[1]),
            charAst.concat(artclId),
            charAst.concat(artclId + "-ul")
        ];
        $('#drpJmp').append(mdlData.dropTmpl[1].slice(0, -9) + subStr + mdlData.dropTmpl[1].slice(-9));

        //  Add Main Article Header & Dropdown, Scrollfire element 
        var artHdr = $(GetTmpl[2] + " .hdr4");
        artHdr.append(subStr);
        if (v) {
            var q = subStr1.length;
            _.times(q, function (k) {
                var subStr2 = subStr1[k].trim();
                var divId = GetTmpl[1].substring(1) + "-" + frmtDgt(k);
                var content = document.querySelector(GetTmpl[0]).content;
                content.querySelector(GetTmpl[1]).id = divId;
                document.querySelector(GetTmpl[2]).append(document.importNode(content, true));
                // Process Sub Hdrs
                var ulId = GetTmpl[3].substring(1).concat(frmtDgt(k));
                if ($(charAst.concat(divId)).data("hdr") === 1) {
                    //var path = getFlatObject(getJSN);
                    //console.log(path);
                    $(charAst.concat(divId)).append('<div class="hdr6 center-align font-mSmll">' + subStr2 + '</div>');
                    for (y = 0; y < getJSN.length; y++) {
                        var ulIdSft = GetTmpl[3].substring(1).concat(frmtDgt(y));
                        var hdr7Lst = [];
                        $.each(getJSN[k][y].items, function (m, l) {
                            hdr7Lst += '<li class="pint font-xsPlus" itemprop="itemListElement">' + l + '</li>';
                        });
                        $(charAst.concat(divId)).append('<div class="hdr7">' + getJSN[k][y].hdr + '</div><ul id="' + ulIdSft + '">' + hdr7Lst + '</ul>');
                    }
                } else {
                    $($(charAst.concat(divId))).append('<div class="hdr6">' + subStr2 + '</div><ul id="' + ulId + '"></ul>');
                    $(charAst.concat(ulId)).append(getUlData(getJSN, k));
                }
            });
        } //End Primary 'if' statement - 1
        switch (artclId) {
            case "hdrLate":
                var r = _.size(getJSN[0]);
                _.times(r, function (k) {
                    var divIdNm = GetTmpl[1].substring(1) + "-" + frmtDgt(k);
                    var divId = charAst.concat(divIdNm);
                    var content = document.querySelector(GetTmpl[0]).content;
                    content.querySelector(GetTmpl[1]).id = divIdNm;
                    document.querySelector(GetTmpl[2]).appendChild(document.importNode(content, true));
                    $(divId.concat(" .jobtitle")).append(getJSN[0][k].jobtitle);
                    $(divId.concat(" .jobcomp")).append(getJSN[0][k].jobcomp);
                    $(divId.concat(" .jobdate")).append(retDate(getJSN[0][k].empspan));
                    $(divId.concat(" .empsum")).append(getJSN[0][k].summary);
                    for (l = 0; l < _.size(getJSN[0][k].list); l++) {
                        $(divId.concat(" ul")).append("<li class='std font-s' itemprop='itemListElement'>" + getJSN[0][k].list[l] + "</li>");
                    }
                });
                break;
            case "hdrAccr":
                var accrId = charAst.concat(artclId);
                var accrEle = $(accrId + " .hdr7");
                var hdr7Arr = accrEle.toArray();
                _.map(accrJSN, function (k, c) {
                    $(hdr7Arr[hrdCnt]).append(c.trim());
                    $(hdr7Arr[hrdCnt]).attr("itemprop", strFx[3]);
                    if (k) {
                        var h = "";
                        $(hdr7Arr[hrdCnt]).addClass("strPnc");
                        if (hrdCnt == 3) h = "itemscope itemtype='http://schema.org/CollegeOrUniversity'";
                        if (k.indexOf(',') != -1) {
                            k = k.split(",");
                            var accrLst = [];
                            _.map(k, function (q) {
                                accrLst += ("<li itemprop='name'" + h + " class='pint'>" + q.trim() + "</li>");
                            });
                            $('<ul itemscope itemtype="http://schema.org/ItemList">' + accrLst + '</ul>').insertAfter($(hdr7Arr[hrdCnt]));
                        } else {
                            $("<ul itemscope itemtype='http://schema.org/ItemList'><li itemprop='name'" + h + " class='pint'>" + k.trim() + "</li></ul>").insertAfter($(hdr7Arr[hrdCnt]));
                        }
                    }
                    hrdCnt++;
                });
        } //End Switch
    }); //End Build HTML Each
    $('.hdr4').addClass('font-mPlus');
    $('.hdr6:not("#hdrSoft .hdr6")').addClass('font-m');
    $('.hdr7').addClass('font-s');
    $('#hdrSoft .hdr7').addClass('amber-text text-accent-4');
    $("#hdrAccr .col").closest(".strPnc").css("margin-bottom", "-0.25rem");

    $.each(othrJSN, function (s, w) {
        $('#othrHdr').append(s);
        var h = w.split(",");
        for (k = 0; k < h.length; k++) {
            $('#hdrOthr ul').append('<li class="font-s" itemprop="itemListElement">' + h[k].trim() + '</li>');
        }
    });
    //Pre-start functions
    truckStatus(availChat);
    //Bind MouseClick, Scroll and Animation functions
    var drpdwnA = $('#drpJmp a');
    $.each(drpdwnA, function (i, v) {
        $(v).attr('href', hdrHrefs[i]);
    });

    $('#drpDwnBtn').dropdown({
        inDuration: 300,
        outDuration: 300,
        constrainWidth: false,
        belowOrigin: true,
        alignment: 'left',
        stopPropagation: true
    });

    $('.hdrBtn').on('click', function () {
        if (!$(this).hasClass('focus')) {
            $(this).addClass('active focus');
            $(hdrBtnsLi).not(this).addClass("disabled");
            var y = $('.hdrBtn').index(this);
            switch (y) {
                case 0:
                    printJS(dlFile[1]);
                    $(hdrBtnsLi).removeClass("disabled active focus");
                    break;
                case 1:
                    return null;
                    break;
                case 2:
                    $(this).dropdown('open');
                    break;
                case 3:
                    openSrchPnl(y);
            }
        } else {
            $(hdrBtnsLi).removeClass("disabled active focus");
        }
    });

    $('.srchCnl').on('click', clsSrchPnl);

    $('#hdrSrchDiv1').on('click', function () {
        var o = $('#hdrSrchDiv1 input[type=text]').css('opacity');
        if (!o === 0) return null;
        $('#hdrSrchDiv1 input[type=text]').css('opacity', 1);
        $('#hdrSrchDiv1 label').removeClass('blue-text').addClass('green-text');
        this.focus();
    });

    $("#btnUp").on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var pgH = $(document).height();
        $("#docs-Section").velocity("scroll", {
            duration: 2000,
            offset: -pgH,
            easing: 'spring'
        });
    });

    $('#drpJmp li').on({
        mouseenter: function () {
            var target = $(this).find('a').attr('href');
            var offst = parseInt($(document).height() - ($(document).height() + ($('header').height() * 2)) + 13);
            $(target).velocity('scroll', {
                duration: 250,
                offset: offst,
                easing: 'spring'
            });
        },
        click: function () {
            if ($('#drpJmp').hasClass('active')) {
                $(".hdrBtn").removeClass("disabled active focus");
                $('#drpDwnBtn').dropdown('close');
            }
        },
    });

    $(".btnClose").on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).parent('div').hide();
        clsMdl();
    });

    $("#mngPg").on({
        mouseover: function (e) {
            e.preventDefault();
            e.stopPropagation();
            if ($(this).hasClass('velocity-animating')) return;
            $(this).velocity("transition.slideRightIn", {
                duration: 1000,
                easing: 'spring',
            }).velocity("reverse", {
                delay: 7500
            });
        },
        click: function () {
            $(this).velocity("transition.slideRightOut", 1000);
        }
    });

    //Add Tooltips  
    //addTlTps(); 
    //Add ScrollSpy
    $('article').addClass('scrollspy');
    $('.scrollspy').scrollSpy();

    //Post DomReady execution   
    var everythingLoaded = setInterval(function () {
        if (/loaded|complete/.test(document.readyState)) {
            clearInterval(everythingLoaded);
            seq = [
                {
                    e: $('header,footer'),
                    p: "transition.fadeIn",
                    o: {
                        duration: drdly,
                        delay: drdly,
                        easing: 'easeInOutBack'
                    }
                },
                {
                    e: $('.vwCvrLtr, article, #siteNfo, #docs-Section'),
                    p: 'fadeIn',
                    o: {
                        duration: drdly,
                        delay: drdly * 2,
                        easing: 'easeInQuint'
                    }
                },
                {
                    e: $('article li'),
                    p: 'transition.perspectiveDownIn',
                    o: {
                        stagger: 50,
                        duration: drdly,
                        delay: drdly * 2,
                        easing: 'easeIn'
                    }
                }
            ];
            setSocBtns();
        }
        $.Velocity.RunSequence(seq);
    });
    var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    logui('Page load time is ' + (loadTime / 1000) + "secs");
});
//Document Ready End ----------------------------------------------

$(document).on('click', function (e) {
    e = e || event;
    $.lastClicked = e.target || e.srcElement;
    var m = $($.lastClicked.parentElement).attr("data-modal");
    if (m) {
        if ($("#mdl1").hasClass(".open")) return;
        mdlConstruct = m.charAt(m.length - 1) - 1;
        if (hostscp > 0) {
            mdlConstruct = 2
        }
        $(".mdlLdCnt").load(mdlArrUris[mdlConstruct], function () {
            if (hostscp < 1) {
                $(".mdlLdCnt").find("h1").replaceWith("<br/>")
            };
            $("#mdl1").modal('open');
        });
    }
    if ($('#drpJmp').hasClass('active')) {
        $(".hdrBtn").removeClass("disabled active focus");
        $('#drpDwnBtn').dropdown('close');
    }
});

//Window functions
$(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
        $('#btnUp').addClass('scale-in');
    } else {
        $('#btnUp').removeClass('scale-in');
    }
});

window.onerror = function (message, url, line, column, error) {
    console.log(message, url, line, column, error);
};

function openWin(url) {
    window.open(url, "_blank", "toolbar=no, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=yes, width=400, height=400");
}
//--------------------------------------------------------
function clsMdl() {
    $('.mdlLdCnt').detach();
    $('#mdl1').modal('close');
    $(".hdrBtn").removeClass("disabled active focus");
}

function openSrchPnl() {
    $('.hdrBtn').velocity('transition.fadeOut', 1000);
    $('#hdrSrchDiv1').velocity("transition.bounceRightIn", 2000);
    $('#srchBtns').velocity('transition.fadeIn', 2500);
    $('#hdrSrchDiv1 label').removeClass('active');
}

function clsSrchPnl() {
    $('#docs-Section').removeHighlight();
    $('#hdrSrchDiv1 input[type=text]').css('opacity', 0);
    $('#hdrSrchDiv1 label').addClass('blue-text').removeClass('green-text active');
    $('#hdrSrchDiv1').velocity("transition.bounceRightOut", 1000);
    $(".hdrBtn").removeClass("disabled active focus");
    $('#srchBtns').velocity('transition.fadeOut', 2000);
    $('.hdrBtn').velocity('transition.fadeIn', 3000);
}

/*function dlLegal() {
    $("#mdl1 .dlbtn").on('click', function (e) {
        e.preventDefault();
        if (dlpath.length < 1) {
            dlpath = dlFile[$("input:radio[name='dlGrp1']").index($("input:radio[name='dlGrp1']").filter(':checked'))];
        }
        logui('Download agreement confirmed...');
        logui("Downloading: " + dlpath.substring(5));
        openWin(dlpath);
        $('#mdl1').modal('close');
    });
}*/

function setSocBtns() {
    var g = $('.soc a').toArray();
    $.each(socLinks, function (i, v) {
        $(g[i]).attr('href', v);
        if ((v.search("http") === 0) || (v.search("paypal.me") === 0)) {
            $(g[i]).attr({
                'target': '_blank',
                'rel': 'noopener'
            });
        }
    });
}

function runDevTests() {
    logui('DevTest mode: ENABLED');
    $.each(testScriptUrls, function (s) {
        $.getScript(s, function (data, textStatus, jqxhr) {
            console.log(data); // Data returned
            console.log(textStatus); // Success
            console.log(jqxhr.status); // 200
            console.log("Script loaded: " + s.split("/").pop());
        });
    });
    // Initialize tools
    HTMLInspector.inspect();
    window.addEventListener('load', function () {
        helium.init();
    }, 10);
}

// HTML Template Browser Check
function supportsTemplate() {
    return 'content' in document.createElement('template');
}
//Misc functions
function logui(msg, param) {
    switch (param) {
        case 0, undefined:
            console.log(msg);
            break;
        case 1:
            Materialize.toast(msg, 2500);
            console.log(msg);
    }
}

function evl(fn) {
    return new Function('return ' + fn)();
}

function retDate(datStr) {
    datArr = datStr.split("-");
    var datSpan = [];
    var sch = ["startDate", "endDate"];
    for (h = 0; h < _.size(datArr); h++) {
        var n = +(datArr[h].slice(0, 2));
        var s = mNms[n - 1].substring(0, 3);
        var g = (h < 1) ? " - " : "";
        datSpan += "<span class='pink-text text-accent-3' itemprop='" + sch[h] + "'>" + s.concat(" " + datArr[h].slice(2, 7) + "</span>" + g);
    }
    return datSpan;
}

function frmtDgt(n) {
    return n > 9 ? "" + n : "0" + n;
}

function truckStatus(cht) {
    if (cht > 0) {
        var t = $('#mozTghtr span');
        $(document).append(mdlData.truckBtn);
        logui("Chat is ON");
        $(t).addClass('yellow');
        $(t).text(btnLbls[5].toUpperCase());
    }
}
//JSON Parsers
function getUlData(jsnObj, objCnt) {
    var l = [];
    var o = ["std font-s", "pint font-xs"];
    if (objCnt === 'null' || objCnt === 'undefined') {
        $.each(jsnObj, function (v) {
            //logui("1 - " + v);
            l += '<li class="' + o[1] + '"itemprop="itemListElement">' + v + '</li>';
        });
    } else {
        if (_.isPlainObject(jsnObj[objCnt])) {
            $.each(jsnObj[objCnt], function (v) {
                //logui("2 - " + v);
                l += '<li class="' + o[1] + '"itemprop="itemListElement">' + v + '</li>';
            });
        } else {
            $.each(jsnObj[objCnt], function (v, k) {
                //logui("3 - " + k);
                l += '<li class="' + o[0] + '" itemprop="itemListElement">' + k + '</li>';
            });
        }
    }
    return l;
}

function getFlatObject(object) {
    function iter(o, p) {
        if (Array.isArray(o)) {
            o.forEach(function (a, i) {
                iter(a, p.concat(i));
            });
            return;
        }
        if (o !== null && typeof o === 'object') {
            Object.keys(o).forEach(function (k) {
                iter(o[k], p.concat(k));
            });
            return;
        }
        path[p.join('.')] = o;
    }
    var path = {};
    iter(object, []);
    return path;
}

function sessionCheck(isLogin) {
    var url = "bin/utilities.php";
    $.post(url, {
        method: "SessionCheck",
        isLogin: isLogin
    }, function (data) {
        if (data !== "") {
            if (data.search('.html') == -1) {
                $("html").html(data);
            } else {
                window.location.replace(data);
            }
        }
    });
}

function setSiteNfo() {
    var updtStr = resData.lastupdate;
    if (updtLstUpdt > 0) {
        logui('New "lastupdate" Date/Time created! Update Data.js Manually');
        updtStr = _.replace(_.replace(new Date(), "Pacific Daylight Time", "PDT"), "GMT", "UTC");
        logui(updtStr);
    }
    $('body').append('<ul id="siteNfo"></ul>');
    $('#siteNfo').append('<li><span>' + btnLbls[8] + ': </span> v' + resData.currver + ' (' + _.lowerCase(btnLbls[9]) + ')</li>');
    $('#siteNfo').append('<li><span>' + btnLbls[7] + ': </span> ' + updtStr + '</li>');
}

// CORS Request ---------------------------------------------------
function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}

function exeCORSReq() {
    var exeCORS = 0;
    var xhr = createCORSRequest('GET', url);
    xhr.onerror = function () {
        if (exeCORS == 1) {
            logui('error');
        }
    };
    xhr.onload = function () {
        if (exeCORS == 1) {
            logui('success');
        }
    };
    if (exeCORS == 1) {
        xhr.send();
    }
}

// Date Label Modifier 
function getQtrYr(qyr) {
    yr = qyr.slice(-4);
    mth = qyr.slice(0, (qyr.length - yr.length));
    qtr = parseInt(mth / 3) + 1;
    finstr = "Q" + qtr + yr;
    return finstr;
}
// Testing Functions
function propStopped(event, clkId) {
    if (event.isPropagationStopped()) {
        logui('eventPropagation stopped on: ' + clkId);
    } else {
        logui('Propagation not stopped');
    }
}
// Get JS script list
function getScrList() {
    var scriptList = $.each(document.scripts, function (x, y) {
        return y;
    });
    logui(scriptList);
}

function addTlTps() {
    var j = $('span').filter(function () {
        return $(this).children().length === 0;
    }).parent();
    $.each(j, function (i, v) {
        if (i > 0 && i < 5 || i > 16 && i < 19) {
            var t = (i > 16 && i < 19 || i === 3 ? "top" : "bottom");
            var s = $(v).find('span').text();
            $(v).addClass('tooltip');
            $(v).attr({
                'data-tooltip': s,
                'data-position': t
            });
        }
    });
    $('.tooltip').tooltip({
        delay: 50
    });
}

(function ($) {
    $.fn.drags = function (opt) {
        opt = $.extend({
            handle: "",
            cursor: "move"
        }, opt);
        if (opt.handle === "") {
            var $el = this;
        } else {
            var $el = this.find(opt.handle);
        }
        return $el.css('cursor', opt.cursor).on("mousedown", function (e) {
            if (opt.handle === "") {
                var $drag = $(this).addClass('draggable');
            } else {
                var $drag = $(this).addClass('active-handle').parent().addClass('draggable');
            }
            var z_idx = $drag.css('z-index'),
                drg_h = $drag.outerHeight(),
                drg_w = $drag.outerWidth(),
                pos_y = $drag.offset().top + drg_h - e.pageY,
                pos_x = $drag.offset().left + drg_w - e.pageX;
            $drag.css('z-index', 1000).parents().on("mousemove", function (e) {
                $('.draggable').offset({
                    top: e.pageY + pos_y - drg_h,
                    left: e.pageX + pos_x - drg_w
                }).on("mouseup", function () {
                    $(this).removeClass('draggable').css('z-index', z_idx);
                });
            });
            // e.preventDefault(); // disable selection
        }).on("mouseup", function () {
            if (opt.handle === "") {
                $(this).removeClass('draggable');
            } else {
                $(this).removeClass('active-handle').parent().removeClass('draggable');
            }
        });

    };
})(jQuery);

(function execWorker() {
    if (!window.location.protocol === 'https:') {
        console.log('LocalEnv - Service Workers Disabled');
        return null;
    }
    var worker = new Worker('./src/worker.js');
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./src/worker.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }).catch(function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    }

});

!(function ($) {
    $.fn.classes = function (callback) {
        var classes = [];
        $.each(this, function (i, v) {
            var splitClassName = v.className.split(/\s+/);
            for (var j = 0; j < splitClassName.length; j++) {
                var className = splitClassName[j];
                if (-1 === classes.indexOf(className)) {
                    classes.push(className);
                }
            }
        });
        if ('function' === typeof callback) {
            for (var i in classes) {
                callback(classes[i]);
            }
        }
        return classes;
    };
})(jQuery);

$(function () {
    $('#hdrSrch').on('keyup change', function (ev) {
        var searchTerm = $(this).val();
        $('#docs-Section').removeHighlight();
        if (searchTerm) {
            $('#docs-Section').highlight(searchTerm);
        }
    });
});

jQuery.fn.highlight = function (pat) {
    function innerHighlight(node, pat) {
        var skip = 0;
        if (node.nodeType == 3) {
            var pos = node.data.toUpperCase().indexOf(pat);
            if (pos >= 0) {
                var spannode = document.createElement('span');
                spannode.className = 'hilite';
                var middlebit = node.splitText(pos);
                var endbit = middlebit.splitText(pat.length);
                var middleclone = middlebit.cloneNode(true);
                spannode.appendChild(middleclone);
                middlebit.parentNode.replaceChild(spannode, middlebit);
                skip = 1;
            }
        } else if (node.nodeType == 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
            for (var i = 0; i < node.childNodes.length; ++i) {
                i += innerHighlight(node.childNodes[i], pat);
            }
        }
        return skip;
    }
    return this.each(function () {
        innerHighlight(this, pat.toUpperCase());
    });
};

jQuery.fn.preload = function () {
    this.each(function () {
        $('<img/>')[0].src = this;
    });
};


jQuery.fn.removeHighlight = function () {
    function newNormalize(node) {
        for (var i = 0, children = node.childNodes, nodeCount = children.length; i < nodeCount; i++) {
            var child = children[i];
            if (child.nodeType == 1) {
                newNormalize(child);
                continue;
            }
            if (child.nodeType != 3) {
                continue;
            }
            var next = child.nextSibling;
            if (next == null || next.nodeType != 3) {
                continue;
            }
            var combined_text = child.nodeValue + next.nodeValue;
            new_node = node.ownerDocument.createTextNode(combined_text);
            node.insertBefore(new_node, child);
            node.removeChild(child);
            node.removeChild(next);
            i--;
            nodeCount--;
        }
    }

    return this.find("span.hilite").each(function () {
        var thisParent = this.parentNode;
        thisParent.replaceChild(this.firstChild, this);
        newNormalize(thisParent);
    }).end();
};
