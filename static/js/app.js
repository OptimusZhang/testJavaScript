/**
 * Created by jianwu.zhang on 2015/08/04.
 */
define(['hbs!templates/main',
        'handlers/showModal',
        'handlers/showI18n'],
    function (mainTmpl, showModal, showI18n) {

        return {
            start : function() {
                // init the main page.
                $('#mainRegion').html(mainTmpl());

                // show the part of modal sample
                showModal.show();
                // show the part of i18next sample
                showI18n.show();

                // bind the app to the window
                window.app = this;
            },

            i18n_ChangeLng_En: function () {
                $.i18n.setLng('en', function () {
                });
                showI18n.show();
            },

            i18n_ChangeLng_Ja: function () {
                $.i18n.setLng('ja', function () {
                });
                showI18n.show();
            }
        };
    });