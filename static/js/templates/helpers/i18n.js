/**
 * Created by jianwu.zhang on 2015/08/12.
 */
define(['hbs/handlebars'],function(Handlebars) {
    // *.hbs�ɒ��ڂɗ��p�ł���֐��ui18n�v���`����B
    Handlebars.registerHelper('i18n', function(key) {
        // Json�t�@�C������Key,value�̌`�ŁA�\�����������̂��擾����B
        return new Handlebars.SafeString($.i18n.t(key));
    });
});