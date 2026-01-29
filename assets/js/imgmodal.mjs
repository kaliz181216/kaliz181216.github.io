import {ref, reactive} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"

export default {
    props: {
        imgprop:Object
    },
    setup(){
        const showmodal=ref(false)

        return{
            showmodal
        }
    },
    template: `
        <div class="img__wrapper">
            <button @click="showmodal=true" class="img__item">
                <img :src="imgprop.src" :alt="imgprop.alt">
            </button>
            <div class="img__caption">
                <slot name="imageCaption">caption</slot>
            </div>
        </div>

        <teleport to="body">
            <transition name="imgtr">
                <div v-if="showmodal" @click="showmodal=false" class="modal__container">
                    <header class="modal__header">
                        <button class="modal__close">
                            <img src="assets/images/close_white.svg" alt="">
                        </button>
                    </header>
                    <div class="modal__item" @click="showmodal=false">
                        <img :src="imgprop.src" :alt="imgprop.alt">
                    </div>                    
                </div>
            </transition>
        </teleport>
    `
}