import {ref, reactive} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"

export default {
    setup() {
        const shownav = ref(false)
        const menulist = reactive([
            {menu: 'About', link: 'index.html#about'},
            {menu: 'Skills', link: 'index.html#skills'},
            {menu: 'Works', link: 'index.html#works'},
        ])

        return {
            shownav,
            menulist
        }
    },
    template: `
        <button @click="shownav=true" class="nav__sp">
            <img src="assets/images/menu.svg" alt="menubtn">
        </button>

        <teleport to="body">
            <transition name="navtr">
                <div v-if="shownav" class="nav__modal">
                    <header class="gheader">
                        <img class="logo" src="assets/images/logo.jpg" alt="logo">
                        <div class="nav__sp" @click="shownav=false">
                            <img src="assets/images/close.svg" alt="closebtn">
                        </div>
                    </header>
                    <ul class="nav__list">
                        <li class="nav__item" v-for="menuitem in menulist" :key=menuitem.menu>
                            <a @click="shownav=false" :href="menuitem.link">{{menuitem.menu}}</a>
                        </li>
                    </ul>
                </div>
            </transition>
        </teleport>

        <div class="nav__pc">
            <ul class="nav__list">
                <li class="nav__item" v-for="menuitem in menulist" :key=menuitem.menu>
                    <a @click="shownav=false" :href="menuitem.link">{{menuitem.menu}}</a>
                </li>
            </ul>
        </div>
    `
}