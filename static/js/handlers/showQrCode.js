/**
 * Created by jianwu.zhang on 2015/08/12.
 */
define(['hbs!../templates/qrCode'], function(qrCodeTmpl){

    return {
        //TODO i18nの使い例
        // qrCodeを初期化する。
        show : function(){

            // htmlをロードする。
            $('#qrCodeRegion').html(qrCodeTmpl());

            //// システム言語を設定する。
            //$('#systemLang').html($.i18n.lng());
            //
            //// 英語へボタンにクリックイベントをバインドする。
            //$("#btnChangeToEng")[0].onclick = function (event) {
            //    app.i18n_ChangeLng_En();
            //};
            //
            //// 日本語へボタンにクリックイベントをバインドする。
            //$("#btnChangeToJp")[0].onclick = function (event) {
            //    app.i18n_ChangeLng_Ja();
            //};
        }
    }
});