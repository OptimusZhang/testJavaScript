//@ sourceURL=all.min.js
/**
 * Created by zjw on 16/12/5.
 */
var loadScript = function(url){
    $.ajax({
        url:url,
        dataType:"script",
        cache: true,
        async: true
    });
};

loadScript("./js1.js");
loadScript("./js2.js");