# preview-card
A sizable, skinnable Vue.js card component that provides a button for modal display of overflowed content

## Demo

Click [here](http://google.com) for a demo.

## Usage
Install, require and put in your HTML.  See below for more detail:
##### 1. In a shell
```shell
npm install --save-dev preview-tile
```

##### 2. In your code
``` javascript
const Vue = require ('vue');
const PreviewTile = require ("preview-tile");
const vue = new Vue ({
    el: "#app",
    data: {},
    components: {
        "preview-title": PreviewTitle
    }
})
```

##### 3. In your HTML
``` html
<preview-tile transition="fade" header="My Header" 
footer="The country of Montenegro" front-title="Montenegro" back-title="Details" width="200px" height="400px">
    <div slot="front">
        Front content here
    </div>
    <div slot="back">
        Back content here
    </div>
</preview-tile>
```

## How to Skin

To skin -- modify any of the following css classes (use !important if you want to override an existing property):

.preview-card-container 
.preview-card-footer-text 
.preview-card-footer-button 
.preview-card-footer
.preview-card-front
.preview-card-header

## Notes
This has been bundled with accompanying css via WebPack.
The Vue library was bundled as an external library.
You will need to use WebPack yourself to bundle Vue or reference it in your HTML.

