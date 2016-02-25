// スクリプト注入（XSS）対策

/**
 * 下記変換処理を行なう。
 * 「<」→「&lt」
 * 「>」→「&gt」
 * 「&」→「&amp」
 * 「"」→「&quot」
 * 「'」→「&#3」
 */
function html2Escape(value) {
    return value.replace(/[<>&"']/g, function (char) {
        return {'<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": "&#3"}[char];
    });
}

/**
 * 下記変換処理を行なう。
 * 「&lt」→「<」
 * 「&gt」→「>」
 * 「&amp」→「&」
 * 「&quot」→「"」
 * 「&#3」→「'」
 */
function escape2Html(value) {
    var arrEntities = {'lt': '<', 'gt': '>', 'nbsp': ' ', 'amp': '&', 'quot': '"', '#3': "'"};
    return value.replace(/&(lt|gt|nbsp|amp|quot|#3);/ig, function (all, t) {
        return arrEntities[t];
    });
}

// SQL注入対策

/**
 * 下記変換処理を行なう。
 * 「'」→「''」(2個)
 * 「\」→「\\」(2個)
 */
function _symbolTransform(value) {
    return value.replace(/['|\\\\]/g, function(char) {
        return {"'":"''", "\\":"\\\\"}[char];
    });
}
