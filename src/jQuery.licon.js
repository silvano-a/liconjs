(function ($)
{
    /**
     * Holds the plugin manager.
     *
     * @var Licon
     */
    var pluginManager;

    /**
     * Registers LiconJS with jQuery.
     *
     * @param options
     */
    $.fn.licon = function (options)
    {
        if (pluginManager instanceof Licon === false) {
            pluginManager = new Licon();
        }

        pluginManager.handleCall(this, options);

        return pluginManager;
    };
})(jQuery);