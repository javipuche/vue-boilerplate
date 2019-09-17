const glob = require('glob')
const { join, normalize, resolve } = require('path')

const getPath = (entries, path, outpath) => {
    const outputPath = {}

    entries.forEach((item) => {
        outputPath[join(outpath, `${normalize(item).split(join(path, '/'))[1].split('.')[0]}`)] = normalize(resolve(item))
    })

    return outputPath
}

const entries = () => {
    const scss = getPath(glob.sync('./src/assets/scss/[^_]*.scss'), 'src/assets/scss', 'assets/css')
    const js = getPath(glob.sync('./src/assets/js/[^_]*.js'), 'src/assets/js', 'assets/js')
    console.log(scss)

    return Object.assign(scss, js)
}

module.exports = entries
