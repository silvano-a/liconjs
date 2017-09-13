/**
 * Licon constructor
 *
 * @constructor
 */
function Licon()
{
    this.settings = {
        requestType : 'Ajax',
        contentHandler : 'Replace',
        navigationType: 'Scrolltrigger',
        targetUrl : false
    };
    this.instances = [];
    this.counter = 0;
}

/**
 * Handles jQuery calls.
 * 
 * @param {*|jQuery|HTMLElement} $object
 * @param {Object} settings
 */
Licon.prototype.handleCall = function($object, settings)
{
    settings.$element = $object;

    if (this.instances[$object.attr('data-licon-id')] instanceof this.Loader) {
        // Licon already exists. do nothing yet..
    } else {
        $object.attr('data-licon-id', this.counter);

        var instanceSettings = $.extend(this.settings, settings);
        if (instanceSettings.targetUrl === false) {
            return;
        }
        this.instances[this.counter] = new this.Loader(this, instanceSettings);
        this.instances[this.counter].initialize();
        this.counter ++;
    }
    return this;
};