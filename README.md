# preview-card
A sizable, skinnable Vue.js card component that provides a button for modal display of overflowed content

## Demo

View a demo at the [wakecoder blog](http://www.codeofmanycolors.com/blog/preview-card-a-flip-card-with-automatic-overflow-handling/) or check out the code in the example folder

## Usage
Install, require (or import) and put in your HTML.  See below for more detail:
##### 1. In a shell
```shell
npm install --save-dev preview-card
```

##### 2. In your code
``` javascript
const Vue = require ('vue');
import previewCard from "preview-card/src/preview-card.vue";
const vue = new Vue ({
    el: "#app",
    data: {},
    components: {
        "preview-card": previewCard
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

