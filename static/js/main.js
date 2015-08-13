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
        helperPathCallback: function(name) {return 'templates/helpers/' + name;}
    }
});

requirejs(['jquery', 'app','bootstrap', 'i18next'], function ($, app) {

    // init the i18next and load the json files
    $.i18n.init({
        // i18n��options��ݒ肷��B
        resGetPath: 'static/js/locales/__lng__/__ns__.json', // ���ۉ��p�t�@�C���p�X���w�肷��B
        lowerCaseLng:  true, // �V�X�e������捞���ꂽ�����ނ͏������ɂ���B
        ns: 'spa', // �w�肵���ꍇ�AresGetPath��__ns__�́uPageA�v�ɂȂ�A�f�t�H���g�l�́utranslation�v�ł��B
        getAsync: false, // Json�t�@�C���̎擾�͓���/�񓯊��ɂ���B�@false�̏ꍇ�A�����Atrue�̏ꍇ�A�񓯊��B
        debug: true, // �G���[�����������ꍇ�A�G���[���O���o�͂���B
        fallbackLng: 'ja' // �V�X�e�����猾���ނ��擾�ł��Ȃ��ꍇ�ȂǁA�f�t�H���g�����ݒ肷��B
    }, function() {});

    app.start();
});