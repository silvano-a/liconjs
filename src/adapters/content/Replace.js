/**
 * Adapter which functions as Ajax RequestManager.
 *
 * @param loader
 * @param settings
 * @constructor
 */
Licon.prototype.Adapters.prototype.Replace = function (loader, settings)
{
    this.settings = settings;
    this.Loader = loader;
};

/**
 * shows the content.
 *
 * @param content
 */
Licon.prototype.Adapters.prototype.Replace.prototype.showContent = function (content)
{
    this.settings.$element.html(content);
};

/**
 * Initializes the stage.
 *
 * @param settings
 */
Licon.prototype.Adapters.prototype.Replace.prototype.createStage = function (settings)
{
    this.$liconWrapper = $("<div/>", {
        class : 'licon-js-wrapper'
    });

    this.$contentWrapper = $("<div/>", {
        class : 'licon-js-content-wrapper'
    });

    this.$liconWrapper.html(this.$contentWrapper);

    this.$liconWrapper[settings.navigationLocation](settings.$navigation);
    this.settings.$element.html(this.$liconWrapper);
};