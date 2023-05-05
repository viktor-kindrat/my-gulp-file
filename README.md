# My personal gulpfile

This Gulpfile is used to compile Sass files and convert images to WebP format for the Project Name web application. It uses Gulp to automate these tasks and save time during development. The Gulpfile includes three tasks: compileStyles to compile Sass files, watchSass to watch for changes to Sass files and automatically compile them, and imgConvert to convert all images to WebP format. The Gulpfile uses gulp-sass to compile Sass files and gulp-webp to convert images to WebP format.

## Installation

1. Clone the repository to your local machine.
2. Install dependencies by running `npm install` in the project directory.

## Usage

To compile Sass files, run:

```
gulp compileStyles
```

To watch for changes to Sass files and automatically compile them, run:

```
gulp watchSass
```

To convert all images to WebP format, run:

```
gulp imgConvert
```

## Gulp Tasks

- `compileStyles`: Compiles Sass files into CSS.
- `watchSass`: Watches for changes to Sass files and automatically compiles them.
- `imgConvert`: Converts all images to WebP format.

## Technologies Used

- [Gulp](https://gulpjs.com/)
- [gulp-sass](https://www.npmjs.com/package/gulp-sass)
- [gulp-webp](https://www.npmjs.com/package/gulp-webp)

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
