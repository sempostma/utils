// // <!-- example of presized image -->
// <style>
//     .presized-image {
//         default color
//         background-color: lightgray;
//         background-repeat: no-repeat;
//         background-size: contain;
//     }
// </style>
// <main>
//     <div id="imgcontainer">
//         <div class="presized-image" style="width: {img.width}; height: {img.height}; background: url({img.url});"></div>
//     </div>
// </main>

// var imagesArr = [
//     { width: 547, height: 551, url: 'https://i.imgur.com/wMkdxU6.jpg' }, { width: 551, height: 545, url: 'https://i.imgur.com/yAbiQCn.jpg' },
//     { width: 549, height: 549, url: 'https://i.imgur.com/4dMxwKv.jpg' }, { width: 4032, height: 3024, url: 'https://i.imgur.com/FmshcRe.jpg' },
//     { width: 555, height: 559, url: 'https://i.imgur.com/xFlu99M.jpg' }, { width: 667, height: 543, url: 'https://i.imgur.com/KVF3Dad.jpg' }];
// var target = document.getElementById('imgcontainer');
// createPresizedImages(imagesArr);

/**
 * Takes in a array of objects containing the following properties: url, width and height.
 * @param {object[]} images - An array of objects containing the following properties: url, width, height and ?color.
 * @param {string} color - The default color
 * @returns {HTMLElement[]} The presized image elments
 */
function createPresizedImages(images, color) {
    var res = [];
    for (var i = 0; i < images.length; i++) {
        var newImg = document.createElement('div');
        var ratio = images[i].height / images[i].width;
        newImg.setAttribute('class', 'presized-image');
        newImg.setAttribute('style', 'padding-bottom: ' + ratio * 100 + '%; background: url(' + images[i].url + ') no-repeat center center; background-size: contain; background-color: ' + (images[i].color || color || '') + ';');
        res.push(newImg);
    }
    return res;
}
/**
 * Takes in an object containing the following properties: url, width and height.
 * @param {object} image - An object containing the following properties: url, width and height.
 * @returns {HTMLElement} The presized image elment
 */
function createPresizedImg(image, color) {
    return createPresizedImages([image], color)[0];
}