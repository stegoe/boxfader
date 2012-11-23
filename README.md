# Boxfader

jQuery plugin for cross-fading images

#### Dependencies

jQuery, nothing more.

#### Compatibility

Should work fine in all modern browser, still to be tested in legacy browsers.

## Usage

```html
<div class="kopfbilder">
	<img src="/_p/img1.png">
	<img src="/_p/img2.png">
	<img src="/_p/img3.png">
</div>
```
## Calling

```js
$('.kopfbilder').boyfader( [ options ] );
```

### [options]

**speed:** `default: 1000` Speed of the fading animation in milliseconds.
**duration:** `default: 3000` Time between two animations in milliseconds.
**element:** If another Element instead of img (or whatever the first one is) should be used.


## Roadmap

Not much ahead. Setting up a demo and maybe port to work with Zepto.

