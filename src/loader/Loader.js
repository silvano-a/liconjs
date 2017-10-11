/**
 * The base of the Licon plugin.
 * This will load all adapters, components and events.
 *
 * @param Licon
 * @param settings
 * @constructor
 */
Licon.prototype.Loader = function (Licon, settings)
{
    this.Application = Licon;
    this.settings = settings;
    this.components = [];
};

/**
 * Initializes all components and registers adapters.
 */
Licon.prototype.Loader.prototype.initialize = function ()
{
    this.Components = new this.Application.Components();

    console.log(this.Components);

    this.initializeComponent('RequestManager', this.settings.requestType);
    this.initializeComponent('ContentManager', this.settings.contentHandler);

    this.settings.$element.trigger('licon-preload');
    this.initializeComponent('NavigationManager', this.settings.navigationType);

    this.initializeStage();
    this.loadData();
};

/**
 * Instantiates an component class into the components array.
 *
 * @param key
 * @param component
 */
Licon.prototype.Loader.prototype.initializeComponent = function (key, component)
{
    this.components[key] = new this.Components[component](this, this.settings);
};

Licon.prototype.Loader.prototype.loadData = function ()
{
    this.components.RequestManager.load();
};

/**
 * This calls all functions needed, and collects all requirements from adapters to be sent
 * to the ContentManager.
 */
Licon.prototype.Loader.prototype.initializeStage = function ()
{
    var navigationSettings = this.components['NavigationManager'].getNavigation();

    this.components.ContentManager.createStage(navigationSettings);
};

/**
 * Callback for when the Request manager is done with the request.
 *
 * @param data
 */
Licon.prototype.Loader.prototype.RequestManagerCallback = function (data)
{
    this.components['ContentManager'].showContent(data);
};

