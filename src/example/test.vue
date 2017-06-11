<template>
    <div>
        <p>
            The preview-card is a vuejs flip card component that automatically handles overflow. You can add the component to your project by running 'npm install --save preview-card'.
        </p>
        <p> You can find more information and examples of how to use the preview-card flip card by hovering and clicking on the preview-card examples below or by visiting the <a href="http://github.com/wakecoder">wakecoder github page </a>
        </p>
    
        <div id="exampleApp" class="container">
            <preview-card class="preview-card-padding fixed-card" transition="fade" flip-on-hover="true">
                <template slot="front" class="card" scope="ignore">
                    <flip-transition>
                        <div>
                            <img src="static/cat.png" width="254" height="300">
                            <div class="title">
                                CAT
                            </div>
                        </div>
                    </flip-transition>
                </template>
                <template slot="back" class="card" scope="ignore">
                    <flip-transition>
                        <div>
                            <p>
                                Once you have installed the preview-card via npm, add content to the front and back slots. The component will automatically handle displaying content on the front and will 'flip' to display content on the back when hovered or clicked.
                            </p>
                            <p>
                                This behavior (flip on hover) is modifiable via the flip-on-hover prop. Set flip-on-hover to false and the card will only flip when the user clicks the card. While you are not required to set a width and height, it's typically best to do so as the preview-card looks best when front and back are the same size. Simply set the width and height props and you're good to go!
                            </p>
                            <p>
                                The preview-card was written in TypeScript and was intended to be flexible. Nearly all styling is accomplished by adding content in the front or back slots. Any additional styling that needs to be modified can be done by overriding the following classes: preview-card-front, preview-card-back summary-mask, content-summary and summary-button For more information, please see: http:github.com/wakecoder If you use the preview-card flip card, please let us know on our blog: <a href="http://www.wakecoder.com">www.wakecoder.com</a> or on twitter
                                <a href="http://twitter.com/wakecoder">@wakecoder</a>
                            </p>
                        </div>
                    </flip-transition>
                </template>
            </preview-card>
            <preview-card class="preview-card-padding fixed-card" transition="flip" flip-on-hover="true">
                <template slot="front" class="card" scope="ignore">
                    <bounce-transition>
                        <div>
                            <img src="static/dog.png" width="254" height="300">
                            <div class="title">
                                DOG
                            </div>
                        </div>
                    </bounce-transition>
                </template>
                <template slot="back" class="card" scope="ignore">
                    <bounce-transition>
                        <div>
                            <p>
                                Vuejs is an excellent JavaScript framework that has a simple and extensible API. Its popularity has been growing significantly in the last several years. It has become one of the top three front-end JavaScript frameworks (Angular and React being the other two)
                            </p>
                            <p>
                                The preview-card is a VueJs flip card component that allows you to add custom content to the front and back sides of the card. You can add content to the back of the card without concern for overflow. If you add more content than the card can display, a small banner is displayed at the button of the card along with a 'more' button
                            </p>
                            <p>
                                Clicking the 'more' button causes a srollable modal to appear that contains all of the content. This is useful in many situations. For example, 'about us' tiles where the front is a picture and the back is a lengthy bio. Or, any situation where you want to provide more information on a particular topic and don't have enough space to display all of the content.
                            </p>
                        </div>
                    </bounce-transition>
                </template>
            </preview-card>
            <preview-card class="preview-card-padding fixed-card" transition="flip">
                <template slot="front" class="card" scope="ignore">
                    <fade-transition>
                        <div>
                            <img src="static/mouse.png" width="254" height="300">
                            <div class="title">
                                MOUSE
                            </div>
                        </div>
                    </fade-transition>
                </template>
                <template slot="back" class="card" scope="ignore">
                    <fade-transition>
                        <div>
                            <p>
                                <h3>Additional Options</h3>
                                <h4>One-sided</h4>
                                <p>
                                    If you do not set any content in the front slot, the preview-card will display a tile with a 'more' button and scrolling modal when cotent overflows.
                                </p>
                                <h4>Props</h4>
                                <ul>
                                    <li>
                                        <i>width</i> - specifies the width of the card (pixels or percent)
                                    </li>
                                    <li>
                                        <i>height</i> - specifies the height of the card (pixels or percent)
                                    </li>
                                    <li>
                                        <i>flip-on-hover</i> - specifies whether the preview-card flip card should flip when the mouse passes over the card
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </fade-transition>
                </template>
            </preview-card>
        </div>
    </div>
</template>
<style>
.preview-card-padding {
    padding: 10px;
}

.fixed-card {
    max-height: 340px;
    width: 40%;
}

.container {
    display: flex;
    flex-wrap: wrap;
    width: 70vw;
    max-width: 850px;
    margin-left: auto;
    margin-right: auto;
}

.title {
    background-color: gray;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    font-size: 2em;
    text-align: center;
}

p {
    padding: 10px;
}
</style>
<script>
import previewCard from '../preview-card.vue'
import fadeTransition from '../fade-transition.vue'
import flipTransition from '../flip-transition.vue'
import bounceTransition from '../bounce-transition.vue'
export default {
    components: {
        previewCard,
        fadeTransition,
        flipTransition,
        bounceTransition
    }
}

</script>
