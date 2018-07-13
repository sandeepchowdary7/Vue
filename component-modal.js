Vue.component('modal', {

	template: `
		<div class="modal is-active">
			<div class="modal-background"></div>
			  	<div class="modal-content">
			  		<div class="box">
				    	<p>
				    		Hey, Welcome to my page!
				    	</p>
				    </div>
				</div>
			</div>
			<button class="modal-close is-large" aria-label="close"></button>
		</div>
	`
});

new Vue({
	el: "#root"
});