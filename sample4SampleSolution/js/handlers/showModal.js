/**
 * Created by jianwu.zhang on 2015/08/12.
 */
define(['hbs!templates/modal'], function(modalTmpl){
    return {

        show : function(){
            //TODO Bootstrap�̎g����
            // jQuery�Ōďo���̃{�^���ƃ��[�_����I������B
            // init the modal part.
            $('#modalRegion').html(modalTmpl());

            var $button = $('#hogeButton'),
                $modal = $('#hogeModal');
            if ($button.length > 0) {
                // �ďo���{�^���̃N���b�N�C�x���g���o�C���h����B
                $button.on('click', function () {
                    $modal.modal('show');
                    $modal.modal({show: true});
                });

                // ���[�_����Close�{�^�����N���b�N����Ǝ��s����Function���`����B
                var closeButtonFun = function () {
                    $modal.modal('hide');
                    alert("'Close' button is Clicked.");
                };

                // ���[�_����Save Changes�{�^�����N���b�N����Ǝ��s����Function���`����B
                var saveChangeButtonFun = function () {
                    $modal.modal('hide');
                    alert("'Save Changes' button is Clicked.");
                };

                // ���[�_�����J������ŁA���s�����������͂�����ɓ���܂��B
                $modal.on('shown.bs.modal', function () {

                    $('#hogeModalLabel').html("Waring");

                    $('.modal-body').html("").append("<p>Congratulation!</p>").
                        append("<p>You have succeed to show the modal dialog.</p>")
                });

                // ���[�_���������ŁA���s�����������͂�����ɓ���܂��B
                $modal.on('hidden.bs.modal', function () {
                    alert("We have returned to home page.");
                });

                // Close�{�^���̃N���b�N�C�x���g���o�C���h����B
                $('#close').on('click', closeButtonFun);
                // SaveChanges�{�^���̃N���b�N�C�x���g���o�C���h����B
                $('#saveChanges').on('click', saveChangeButtonFun);
            }
        }
    }
});