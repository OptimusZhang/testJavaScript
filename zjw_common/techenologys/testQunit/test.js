/**
 * Created by jianwu.zhang on 2016/01/18.
 */
QUnit.test( "hello test", function( assert ) {
    assert.ok( 1 == "1", "result OK!" );
    assert.ok( 2 == "2", "result OK!" );
});


QUnit.test( "hello test2", function( assert ) {
    assert.ok( 3 == "3", "result OK!" );
});

QUnit.test( "basics", function( assert ) {
    var values = {
        name1: "world1",
        name2: "world2"
    };
    window.tempValues = values;

    assert.equal(ZJWTEST.format("Hello, {name1}", values), "Hello, world1", "result OK!");
    assert.equal(ZJWTEST.format("Hello, {name1}, and {name2}", values), "Hello, world1, and world2", "result OK!");
});


QUnit.module("test4", {
    setup: function() {
        console.log("before  test");
    },
    teardown: function() {
        console.log("after  test");
    }
});
QUnit.test("test4", function(assert) {
    assert.ok( 4 == "4", "result OK!" );
});

QUnit.module("Money", {
    setup: function() {
        console.log("before  test");
        this.dollar = new ZJWTEST.Money({amount: 15.5});
        this.euro = ZJWTEST.Money.euro(10.5);
    },
    teardown: function() {
        console.log("after  test");
    }
});
QUnit.test("Money.add", function(assert) {
    assert.equal( this.dollar.amount, 15.5);
    this.dollar.add(10);
    assert.equal( this.dollar.amount, 25.5);
});

QUnit.test("Money.toString", function(assert) {
    assert.equal( this.dollar.toString(), "$15.5");
    this.dollar.add(10);
    assert.equal( this.euro.toString(), "10.5 EUR");
});

QUnit.asyncTest("testAsync", function(){
    $.getJSON("resource.json", function(result){
        QUnit.deepEqual(result, {
            status: "ok"
        });
        start();
    });
});

QUnit.asyncTest("testAsync expect", function(){
    $.getJSON("resource.json", function(result){
        QUnit.expect(2);
        QUnit.deepEqual(result, {
            status: "ok"
        });
        QUnit.deepEqual(result, {
            status: "ok"
        });
        start();
    });
});

QUnit.asyncTest("testAsync multi", function(){
    QUnit.stop();
    QUnit.stop();

    $.getJSON("resource.json", function(result){
        QUnit.deepEqual(result, {
            status: "ok"
        });
        start();
    });

    $.getJSON("resource2.json", function(result){
        QUnit.deepEqual(result, {
            status2: "ok2"
        });
        start();
    });
});