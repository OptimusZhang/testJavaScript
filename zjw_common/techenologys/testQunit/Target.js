/**
 * Created by jianwu.zhang on 2016/01/18.
 */


var MoneyObj = function (options) {
    this.amount = options.amount || 0;
    this.template = options.template || "{symbol}{amount}";
    this.symbol = options.symbol || "$";
};
MoneyObj.prototype = {
    add: function (toAdd) {
        this.amount += toAdd;
    },

    toString: function () {
        return this.template
            .replace("{symbol}", this.symbol)
            .replace("{amount}", this.amount);
    }
};

MoneyObj.euro = function(amount) {
    return new MoneyObj({
        amount: amount,
        template: "{amount} {symbol}",
        symbol: "EUR"
    });
};

var ZJWTEST = {


    format: function (string, values) {
        for (var key in values) {
            string = string.replace(new RegExp("\{" + key + "}"), values[key]);
        }
        return string;
    },

    Money: MoneyObj,

};
