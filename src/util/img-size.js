const { promisify } = require('util');
const ris = require('request-image-size');
const is = promisify(require('image-size'));
const path = require('path');

const imgInfo = exports.imgInfo = url => {
    switch(/https?/.test(url)) {
        case true: return ris(url);
        case false: return is(path.join(__dirname, url));
        default: throw Error();
    }
}
const imagesInfo = exports.imagesInfo = urls =>
    Promise.all(urls.map(imgInfo));

exports.imagesInfo(['./capture.png', 'https://www.w3schools.com/howto/img_fjords.jpg'])
    .then(objs => {
        console.log('objs', objs);
    })
    .catch(err => {
        console.error(err);
    });



