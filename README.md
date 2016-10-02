# preview-card
A sizable, skinnable Vue.js card component that provides a button for modal display of overflowed content

## Demo

Coming soon...

## Usage
Install, require and put in your HTML.  See below for more detail:
##### 1. In a shell
```shell
npm install --save-dev preview-card
```

##### 2. In your code
``` javascript
const Vue = require ('vue');
const PreviewCard = require ("preview-card");
const vue = new Vue ({
    el: "#app",
    data: {},
    components: {
        "preview-card": PreviewCard
    }
})
```

##### 3. In your HTML
``` html
<preview-card transition="fade" width="200px" height="400px">
    <div slot="front">
        Front content here
    </div>
    <div slot="back">
        Back content here
    </div>
</preview-card>
```

## How to Skin

To skin -- modify any of the following css classes (use !important if you want to override an existing property):

.preview-card-container 
.preview-card-front
.preview-card-back

## Notes
This has been bundled with accompanying css via WebPack.
The Vue library was bundled as an external library.
You will need to use WebPack yourself to bundle Vue or reference it in your HTML.

