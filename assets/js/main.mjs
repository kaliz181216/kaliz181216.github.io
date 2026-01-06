import {createApp, ref, reactive} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"

createApp({
    setup(){
        const shownav=ref(false)
    },
    template:`
        <button @click="shownav=true" class="nav__btn">
            <img src="assets/images/menu.svg" alt="menubtn">
        </button>


        <Teleport to="body">
            <div v-if="shownav" class="nav__modal">
                
            </div>
        </Teleport>

        <ul class="nav__list">
            <li class="nav__item">About</li>
            <li class="nav__item">Skills</li>
            <li class="nav__item">Works</li>
        </ul>
    </nav>
    `
}).mount('#nav');