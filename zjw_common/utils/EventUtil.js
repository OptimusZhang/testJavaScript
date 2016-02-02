/**
 * Created by jianwu.zhang on 2016/02/02.
 */
    'use strict';
var EventUtil = {
    addHandler: function (element, type, handler) {
        // browser is not IE
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        }else if (element.attachEvent) {
            // else if browser is IE
            element.attachEvent("on" + type, handler);
        }else {
            // DOM0 Level Event handler.
            element["on" + type] = handler;
        }
    },

    removeHandler: function(element, type, handler){
        // browser is not IE
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        }else if (element.detachEvent) {
            // else if browser is IE
            element.detachEvent("on" + type, handler);
        }else {
            // DOM0 Level Event handler.
            element["on" + type] = null;
        }
    },

    getEvent: function (event) {
        return event ? event : window.event;
    },

    getTarget: function(event){
        return event.target || event.srcElement;
    },

    preventDefault: function (event) {
      if(event.preventDefault) {
          event.preventDefault();
      } else {
          event.returnValue = false;
      }
    },

    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
};