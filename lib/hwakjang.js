/*
 * -----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * dolsup(Jiwon Choi)<1890mah@gmail.com> wrote this file. As long as you retain
 * this notice you can do whatever you want with this stuff. If we meet some day,
 * and you think this stuff is worth it, you can buy me a beer in return.
 * -----------------------------------------------------------------------------
 */

var actac = require("./actac.js");

(function(global){
    Object.defineProperty(String.prototype, "aheui", {
        get: function() {
                return actac.aheui(this);
        }
    });
	Object.defineProperty(String.prototype, "hanbeone", {
        get: function() {
                return actac.hanbeone(this);
        }
    });
})(this);