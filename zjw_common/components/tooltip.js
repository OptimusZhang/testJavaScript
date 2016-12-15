/**
 * Created by zjw on 16/11/17.
 */

(function(){
    'use strict';
    var _getFontWidth = function(str) {
        var fontWidth = 0;
        for (var len = str.length; len--;){
            if ((str.charCodeAt(len) >= 0) && (str.charCodeAt(len) <= 255)) {
                // 这是一个英数字
                // 一个英字占7px
                fontWidth = fontWidth + 7;
            } else {
                // 一个汉字占14px
                fontWidth = fontWidth + 14;
            }
        }
        return fontWidth;
    };

    /*构造函数*/
    var Tooltip = function(opts) {
        this.destroy();
        this.init(opts);
        this.show();
    };

    Tooltip.prototype.init = function (opts) {
        var defaultOptions = {
            minWidth: 150,
            minHeight: 18,
            backgroundColor:'#E5E5E5',
            borderColor:'#555555',
            arrowDirective:'bottom',
            targetWidth: 100,
            targetHeight: 100,
            starSize: 10,
            fontHeight:14,
            contentPadding:5
        };

        opts = this.options = $.extend(defaultOptions, opts);
        var template = opts.template = '<div class="isales-tooltip"><div class="starBorder"></div><div class="content"><span class="text">'
            + opts.content
            + '</span></div><div class="star"></div></div>';
        $('body').append(template);
        this.setTooltipWidthHeight();
    };

    Tooltip.prototype.destroy = function(){
        this.options = null;
        $('isales-tooltip').remove();
    };

    Tooltip.prototype.show = function () {
        var opts = this.options,
            target;
        if (target = $(opts.targetSelector)[0]) {

        } else {
            this._setArrowDirective();
            $('isales-tooltip').css('display', 'block');
        }
    };


    Tooltip.prototype.setTooltipWidthHeight = function(){

    };

    Tooltip.prototype._setArrowDirective = function(){

    };









})();
