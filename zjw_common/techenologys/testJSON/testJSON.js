/**
 * Created by jianwu.zhang on 2015/12/29.
 */
(function(){
    'use strict';

    var book = {
        "title":"Professional JavaScript",
        "authors":["Nicholas C. Zakas", "macle Jackson"],
        edition:3,
        year:2011,
        releaseDate: new Date("2011","11","12")
    };

    var jsonText = JSON.stringify(book, function(key, value){
        switch(key){
            case "authors":
                return value.join(",");
            case "year":
                return 5000;
            case "edition":
                return undefined;
            default:
                return value;
        }
    }, "\t");

    console.log("JSON.stringify:" + jsonText);

    var jsonObj = JSON.parse(jsonText, function(key, value){
        if(key === "releaseDate") {
            return new Date(value);
        } else {
            return value;
        }
    });

    console.log("JSON.parse:" + jsonObj.releaseDate);
})();

