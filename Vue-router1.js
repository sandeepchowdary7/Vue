//create Route-Components
const Foo = { template: `<div>foo here</div>` }
const Bar = { template: `<div>bar here</div>` }

//defining some routes. Each route should map to a component
const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
]

//create Router Instance
const router = new VueRouter({
    routes
})

//Create and Mount root Instance
new Vue({
    router
}).$mount('#app')