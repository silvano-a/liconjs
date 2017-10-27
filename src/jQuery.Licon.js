(function ($)
{
    var settings = {
    };

    var licon;
    $.fn.Licon = function (options)
    {
        if (options && licon instanceof Licon === false ) {
            settings = $.extend(settings, options);
        }

        if (licon instanceof Licon === false) {
            licon = new Licon(settings);
        }

        licon.handleCall(this, settings);

        //Return this for jQuery chaining
        return this;
    };
})(jQuery);
