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

        test = licon.handleCall(this, settings);

        //Return this for jQuery chaining
        return test;
    };
})(jQuery);


/**
 include order

 <script src="/liconjs/src/Licon.js"></script>
 <script src="/liconjs/src/adapters/Adapters.js"></script>
 <script src="/liconjs/src/adapters/request/Ajax.js"></script>
 <script src="/liconjs/src/adapters/content/Replace.js"></script>

 <script src="/liconjs/src/loader/Loader.js"></script>
 <script src="/liconjs/src/jQuery.Licon.js"></script>
 */