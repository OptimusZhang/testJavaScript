/**
 * Created by jianwu.zhang on 2015/08/10.
 */
requirejs.config({
    baseUrl: './static/js/',
    paths: {
        'jquery': '../../lib/js/jquery/jquery',
        'bootstrap': '../../lib/js/bootstrap/bootstrap',
        'hbs' : '../../lib/js/require-handlebars-plugin/hbs',
        'i18next': '../../lib/js/i18next/i18next'
    },

    shim:{
        // i18nextは「AMD」ではないので、Jqueryと依頼関係を追加する。
        'i18next':{
            deps: ['jquery'],
            exports: 'i18n'
        },
        'bootstrap':{
            deps: ['jquery']
        }
    },

    // RequireJSでHandlebars.jsを使うプラグイン「require-handlebars-plugin」を配置する。
    hbs:{
        helperPathCallback: function(name) {return 'templates/helpers/' + name;}
    }
});

requirejs(['jquery', 'app','bootstrap', 'i18next'], function ($, app) {

    // i18nextを初期化する。
    $.i18n.init(
        // i18nのoptionsを設定する。
        {
            // 国際化用ファイルパスを指定する。
            resGetPath: 'static/js/locales/__lng__/__ns__.json',
            // システムから取込された言語種類は小文字にする。
            lowerCaseLng: true,
            // 指定した場合、resGetPathに__ns__は「PageA」になる、デフォルト値は「translation」です。
            ns: 'spa',
            // Jsonファイルの取得は同期/非同期にする。　falseの場合、同期、trueの場合、非同期。
            getAsync: false,
            // エラーが発生した場合、エラーログを出力する。
            debug: true,
            // システムから言語種類が取得できない場合など、デフォルト言語を設定する。
            fallbackLng: 'ja'
        }, function () {
            //ファイルのロードが終わった後、したいものを入れて。
            // 今回は使わないので、何もいれない。
        });

    app.start();
});