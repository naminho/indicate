# indicate - Scroll Indicator Plugin
Fade effect and arrows for responsive tables and iframes with no dependencies.

Size: 4.5 kB gzipped (including 0.5 kB CSS)

## Description
Modern Browsers and especially Mobile Devices often don't show permanent scrollbars. Scrollbars on mobile devices are not necessary since the user scrolls simply by dragging. The problem with this however is that users might miss the possibility to scroll a certain window to see more. This applies mostly to `<table>` and `<iframe>` elements.
Through a fade effect on the sides this plugin tries to indicate the possibility to scroll.

## Demo
[Demo](http://naminho.ch/scroll-indicator)

## Installation

### ES6 Module

```
npm i indicate
```

```
import Indicate from 'indicate'
import 'indicate/dist/indicate.css'

const instance = new Indicate(document.getElementById('target'))
```

## Manual Installation

Download the files from the `/dist` folder and include them in your page.

```
<html>
  <head>
    ...
    <link rel="stylesheet" type="text/css" href="indicate.css">
  </head>
  <body>
    ...
    <script src="indicate.min.js"></script>
    <script>
      var instance = new Indicate(document.getElementById('target'));
    </script>
  </body>
</html>
```

## Usage

```
new Indicate(node: HTMLElement, options: {})
```

## Options

### Fade Color

```
new Indicate(node, {color: #0000FF});
```

### Arrows

The arrows can be hidden like this.
```
new Indicate({arrows: false});
```

### Directions

The effect can be enabled horizontally (default) and vertically.

```
new Indicate({vertical: true});
```

### Arrow Position

Where the horizontal arrows should be positioned (start, end), default is center.

```
new Indicate({arrowPosition: 'start'});
```

## Plugins

### jQuery

indicate itself does not require jQuery but there is a plugin to use it with jQuery.

```
<link rel="stylesheet" type="text/css" href="indicate.css">

<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="dist/indicate.min.js"></script>
<script src="plugins/indicate.jquery.js"></script>
<script>

// Initialize indicate on all table elements.
$('table').indicate()

// and options can be passed.
$('table').indicate({arrows: true});
</script>
```

## Development

```
npm i
npm start
```

To create a production build run

```
npm run build
```

## Browser Support

IE11+
