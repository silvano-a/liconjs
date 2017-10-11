/**
 * Adapter which 
 *
 * @param loader
 * @param settings
 * @constructor
 */
Licon.prototype.Components.prototype.Scrolltrigger = function (Loader, settings)
{
    this.Loader = Loader;
    this.settings = settings;
    this.navigationLocation = 'append';
    this.active = false;
    this.contentFinished = false;

    this.$trigger = $('<div/>',
        {
            text: 'Meer laden',
            class: 'licon-js-scrolltrigger',
            'data-licon-id' : this.settings.$element.attr('data-licon-id')
        });


    this.settings.$element.on('licon-navigation-preloaded', $.proxy(this.stageLoaded, this));
};

/**
 * Returns Navigation and settings to be used within the ContentManager.
 *
 * @returns {{navigationLocation: *, $navigation: (*|jQuery|HTMLElement)}}
 */
Licon.prototype.Components.prototype.Scrolltrigger.prototype.getNavigation = function ()
{
    return {
        'navigationLocation': this.navigationLocation,
        '$navigation': this.$trigger
    }
};


Licon.prototype.Components.prototype.Scrolltrigger.prototype.stageLoaded = function (e)
{
    this.active = true;
    this.$renderedNavigation = $(e.navigation);
    $(e.navigation).on('click', $.proxy(this.clickEventHandler, this));
    $(window).on('scroll.Licon', $.proxy(this.scrollEventHandler, this))
};

Licon.prototype.Components.prototype.Scrolltrigger.prototype.clickEventHandler = function (e)
{
    console.log('click!');
    if(this.active === false)
    {
        return;
    }
    this.active = false;
    this.checkForNextPage();
};

Licon.prototype.Components.prototype.Scrolltrigger.prototype.scrollEventHandler = function (e)
{
    console.log(this);
    if(this.active === false) {
        return;
    }

    $loader = e.$renderedNavigation;

    if ($loader.length == 0 || this.loading == true) {
        return;
    }

    var documentTop = $(window).scrollTop();
    var documentBottom = documentTop + $(window).height();

    var elementTop = $loader.offset().top;

    if ((elementTop <= documentBottom) && (elementTop >= documentTop) && this.loading == false) {
        this.active = false;
        this.checkForNextPage();
    }
};

Licon.prototype.Components.prototype.Scrolltrigger.prototype.checkForNextPage = function ()
{
    console.log('yo');
    if(this.contentFinished === false)
    {
        this.Loader.setRequestData(this.pageData);
    }
};