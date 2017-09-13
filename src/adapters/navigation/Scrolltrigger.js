/**
 * Adapter which functions as Ajax RequestManager.
 *
 * @param loader
 * @param settings
 * @constructor
 */
Licon.prototype.Adapters.prototype.Scrolltrigger = function (Loader, settings)
{
    this.Loader = Loader;
    this.settings = settings;
    this.navigationLocation = 'append';

    this.$trigger = $('<div/>', {
        text: 'Meer laden',
        class: 'licon-js-scrolltrigger',
        'data-licon-id' : this.settings.$element.attr('data-licon-id')
    });
};

/**
 * Returns Navigation and settings to be used within the ContentManager.
 *
 * @returns {{navigationLocation: *, $navigation: (*|jQuery|HTMLElement)}}
 */
Licon.prototype.Adapters.prototype.Scrolltrigger.prototype.getNavigation = function ()
{
    return {
        'navigationLocation' : this.navigationLocation,
        '$navigation' : this.$trigger
    }
};
