/**
 * Created by jianwu.zhang on 2015/08/12.
 */
define(['hbs!zjw/templates/i18next'], function(i18nTmpl){

    return {
        //TODO i18n‚ÌŽg‚¢—á
        // init the i18n part.
        show : function(){
            $('#i18nextRegion').html(i18nTmpl());
            $('#systemLang').html($.i18n.lng());

            $("#btnChangeToEng")[0].onclick = function (event) {
                app.i18n_ChangeLng_En();
            };

            $("#btnChangeToJp")[0].onclick = function (event) {
                app.i18n_ChangeLng_Ja();
            };
        }
    }
});