/**
 * Created by zjw on 16/10/18.
 */
(function () {
    'use strict';
    var isCanvasSupported = function () {
        return !!document.createElement('canvas').getContext;
    };


    var drawRect = function (ctx, x_lt, y_lt, width, height, fillColor, borderColor, borderWidth) {

        height = height || width;

        //draw rect
        ctx.beginPath();
        ctx.moveTo(x_lt, y_lt);
        ctx.lineTo(x_lt + width, y_lt);
        ctx.lineTo(x_lt + width, y_lt + height);
        ctx.lineTo(x_lt, y_lt + height);
        ctx.closePath();

        ctx.fillStyle = fillColor;
        ctx.lineWidth = borderWidth;
        ctx.strokeStyle = borderColor;

        ctx.fill();
        ctx.stroke();

    };

    // var _starPath = function (ctx, radiusS, radiusL) {
    //     var degPer = 360 / 5,
    //         PI = Math.PI;
    //
    //     ctx.beginPath();
    //     for (var i = 0; i < 5; i++) {
    //         ctx.lineTo(Math.cos((18 + i * degPer) * PI / 180) * radiusL,
    //             -Math.sin((18 + i * degPer) * PI / 180) * radiusL);
    //         ctx.lineTo(Math.cos((54 + i * degPer) * PI / 180) * radiusS,
    //             -Math.sin((54 + i * degPer) * PI / 180) * radiusS);
    //         ctx.stroke();
    //     }
    //     ctx.closePath();
    //     ctx.stroke();
    // };

    var _starPath = function (ctx) {
        var degPer = 360 / 5,
            PI = Math.PI;

        ctx.beginPath();
        for (var i = 0; i < 5; i++) {
            ctx.lineTo(Math.cos((18 + i * degPer) * PI / 180),
                -Math.sin((18 + i * degPer) * PI / 180));
            ctx.lineTo(Math.cos((54 + i * degPer) * PI / 180) * 0.5,
                -Math.sin((54 + i * degPer) * PI / 180) * 0.5);
            ctx.stroke();
        }
        ctx.closePath();
        ctx.stroke();
    };

    /**
     * 画五角星s
     * radiusOuter 外圆半径
     * radiusInner 内圆半径
     * offsetX 五角星中心坐标(canvas坐标系统)
     * offsetY 五角星中心坐标(canvas坐标系统)
     * rotation 旋转角度(顺时针)
     * options 画笔选项
     */
    var drawStar = function (ctx, offsetX, offsetY, zoom, rotation, options) {

        ctx.save();

        // 设定五角星中心的偏移坐标
        ctx.translate(offsetX, offsetY);

        if (typeof rotation === "object") {
            options = rotation;
            rotation = 0;
        }

        // 将五角星进行旋转
        ctx.rotate(rotation/180*Math.PI);

        _starPath(ctx);

        ctx.scale(zoom , zoom);

        if (options && options instanceof Object) {
            // ctx.lineWidth = options.lineWidth;
            ctx.strokeStyle = options.strokeStyle;

            if (options.fillStyle) {
                ctx.fillStyle = options.fillStyle;
                ctx.fill();
            }
        }
        ctx.stroke();
        ctx.restore();
    };


    var ZUI = window.ZJWUI = window.ZJWUI || {};
    var CVS = ZUI.canvas = {};

    CVS.isCanvasSupported = isCanvasSupported;
    CVS.drawRect = drawRect;
    CVS.drawStar = drawStar;

    return CVS;
})();