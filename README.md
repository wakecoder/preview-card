# preview-card
A sizable, skinnable Vue.js card component that provides a button for modal display of overflowed content

## Demo

View a demo at the [wakecoder blog](http://www.codeofmanycolors.com/blog/preview-card-a-flip-card-with-automatic-overflow-handling/) or check out the code in the example folder

## Usage
Install, require (or import) and put in your HTML.  NOTE: In most cases you will want to specify a height for the card so the front and back are the same size. This can be done via CSS. See below for more detail:
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
<preview-card transition="fade" style="height: 340px">
    <template slot="front" scope="ignore">
        Front content here
    </template>
    <template slot="back" scope="ignore">
        Back content here
    </template>
</preview-card>
```

