Vue.component('task-list', {
	template:
	'<div>
		<task v-for="task in tasks"> {{ task.task }} </task>

	</div>',

	data(){
		return {
			tasks: [

			{ task: "Go to Shop", complete:TRUE },
			{ task: "Go to Bank", complete:TRUE },
			{ task: "Go to Home", complete:TRUE }

			]
		};
	}
});

new Vue({
	el: "#root"
})

