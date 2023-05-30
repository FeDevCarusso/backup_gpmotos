const {pathName} = require('../../storage/path.cjs')

function getImagesMiddleware(image, res) {
    // pathName
    //  // return res.sendFile(storagePath + `/${image}`);
    return res.sendFile(`${pathName}/${image}`)
}

module.exports = {
    getImagesMiddleware
}