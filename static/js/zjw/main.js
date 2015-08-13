/**
 * Created by jianwu.zhang on 2015/08/10.
 */
requirejs.config({
    baseUrl: './static/js/',
    paths: {
        'jquery': 'jquery/jquery',
        'bootstrap': 'bootstrap/bootstrap',
        'hbs' : 'require-handlebars-plugin/hbs',
        'i18next': 'i18next/i18next'
    },

    shim:{
        'i18next':{
            deps: ['jquery'],
            exports: 'i18n'
        },
        'bootstrap':{
            deps: ['jquery']
        }
    },

    // set the [require-handlebars-plugin],//optional
    hbs:{
        helperPathCallback: function(name) {return 'zjw/templates/helpers/' + name;}
    }
});

requirejs(['jquery', 'zjw/app','bootstrap', 'i18next'], function ($, app) {

    // init the i18next and load the json files
    $.i18n.init({
        // i18nのoptionsを設定する。
        resGetPath: 'static/js/zjw/locales/__lng__/__ns__.json', // 国際化用ファイルパスを指定する。
        lowerCaseLng:  true, // システムから取込された言語種類は小文字にする。
        ns: 'spa', // 指定した場合、resGetPathに__ns__は「PageA」になる、デフォルト値は「translation」です。
        getAsync: false, // Jsonファイルの取得は同期/非同期にする。　falseの場合、同期、trueの場合、非同期。
        debug: true, // エラーが発生した場合、エラーログを出力する。
        fallbackLng: 'ja' // システムから言語種類が取得できない場合など、デフォルト言語を設定する。
    }, function() {});

    app.start();
});