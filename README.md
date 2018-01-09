# Chrome extension prototype

This package contains the chrome extension sample presented in the [Getting Started](https://developer.chrome.com/extensions/getstarted) documentation of Chrome plus test driven development.
It is part of the [educational repositories](https://github.com/pandle/materials) to learn how to write stardard code and common uses of the TDD.

See the development of this code step by step with [see-git-steps](https://github.com/bilardi/see-git-steps).

## Installation

The package is self-consistent but if you want to test it-self, you need internet for testing with [Jasmine](https://jasmine.github.io/) (Behavior-Driven JavaScript).

## Usage

Run the unit tests with [test/SpecRunner.html](test/SpecRunner.html) file on your browser to use javascript scripts functions. This is a best practice.

## Development

The Javascript language is very permissive, but if you use a basic documentation like [JSDoc](http://usejsdoc.org/) and unit / functional test like Jasmine, everyone can easily read your code!

It is common use to test the code step by step and Jasmine is a good beginning for unit test and functional test.

Test with Jasmine is simple
* create your test/spec/testScript.js
* add it into test/SpecRunner.html in the spec files space
* create your js/Script.js
* add it into test/SpecRunner.html in the source files space
* open test/SpecRunner.html on your browser and good luck!

## License

This package is released under the MIT license.  See [LICENSE](LICENSE) for details.
