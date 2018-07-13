Vue.component('task-list', {
	template: '<div><task v-for="task in tasks" :key="task.id"> {{ task.task }} </task></div>',

	data() {
		return {
			tasks: [
				{ task: 'Go to Shop', completed: true },
				{ task: 'Buy some eggs', completed: true },
				{ task: 'Bring some milk', completed: false }
			]
		};
	}
});

Vue.component('task', {
	template: '<li><slot></slot></li>'
});

new Vue({
	el: "#root"
});