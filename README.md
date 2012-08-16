# surii.net

A plugin to make working with the limitations of the 3DS's web browser a little easier and a website to host apps and games.

## Getting Started
Include surii.min.js and surii.css and start coding.

## Documentation
The latest docs and tests are hosted at: http://surii.net/hack

## Getting Hosted
The following are software quality checks that your app must pass before being hosted on surii.net.

* include surii.css
* include http://code.jquery.com/jquery-1.8.0.min.js before the closing body tag
* include surii.min.js before the closing body tag but after jQuery
* do not include other third-party libraries such as jQuery UI
* choose one of the following configurations:
** viewport initial-scale=1, body class=tiny, exactly one div element inside body
** viewport initial-scale=1, body class=skinny, exactly two div elements inside body
** viewport initial-scale=1, body class=skinnyscroll, exactly one div element inside body
** viewport initial-scale=2, body class=tbone, exactly two div elements inside body
** viewport initial-scale=2, body class=tbonescroll, exactly two div elements inside body
* include a 48x48 pixel icon named surii-icon.png in the root of your app
* include an explicit link rel="shortcut icon"
* title should be the exact name of your app
* apps should have an "L Close" button to return to surii.net home page
* spell Friend Code as two capitalized words
* surii.friendCode and surii.nickName are read-only, do not change them
* you must have an index.html file
* all initial content (layout, images, etc.) must be local; ajax can be used to get more later
* your app folder should match your app name exactly, including case

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

## Release History

### 1.0a1

## License
Copyright (c) 2012 Moose at Play
Project lead by Ryan Westphal
Licensed under the MIT, GPL licenses.
