# laravel-elixir-cssfmt

Laravel Elixir CSSfmt Extension

## Installation

```sh
$ npm install --save-dev laravel-elixir-cssfmt
```

### Usage

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-cssfmt');

elixir(function(mix) {
   mix.cssfmt('resources/assets/sass/src/**/*', 'resources/assets/sass/dest');
});
```

