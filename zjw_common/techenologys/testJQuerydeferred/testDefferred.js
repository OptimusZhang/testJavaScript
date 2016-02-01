/**
 * Created by jianwu.zhang on 2016/01/11.
 */
(function(){
    'use strict';
    window.onload = function(){

        // TODO test traditional ajax
        //$.ajax({
        //    url:"test.html",
        //    success: function(){
        //        window.alert("Patern 1 $.ajax Success");
        //    },
        //
        //    error:function(){
        //        window.alert("Patern 1 $.ajax error");
        //    }
        //
        //});

        // TODO test patern 2 $.Defferred done fail
        //$.ajax({url: "test.html"})
        //    .done(function () {
        //        window.alert("Patern2 $.ajax done");
        //    })
        //    .fail(function () {
        //        window.alert("Patern 2 $.ajax fail");
        //    });


        // TODO test multiplue done
        //$.ajax({url: "test.html"}).done(function () {
        //    window.alert("patern3 1st done");
        //}).done(function () {
        //    window.alert("patern3 2nd done");
        //});

        // TODO multiple ajax with one done
        //$.when($.ajax({url: "test.html"}), $.ajax({url: "test2.html"})).done(function () {
        //    window.alert("patern4 1st done");
        //}).done(function () {
        //    window.alert("patern4 2nd done");
        //}).fail(function () {
        //    window.alert("patern4 fail");
        //});

        // TODO test general function
        var wait = function(dtd){
            var tasks = function () {
                window.alert("patern5 success");
                // change the status to DONE.
                dtd.resolve();

                // change the status to FAIL.
                //dtd.reject();
            };

            setTimeout(tasks, 2000);
            return dtd.promise(); // return a defferred object
        };

        $.Deferred(wait).done(function () {
            window.alert("done");
        }).fail(function () {
            window.alert("fail");
        });
    };
})();