# :star2: Photon
small and lightweight jquery alternaive

[![GitHub](https://img.shields.io/github/license/Ksengine/photon)](https://github.com/Ksengine/Photon/license) [![GitHub issues](https://img.shields.io/github/issues/Ksengine/Photon)](https://github.com/Ksengine/Photon/issues) [![npm](https://img.shields.io/npm/v/@ksengine/photon)](https://www.npmjs.com/package/@ksengine/photon) ![JavaScript Version](https://img.shields.io/badge/JS-ES5-blue)

| <img src="https://img.icons8.com/cotton/128/000000/box--v4.png"/> | <img bottom="5" src="https://img.icons8.com/ios/150/000000/javascript-logo-1.png"/> | <img src="https://img.icons8.com/ios/100/000000/globe--v1.png"/> |
|:-:|:-:|:-:|
|**Lightweight Footprint**|**ES5 like**|**Cross-Browser**|
|Only [![npm bundle size](https://img.shields.io/bundlephobia/minzip/@ksengine/photon?style=social)](https://cdn.jsdelivr.net/npm/@ksengine/photon/photon.min.js). Can also be included as an AMD module|like ECMAScript 2009, also known as ES5, was the first major revision to JavaScript.|Chrome, Edge, Firefox, IE, Safari, Android, iOS, and more|

## What is Photon?
**Photon** is an alternative for jQuery:smile:. Unlike:-1: jQuery, **Photon** injects:arrow_down_small: some polyfills to built-in javascript objects. Websites can use latest javascript APIs with **Photon**:+1::+1::+1:. They can work on any modern browser(from Internet Explorer 7):smile:. **Photon** will handle it from background:+1:.
**If you want to support older Browsers like Internet Explorer 8, Photon is perfect.**

## Start using Photon
Compressed:zipper_mouth_face: and uncompressed:open_mouth: copies of **Photon** files are available. The uncompressed file is best used during development or de:bug:ing(debugging); the compressed file saves bandwidth and improves performance in production. You can also download a sourcemap file for use when de:bug:ging(debugging) with a compressed file. The map file is not required for users to run Photon, it just improves the developer's de:bug:ger(debugger) experience. As of **Photon** 1.11.0/2.1.0 the //# sourceMappingURL comment is not included in the compressed file.

To locally download these files, right-click:computer_mouse: the link and select "Save as..." from the menu.

### Download:arrow_down: and include
Downloading Photon
There are two versions of Photon available for downloading:

- Production version - this is for your live website because it has been minified and compressed
- Development version - this is for testing and development (uncompressed and readable code)
Both versions can be downloaded from here.

The Photon library is a single JavaScript file, and you reference it with the HTML <script> tag (notice that the <script> tag should be inside the <head> section):
  
- Production version
```html
<head>
  <script src="Photon.min.js"></script>
</head>
```
- Development version
```html
<head>
  <script src="Photon.js"></script>
</head>
```

> **Tip:** Place the downloaded file in the same directory as the pages where you wish to use it.:exclamation:

### Using with a CDN
Photon CDN
If you don't want to download and host Photon yourself, you can include it from a CDN (Content Delivery Network).

![](https://www.jsdelivr.com/favicon.ico)
JS**DELIVR** CDN
- Production version
```html
<head>
  <script src="https://cdn.jsdelivr.net/npm/@ksengine/photon/photon.min.js"></script>
</head>
```
- Development version
```html
<head>
  <script src="https://cdn.jsdelivr.net/npm/@ksengine/photon/photon.js"></script>
</head>
```

## A Brief Look
### Date
The static Date.now() method returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
```javascript
console.log( Date.now() );
```
### Ajax example
Call a local script on the server /api/getWeather with the query parameter zipcode=97201 and replace the element #weather-temp's html with the returned text.
```javascript
var request = new XMLHttpRequest();
request.open('GET', '/api/getWeather', true);

request.onreadystatechange = function() {
  if (this.readyState === 4) {
    if (this.status >= 200 && this.status < 400) {
      // Success!
      document.getElementById( "weather-temp" ).innerHTML = "<strong>" + this.responseText + "</strong> degrees" ;
    } else {
      // Error :(
    }
  }
};

request.send();
request = null;
```

## Supported Features
Photon fixes following features
### Ajax
- [x] XmlHTTPRequest - ajax polyfill(need some more patches)
### String - `""`
- [x] String.trim()
### Array - `[]`
- [x] Array.isArray()
- [x] Array.forEach()
- [x] Array.map()
- [x] Array.filter()
- [x] Array.reduce()
- [x] Array.reduceRight()
- [x] Array.every()
- [x] Array.some()
- [x] Array.indexOf()
- [x] Array.lastIndexOf()
### JSON - `{ "id" : 5 } -> '{ "id" : 5 }'`
- [x] JSON.parse()
- [x] JSON.stringify()
### Date - `July 20, 69 00:20:18 GMT+00:00`
- [x] Date.now()

- [ ] "use strict" - (Hope todo)
- [ ] Property Getters and Setters(Cannot impliment)
- [ ] New Object Property Methods(TODO)


**Star Photon -** [![GitHub Repo stars](https://img.shields.io/github/stars/Ksengine/Photon?label=Star&style=for-the-badge)](https://github.com/Ksengine/Photon)

**Contribute -** [![GitHub Repo forks](https://img.shields.io/github/forks/Ksengine/Photon?label=Fork&style=for-the-badge)](https://github.com/Ksengine/Photon/fork)

<a href="https://icons8.com>icons by Icons8</a>
