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
        helpers: true,
        i18n: false,
        templateExtension: 'hbs',
        partialsUrl: 'zjw/templates' // base url for loading partials so that you don't have to provide the full path every time you need to load a partial within a template.
    }
});

requirejs(['jquery', 'zjw/app','bootstrap'], function ($) {

});