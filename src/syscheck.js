
var OSName = "Unknown OS";
var arrOS = {"Win":"Windows", "Mac":"MacOS", "X11":"UNIX","Linux":"Linux"};

_.times(arrOS, function(c) {
	if (navigator.appVersion.indexOf(arrOS[c][0]) != -1) OSName = arrOS[c][1];
	if (OSName != "Unknown OS") return false;
});
console.info(OSName);
jQuery.ajax({jsonp: 'jsonp',
  dataType: 'jsonp',
  url: 'http://ipv4.myexternalip.com/json',
  success: function(myip) {alert(myip); }
});
var oIp;
$.getScript("https://l2.io/ip.js?var=oIp")
    .done(function (script, textStatus) {
        console.log(textStatus);
        console.log("IP retrieved: " + oIp);
    })
    .fail(function (jqxhr, settings, exception) {
        console.error("IP retrieval error: " + exception);
    });
var xGeo;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        xGeo = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    xGeo = "Lat: " + position.coords.latitude +
        "| Lng: " + position.coords.longitude;
}
console.log(xGeo);

var txt = [];
txt.push("Browser CodeName: " + navigator.appCodeName);
txt.push("Browser Name: " + navigator.appName);
txt.push("Browser Version: " + navigator.appVersion);
txt.push("Cookies Enabled: " + navigator.cookieEnabled);
txt.push("Browser Language: " + navigator.language);
txt.push("Browser Online: " + navigator.onLine);
txt.push("Platform: " + navigator.platform);
txt.push("User-agent header: " + navigator.userAgent);
console.log(txt.toString);

console.log(location.origin);