/**
 * Created by jianwu.zhang on 2015/08/12.
 */
define(['hbs/handlebars'],function(Handlebars) {
    Handlebars.registerHelper('i18n', function(key) {
        return new Handlebars.SafeString($.i18n.t(key));
    });
});