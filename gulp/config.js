const dirs = {
    src: 'src',
    dest: 'dist'
}

export const pugPaths = {
    src: `${dirs.src}/pug/*.pug`,
    dest: `${dirs.dest}/`
}

export const stylusPaths = {
    src: `${dirs.src}/stylus/*.styl`,
    dest: `${dirs.dest}/assets/css/`
}

export const babelPaths = {
    src: `${dirs.src}/babel/*.js`,
    dest: `${dirs.dest}/assets/js/`
}

export const imagePaths = {
    src: `${dirs.src}/images/`,
    dest: `${dirs.dest}/assets/images/`
}

export const fontPaths = {
    src: `${dirs.src}/fonts/**/*.*`,
    dest: `${dirs.dest}/assets/fonts/`
}

export const libPaths = {
    src: `bower_components/**`,
    dest: `${dirs.dest}/assets/libs/`
}