# divjs
A jQuery plugin for printing specific selection/element with customization.

## Features
- Select specific `HTML` element.
- Load body `CSS` with extra `CSS`.
- Hide specific element during print.
- Customize document page.

## To Do
 - Override `HTML` attribute (replace).
 - Auto reponsive.

## Getting started

clone `divjs` repo or download it in your project directory.
```bash
git clone https://github.com/zxalif/divjs.git
```

Add `divjs.js` after [`jQuery`](http://code.jquery.com/)

```JavaScript
<script src="http://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
<script type="text/javascript" src="divjs/divjs.js"></script>
```

## Documentation
### select an element

Just select an element to print it.
__example__
```JavaScript
$('#example').printElement();
```

### Current `divjs` support five(5) options
 - title: The title of the print document.
 - css: Loading internal `css`.
 - ecss: Loading customize sytles for print.
 - lcss: List of local `css` to be add.
 - keepHide: Hide this selection in document page (no need to print this).

### change title

To change the document title
```JavaScript
$('#example').printElement({
	title: 'New title for Window' // default is page title
});
```

### loading internal css

Loading page `css`. 
`css:` options are 3 types.
 1. `extend` to load all the `css` (links and styles) of `this` page.
 2. `style` to load only `css` in `style` tag.
 3. `link` loads only links `css`.

__Example (extend)__
It will load all kind of `styles`.
```JavaScript
$('#example').printElement({
	title: 'Loading all styles in this page.',
	css: 'extend' // it will load all `css`
});
```

__Example (style)__
It will load only styles in style tag.
```JavaScript
$('#example').printElement({
	title: 'Loading only css of style tag.',
	css: 'style'
});
```

__Example (link)__
To load link `css` use `link`.
```JavaScript
$('#example').printElement({
	title: 'Loading link css',
	css: 'link'
});
```

### inserting extra css
The options `ecss` used to perform loading customize of some `style`.
__Example__
```JavaScript
$('#example').printElement({
	title: 'Loading link css',
	css: 'link',
	ecss: '.active{background-color: red;} #counter{background-color: #000; color: #fff;}'
});
```

### inserting extra css
Loading link extra `css`.
`lcss: [] // lcss is an array to used load extarnal or cdn.`

__Example__
```JavaScript

$('#example').printElement({
	title: 'Loading link css',
	css: 'link',
	ecss: '.active{background-color: red;} #counter{background-color: #000; color: #fff;}',
	lcss: ['example.css', '/local/css/print.css']
});
```

## Author

 [Alif Jahan](https://github.com/zxalif/)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)

**Free Software, Hell Yeah!**