/**
 * Created by jianwu.zhang on 2015/08/04.
 */
define(['hbs!templates/main',
        'hbs!templates/main-fluid',
        'handlers/showModal',
        'handlers/showI18n',
        'handlers/showQrCode'],
    function (mainTmpl, mainFluidTmpl, showModal, showI18n, showQrCode) {

        return {
            start : function() {
                // init the main page.

                // TODO comment of fixed the bug of #001 and tempBranch

                $('#mainRegion').html(mainTmpl());

                 //モーダルエリアを表示する。
                showModal.show();
                // 多言語化エリアを表示する。
                showI18n.show();
                // Qrコードエリアを表示する。
                showQrCode.show();

                // bind the app to the window
                window.app = this;
            },

            // 英語へボタンをクリックした場合、システム言語をenに設定する。
            i18n_ChangeLng_En: function () {
                //システム言語をenに設定する。
                $.i18n.setLng('en', function () {
                });
                // 多言語化エリアを再表示する。
                showI18n.show();
            },

            // 日本語へボタンをクリックした場合、システム言語をjaに設定する。
            i18n_ChangeLng_Ja: function () {
                //システム言語をjaに設定する。
                $.i18n.setLng('ja', function () {
                });
                // 多言語化エリアを再表示する。
                showI18n.show();
            }
        };
    });