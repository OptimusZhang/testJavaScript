/**
 * Created by jianwu.zhang on 2015/08/12.
 */
define(['hbs!templates/i18next'], function(i18nTmpl){

    return {
        //TODO i18n�̎g����
        // init the i18n part.
        show : function(){

            // html�����[�h����B
            $('#i18nextRegion').html(i18nTmpl());
            $('#i18nextRegion').i18n();

            // �V�X�e�������ݒ肷��B
            $('#systemLang').html($.i18n.lng());

            // �p��փ{�^���ɃN���b�N�C�x���g���o�C���h����B
            $("#btnChangeToEng")[0].onclick = function (event) {
                app.i18n_ChangeLng_En();
            };

            // ���{��փ{�^���ɃN���b�N�C�x���g���o�C���h����B
            $("#btnChangeToJp")[0].onclick = function (event) {
                app.i18n_ChangeLng_Ja();
            };
        }
    }
});