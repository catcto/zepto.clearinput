/*
 * zepto.clearinput
 * https://github.com/catcto/zepto.clearinput
 */
(function ($) {
    $.fn.clearInput = function (options) {
        var settings = $.extend({
            'focus': true
        }, options);
        return this.each(function () {
            var $this = $(this);
            var $clear = $(settings.clear);
            $clear.click(function () {
                $this.val('').change();
                $clear.hide();
                if (settings.focus) {
                    $this.focus();
                }
            });
            function trigger() {
                if ($this.val().length > 0) {
                    $clear.show();
                } else {
                    $clear.hide();
                }
            }
            $this.on('keyup keydown change focus', function () {
                trigger();
            });
            trigger();
        });
    };
})(Zepto);