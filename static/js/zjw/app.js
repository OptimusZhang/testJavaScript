/**
 * Created by jianwu.zhang on 2015/08/04.
 */
define(['hbs!zjw/templates/testSPA', 'i18next'],function (testSPA) {

    var tmpl = testSPA();
    $('#mainRegion').html(tmpl);

    //TODO Bootstrapの使い例
    // jQueryで呼出元のボタンとモーダルを選択する。
    var $button = $('#hogeButton'),
        $modal = $('#hogeModal');
    if ($button.length > 0) {
        // 呼出元ボタンのクリックイベントをバインドする。
        $button.on('click', function () {
            $modal.modal('show');
            $modal.modal({show: true});
        });

        // モーダルのCloseボタンをクリックすると実行するFunctionを定義する。
        var closeButtonFun = function () {
            $modal.modal('hide');
            alert("'Close' button is Clicked.");
        };

        // モーダルのSave Changesボタンをクリックすると実行するFunctionを定義する。
        var saveChangeButtonFun = function () {
            $modal.modal('hide');
            alert("'Save Changes' button is Clicked.");
        };

        // モーダルを開いた後で、実行したい動きはこちらに入れます。
        $modal.on('shown.bs.modal', function () {

            $('#hogeModalLabel').html("Waring");

            $('.modal-body').html("").append("<p>Congratulation!</p>").
                append("<p>You have succeed to show the modal dialog.</p>")
        });

        // モーダルを閉じた後で、実行したい動きはこちらに入れます。
        $modal.on('hidden.bs.modal', function () {
            alert("We have returned to home page.");
        });

        // Closeボタンのクリックイベントをバインドする。
        $('#close').on('click', closeButtonFun);
        // SaveChangesボタンのクリックイベントをバインドする。
        $('#saveChanges').on('click', saveChangeButtonFun);
    }


    //TODO i18nの使い例
    var $i18nTitle = $('#i18nTitle');
    var $i18nContent = $('#i18nContent');
    var $systemLang = $('#systemLang');

    var title, content,systemLang;

    $.i18n.init({
        // i18nのoptionsを設定する。
        resGetPath: 'static/js/zjw/locales/__lng__/__ns__.json', // 国際化用ファイルパスを指定する。
        lowerCaseLng:  true, // システムから取込された言語種類は小文字にする。
        ns: 'spa', // 指定した場合、resGetPathに__ns__は「PageA」になる、デフォルト値は「translation」です。
        getAsync: false, // Jsonファイルの取得は同期/非同期にする。　falseの場合、同期、trueの場合、非同期。
        debug: true, // エラーが発生した場合、エラーログを出力する。
        fallbackLng: 'ja', // システムから言語種類が取得できない場合など、デフォルト言語を設定する。
    }, function() {
        title = $.i18n.t('label.title');
        content = $.i18n.t('label.content');
        systemLang = $.i18n.lng();

        $i18nTitle.html(title);
        $i18nContent.html(content);
        $systemLang.html(systemLang);
    });


    $("#btnChangeToEng")[0].onclick = function(event) {
        $.i18n.setLng('en', function(){});
        title = $.i18n.t('label.title');
        content = $.i18n.t('label.content');
        systemLang = $.i18n.lng();

        $i18nTitle.html(title);
        $i18nContent.html(content);
        $systemLang.html(systemLang);

    };

    $("#btnChangeToJp")[0].onclick = function(event) {
        $.i18n.setLng('ja',function(){});
        title = $.i18n.t('label.title');
        content = $.i18n.t('label.content');
        systemLang = $.i18n.lng();

        $i18nTitle.html(title);
        $i18nContent.html(content);
        $systemLang.html(systemLang);
    };
});