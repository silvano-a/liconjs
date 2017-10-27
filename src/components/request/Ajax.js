/**
 * Adapter which functions as Ajax RequestManager.
 *
 * @param loader
 * @param settings
 * @constructor
 */
Licon.prototype.Components.prototype.Ajax = function (loader, settings)
{
    this.settings = settings;
    this.Loader = loader;
};

/**
 * Executes ajax request to target URL.
 */
Licon.prototype.Components.prototype.Ajax.prototype.load = function ()
{
    $.post( this.settings.targetUrl, $.proxy( this.handleRequestComplete, this));
};

/**
 * Sends the data back to the loader which prompted the load.
 *
 * @param data
 */
Licon.prototype.Components.prototype.Ajax.prototype.handleRequestComplete = function (data)
{
    this.Loader.RequestManagerCallback(data);
};
