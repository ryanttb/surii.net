# surii.net

A plugin to make working with the limitations of the 3DS's web browser a little easier and a website to host apps and games.

## Getting Started
Include surii.min.js and surii.css and start coding.

## Documentation
The latest docs and tests are hosted at: http://surii.net/hack

## Getting Hosted
The following are software quality checks that your app must pass before being hosted on surii.net.

* include surii.css
* include jQuery 1.8.0 from code.jquery.com before the closing body tag
* include surii.min.js before the closing body tag but after jQuery
* choose one of the following configurations:
** viewport initial-scale=1, body class=tiny, exactly one div element inside body
** viewport initial-scale=1, body class=skinny, exactly two div elements inside body
** viewport initial-scale=1, body class=skinnyscroll, exactly one div element inside body
** viewport initial-scale=2, body class=tbone, exactly two div elements inside body
** viewport initial-scale=2, body class=tbonescroll, exactly two div elements inside body
* include a 48x48 pixel icon named surii-icon.png in the root of your app
* include an explicit link rel="shortcut icon"

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

## Release History

### 1.0a1

## License
Copyright (c) 2012 Moose at Play
Project lead by Ryan Westphal
Licensed under the MIT, GPL licenses.
