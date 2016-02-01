/**
 * Created by jianwu.zhang on 2015/08/12.
 */
define(['hbs/handlebars'],function(Handlebars) {
    // *.hbsに直接に利用できる関数「i18n」を定義する。
    Handlebars.registerHelper('i18n', function(key) {
        // JsonファイルからKey,valueの形で、表現したいものを取得する。
        return new Handlebars.SafeString($.i18n.t(key));
    });
});