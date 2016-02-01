/**
 * Created by jianwu.zhang on 2015/12/31.
 */
(function(){
    window.onload = function(){
        'use strict';

        var consts = {
            DB_NAME: 'mdn-demo-indexeddb-epublications',
            DB_VERSION: 1,
            DB_STORE_NAME: 'publications',
            rw_objectStoreFlg: {
                READ_WRITE: 'readwrite',
                READ_ONLY: 'readonly'
            }
        };

        var myIDB;

        (function() {
            console.debug("init myIDB ...");
            var indexedDB = window.indexedDB || window.msIndexedDB;
            if (!indexedDB) {
                window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
            }

            var IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
            var IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

            myIDB = {
                IDB : indexedDB,
                IDBTran: IDBTransaction,
                IDBKeyR: IDBKeyRange
            };
            console.debug("init myIDB DONE.");
        })();

        var _colseDb = function(){
            myIDB.IDB.close();
        };

        var _deleteDb = function(){
            myIDB.IDB.deleteDatabase(consts.DB_NAME);
        };

        var _initDb = function(){
            console.debug("_initDb ...");
            var db = myIDB.db = myIDB.IDB.open(consts.DB_NAME, consts.DB_VERSION);
            db.onerror = function(evt){
                console.debug("connect DB error ...");
                console.debug("errorCode:" + evt.target.errorCode);
            };

            db.onupgradeneeded = function(evt){
                console.debug("onupgradeneeded ...");
                var database = evt.currentTarget.result;
                if (!database.objectStoreNames.contains(consts.DB_STORE_NAME)) {
                    var storeObj = database.createObjectStore(consts.DB_STORE_NAME,
                        {keyPath: "id", autoIncrement: true});
                    storeObj.createIndex('biblioid', 'biblioid', { unique: true });
                    storeObj.createIndex('title', 'title', { unique: false });
                    storeObj.createIndex('year', 'year', { unique: false });
                } else {
                    console.debug("upgrade the database...");
                }
            };

            db.onsuccess = function(evt){
                var dataBase = evt.target.result;
                myIDB.db = dataBase;
                console.debug("connect DB success ... ");
                console.debug("DBName: ", dataBase.name + "_" , dataBase.version);
            };
        };

        var _displayActionSuccess = function(msg) {
            msg = typeof msg !== 'undefined' ? "Success:" + msg : "Success";
            $('#action-status').html('<span class="action-success">' + msg + '</span>');
        };

        var _displayActionFailure = function(msg) {
            msg = typeof msg !== 'undefined' ? "Failure:" + msg : "Failure";
            $('#action-status').html('<span class="action-failure">' + msg + '</span>');
        };

        var _resetActionStatus = function () {
            console.debug("_resetActionStatus ...");
            $('#action-status').empty();
            console.debug("_resetActionStatus DONE");
        };

        var _addEventListeners = function () {
            console.debug("_addEventListeners ...");
            _initDb();

            $('#register-form-reset').click(function(evt){
                _resetActionStatus();
            });

            $('#add-button').click(function(evt) {
                console.debug("add ...");
                var title = $('#pub-title').val();
                var year = $('#pub-year').val();
                var biblioid = $('#pub-biblioid').val();

                // validation check
                if (!title || !year || !biblioid) {
                    _displayActionFailure("Required field(s) missing");
                }

                var file_input = $('#pub-file');
                var selected_file = file_input.get(0).files[0];
                console.debug("selected_file:", selected_file);
                file_input.val(null);
                var content_url = $('#pub-content-url').val();
                if (selected_file) {
                    _addPublication(biblioid, title, year, selected_file);
                } else {
                    _addPublication(biblioid, title, year);
                    _displayActionSuccess();
                }
            });

            $('#delete-button').click(function(evt) {
                console.debug("delete ...");
                var k = $('#pub-biblioid-to-delete').val();
                console.debug("delete k:", k);

                var tx = myIDB.db.transaction(consts.DB_STORE_NAME, consts.rw_objectStoreFlg.READ_WRITE);
                var store =  tx.objectStore(consts.DB_STORE_NAME);

                k = Number(k);
                var req = store.get(k);
                req.onsuccess = function (evt) {
                    var record = evt.target.result;
                    console.debug("record:", record);
                    if (typeof record !== 'undefined') {
                        req = store.delete(k);
                        req.onsuccess = function (evt) {
                            console.debug('evt:', evt);
                            console.debug('evt.target:', evt.target);
                            console.debug('evt.target.result:', evt.target.result);
                            console.debug('delete successful');
                            _displayActionSuccess("Deletion Successful");
                            _displayPublist();
                        };
                        req.onerror = function (evt) {
                            console.error("delete:", evt.target.errorCode);
                        };
                    }else {
                        _displayActionFailure("No matching record found");
                    }
                };

                req.onerror = function (evt) {
                    console.error("delete:", evt.target.errorCode);
                };
            });

            var search_button = $('#search-list-button');
            search_button.click(function (evt) {
                _displayPublist();
            });
        };


        //var _getFile = function(key, successCB) {
        //    var tx = myIDB.db.transaction(consts.DB_STORE_NAME, consts.rw_objectStoreFlg.READ_WRITE);
        //    var store = tx.objectStore(consts.DB_STORE_NAME);
        //    var req = store.get(key);
        //    req.onsuccess = function (evt) {
        //        var value = evt.target.result;
        //        if (value) {
        //            successCB(value.file);
        //        }
        //    };
        //};

        var _addPublication = function(biblioid, title, year, file) {
            console.debug("_addPublication arguments:", arguments);
            if (!myIDB.db) {
                console.error("_addPublication: the db is not initialized");
                return;
            }
            var tx = myIDB.db.transaction(consts.DB_STORE_NAME, consts.rw_objectStoreFlg.READ_WRITE);
            var store = tx.objectStore(consts.DB_STORE_NAME);
            var req = store.add({
                biblioid: biblioid,
                title: title,
                year: year,
                file: file
            });

            req.onsuccess = function() {
                console.debug("Insertion in DB successful");
            };

            req.onerror = function () {
                console.error("add error", this.error);
                _displayActionFailure(this.error);
            };
        };

        var _displayPublist = function() {
            console.debug("_displayPublist ...");

            // local variable define
            var i = 0;
            var req;
            var file_presence;
            var presence_html;

            // clear pub-list and pub-msg
            var pub_msg = $('#pub-msg');
            pub_msg.empty();

            var pub_list = $('#pub-list');
            pub_list.empty();

            // open the object store space by transaction.
            var tx = myIDB.db.transaction(consts.DB_STORE_NAME, consts.rw_objectStoreFlg.READ_WRITE);
            var store = tx.objectStore(consts.DB_STORE_NAME);

            // get count from store.
            req = store.count();
            req.onsuccess = function (evt) {
                var html_msg = '<p>There are <strong>' + evt.target.result + '</strong> record(s) in the object store.</p>';
                pub_msg.append(html_msg);
            };
            req.onerror = function() {
                console.error('add error:', this.error);
                _displayActionFailure(this.error);
            };

            // open the cursor in the store.
            req = store.openCursor();
            req.onsuccess = function (evt) {
                var cursor = evt.target.result;
                if (cursor) {
                    console.debug("cursor.value:", cursor.value);
                    presence_html = '<span class="presence-no">No image</span>';

                    file_presence = cursor.value.file !== null;

                    var html_pub_list =
                        '<li>' +
                        '[' + cursor.key + ']' +
                        '(biblioid:' + cursor.value.biblioid + ')' +
                        cursor.value.title + ' - ' +
                        cursor.value.year + ' / ' +
                        '</li>';
                    pub_list.append(html_pub_list);

                    if (file_presence) {
                        var file = cursor.value.file;
                        var img_id = 'pub-mig-' + i;
                        var obj_url = window.URL.createObjectURL(file);
                        var imgElem = document.createElement('img');
                        imgElem.id = img_id;
                        imgElem.src = obj_url;
                        imgElem.width = '100';
                        imgElem.height = '100';
                        imgElem.addEventListener('load', function(){
                            window.URL.revokeObjectURL(obj_url);
                        }, false);
                        pub_list[0].getElementsByTagName('li').item(i).appendChild(imgElem);
                    }

                    // move on to the next object in store.
                    cursor.continue();
                    i++;
                }
                else {
                    console.debug("no more entries!");
                }
            };
        };

        //_deleteDb();
        _addEventListeners();
    };
})();

