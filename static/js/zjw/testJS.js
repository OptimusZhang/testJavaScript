/**
 * Created by jianwu.zhang on 2015/08/04.
 */
$(function () {
    var $botton = $('#hogeBotton'),
        $modal = $('#hogeModal');
    if ($botton.length > 0) {
        $botton.on('click', function () {
            $modal.modal('show');
            $modal.modal({show: true});
        });

        var closeBottonFun = function () {
            $modal.modal('hide');
            alert("'Close' botton is Clicked.");
        };

        var saveChangeBottonFun = function () {
            $modal.modal('hide');
            alert("'Save Changes' botton is Clicked.");
        };

        $modal.on('shown.bs.modal', function () {

            // モーダルのタイトルをカスタマイズする。
            $('#hogeModalLabel').html("Waring");

            // モーダルのタイトルをカスタマイズする。
            $('.modal-body').html("").append("<p>Congratulation!</p>").
                append("<p>You have succeed to show the modal dialog.</p>")
        });

        // モーダルのタイトルをカスタマイズする。
        $modal.on('hidden.bs.modal', function () {
            alert("We have returned to home page.");
        });

        $('#close').on('click', closeBottonFun);
        $('#saveChanges').on('click', saveChangeBottonFun);
    }
});