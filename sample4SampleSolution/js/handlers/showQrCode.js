/**
 * Created by jianwu.zhang on 2015/08/12.
 */
define(['hbs!../templates/qrCode'], function(qrCodeTmpl){

    return {
        //TODO i18n�̎g����
        // qrCode������������B
        show : function(){

            // html�����[�h����B
            $('#qrCodeRegion').html(qrCodeTmpl());

            //// �V�X�e�������ݒ肷��B
            //$('#systemLang').html($.i18n.lng());
            //
            //// �p��փ{�^���ɃN���b�N�C�x���g���o�C���h����B
            //$("#btnChangeToEng")[0].onclick = function (event) {
            //    app.i18n_ChangeLng_En();
            //};
            //
            //// ���{��փ{�^���ɃN���b�N�C�x���g���o�C���h����B
            //$("#btnChangeToJp")[0].onclick = function (event) {
            //    app.i18n_ChangeLng_Ja();
            //};
        }
    }
});