/**
 * Created by jianwu.zhang on 2015/08/12.
 */
define(['hbs!templates/modal'], function(modalTmpl){
    return {

        show : function(){
            //TODO Bootstrapの使い例
            // jQueryで呼出元のボタンとモーダルを選択する。
            // init the modal part.
            $('#modalRegion').html(modalTmpl());

            var $button = $('#hogeButton'),
                $modal = $('#hogeModal');
            if ($button.length > 0) {
                // 呼出元ボタンのクリックイベントをバインドする。
                $button.on('click', function () {
                    $modal.modal('show');
                    $modal.modal({show: true});
                });

                // モーダルのCloseボタンをクリックすると実行するFunctionを定義する。
                var closeButtonFun = function () {
                    $modal.modal('hide');
                    alert("'Close' button is Clicked.");
                };

                // モーダルのSave Changesボタンをクリックすると実行するFunctionを定義する。
                var saveChangeButtonFun = function () {
                    $modal.modal('hide');
                    alert("'Save Changes' button is Clicked.");
                };

                // モーダルを開いた後で、実行したい動きはこちらに入れます。
                $modal.on('shown.bs.modal', function () {

                    $('#hogeModalLabel').html("Waring");

                    $('.modal-body').html("").append("<p>Congratulation!</p>").
                        append("<p>You have succeed to show the modal dialog.</p>")
                });

                // モーダルを閉じた後で、実行したい動きはこちらに入れます。
                $modal.on('hidden.bs.modal', function () {
                    alert("We have returned to home page.");
                });

                // Closeボタンのクリックイベントをバインドする。
                $('#close').on('click', closeButtonFun);
                // SaveChangesボタンのクリックイベントをバインドする。
                $('#saveChanges').on('click', saveChangeButtonFun);
            }
        }
    }
});