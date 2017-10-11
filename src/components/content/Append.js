/**
 * Adapter which functions as Ajax RequestManager.
 *
 * @param loader
 * @param settings
 * @constructor
 */
Licon.prototype.Components.prototype.Append = function (loader, settings)
{
    this.settings = settings;
    this.Loader = loader;
};

/**
 * shows the content.
 *
 * @param content
 */
Licon.prototype.Components.prototype.Append.prototype.showContent = function (content)
{
    this.$contentWrapper.append(content);
};

/**
 * Initializes the stage.
 *
 * @param settings
 */
Licon.prototype.Components.prototype.Append.prototype.createStage = function (settings)
{
    this.$liconWrapper = $("<div/>", {
        class : 'licon-js-wrapper'
    });

    this.$contentWrapper = $("<div/>", {
        class : 'licon-js-content-wrapper'
    });

    this.$liconWrapper.html(this.$contentWrapper);

    // Load the navigation into the wrapper
    this.$liconWrapper[settings.navigationLocation](settings.$navigation);
    
    this.settings.$element.trigger({
        type: 'licon-navigation-preloaded',
        navigation: settings.$navigation
    });

    this.settings.$element.html(this.$liconWrapper);
    this.settings.$element.trigger({
        type: 'licon-stage-loaded',
        stage: this.$liconWrapper
    });
};

