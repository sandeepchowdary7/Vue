Vue.component('modal', {
    template: 
    `
     <div class="modal is-active">
        <div class="modal-background"></div>

        <div class="modal-card">

        <header class="modal-card-head">
            <p class="modal-card-title">Modal title</p>
            <slot name="header"></slot>
            <button class="delete" aria-label="close"></button>
        </header>

        <section class="modal-card-body">
                 <slot></slot>
        </section>

        <footer class="modal-card-foot">
            <slot name="footer"></slot>
        </footer>

        </div>
    </div>
    `
});

new Vue({
    el: "#slot"
})
