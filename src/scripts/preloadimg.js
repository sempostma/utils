/**
 * @param {string[]} urls - array of valid urls
 * @return {Image[]} - images returned
 * Preloaded images will always be stored in the global variable "window.__img_preloaded__"
 * Use this function if you know you will be loading these images, but it takes a while for an asset with the image reference/url, to load.
 */
function preload(urls) {
    var images = []
    for (var i = 0; i < urls.length; i++) {
        images[i] = new Image()
        images[i].src = urls[i]
    }
    // prevent gargbage collection
    window.__img_preloaded__ = window.__img_preloaded__ || [];
    window.__img_preloaded__.concat(images);
    return images;
}