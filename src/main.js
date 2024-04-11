import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'flowbite';

import Trix from "trix";
import "trix/dist/trix.css";



Trix.config.blockAttributes.default.tagName = "p";
Trix.config.blockAttributes.default.breakOnReturn = true;

Trix.Block.prototype.breaksOnReturn = function () {
    const attr = this.getLastAttribute();
    const config = Trix.config.blockAttributes[attr ? attr : "default"];
    return config ? config.breakOnReturn : false;
};

Trix.LineBreakInsertion.prototype.shouldInsertBlockBreak = function () {
    if (this.block.hasAttributes() && this.block.isListItem() && !this.block.isEmpty()) {
        return this.startLocation.offset > 0;
    } else {
        return !this.shouldBreakFormattedBlock() ? this.breaksOnReturn : false;
    }
};




const app = createApp(App)
app.use(router)
app.mount('#app')

