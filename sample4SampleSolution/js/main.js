/**
 * Created by jianwu.zhang on 2015/08/10.
 */
requirejs.config({
    baseUrl: './sample4SampleSolution/js/',
    paths: {
        'jquery': '../../lib/js/jquery/jquery',
        'bootstrap': '../../lib/js/bootstrap/bootstrap',
        'hbs' : '../../lib/js/require-handlebars-plugin/hbs',
        'i18next': '../../lib/js/i18next/i18next'
    },

    shim:{
        // i18next�́uAMD�v�ł͂Ȃ��̂ŁAJquery�ƈ˗��֌W��ǉ�����B
        'i18next':{
            deps: ['jquery'],
            exports: 'i18n'
        },
        'bootstrap':{
            deps: ['jquery']
        }
    },

    // RequireJS��Handlebars.js���g���v���O�C���urequire-handlebars-plugin�v��z�u����B
    hbs:{
        helperPathCallback: function(name) {return 'templates/helpers/' + name;}
    }
});

requirejs(['jquery', 'app','bootstrap', 'i18next'], function ($, app) {

    // i18next������������B
    $.i18n.init(
        // i18n��options��ݒ肷��B
        {
            // ���ۉ��p�t�@�C���p�X���w�肷��B
            resGetPath: 'sample4SampleSolution/js/locales/__lng__/__ns__.json',
            // �V�X�e������捞���ꂽ�����ނ͏������ɂ���B
            lowerCaseLng: true,
            // �w�肵���ꍇ�AresGetPath��__ns__�́uPageA�v�ɂȂ�A�f�t�H���g�l�́utranslation�v�ł��B
            ns: 'spa',
            // Json�t�@�C���̎擾�͓���/�񓯊��ɂ���B�@false�̏ꍇ�A�����Atrue�̏ꍇ�A�񓯊��B
            getAsync: false,
            // �G���[�����������ꍇ�A�G���[���O���o�͂���B
            debug: true,
            // �V�X�e�����猾���ނ��擾�ł��Ȃ��ꍇ�ȂǁA�f�t�H���g�����ݒ肷��B
            fallbackLng: 'ja'
        }, function () {
            //�t�@�C���̃��[�h���I�������A���������̂����āB
            // ����͎g��Ȃ��̂ŁA��������Ȃ��B
        });

    app.start();
});