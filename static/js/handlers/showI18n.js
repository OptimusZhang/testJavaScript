/**
 * Created by jianwu.zhang on 2015/08/12.
 */
define(['hbs!templates/i18next'], function(i18nTmpl){

    return {
        //TODO i18nの使い例
        // init the i18n part.
        show : function(){

            // htmlをロードする。
            $('#i18nextRegion').html(i18nTmpl());
            $('#i18nextRegion').i18n();

            // システム言語を設定する。
            $('#systemLang').html($.i18n.lng());

            // 英語へボタンにクリックイベントをバインドする。
            $("#btnChangeToEng")[0].onclick = function (event) {
                app.i18n_ChangeLng_En();
            };

            // 日本語へボタンにクリックイベントをバインドする。
            $("#btnChangeToJp")[0].onclick = function (event) {
                app.i18n_ChangeLng_Ja();
            };
        }
    }
});