/**
 * Created by jianwu.zhang on 2015/12/05.
 */
var wrapSelectOnReady = function() {
    $("select").each(function(){
        var selectElement = this.cloneNode(true);
        var divWraper = document.createElement('div');
        divWraper.id = "selectWraper";
        if (selectElement.disabled) {
            divWraper.className = "disable";
        }
        divWraper.appendChild(selectElement);
        this.parentNode.replaceChild(divWraper, this);
    });
};
wrapSelectOnReady();