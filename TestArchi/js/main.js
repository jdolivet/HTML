var updateTime = function() {
    var currentTime = moment().format("h:mm:ss A");
    $('#time').text(currentTime);
}

var updateBrowser = function() {
    $('#browser').text("Browser: " + platform.name);
}

var updateOS = function() {
    $('#os').text("OS: " + platform.os);
}

$(document).ready(function(){
    updateTime();
    setInterval(updateTime, 1000);
    updateBrowser();
    updateOS();
});

