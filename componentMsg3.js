Vue.component('message', {
    props: ['title', 'body'],

    data() {
        return {
            isVisiable: true
        }
    },

    template: 
        `
        <article class="message is-warning" v-show="isVisiable">
            <div class="message-header">
                {{ title }}
                <button class="button" @click="isVisiable=false">X</button>
            </div>
            <div class="message-body">
                {{ body }}
            </div>
        </article>
        `
});

new Vue({
    el: "#root",
});