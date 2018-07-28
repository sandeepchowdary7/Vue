Vue.component('coupon', {
    template: `<input placeholder="Enter Coupon Code" @blur="couponApplied">`,

    methods: {
        couponApplied(){
           this.$emit('applied');
        }
    }
         
});

new Vue({
    el: '#component',

    data () {
        return {
            appliedMsg: false
        }
    },

    methods: {
        onCouponApplied(){
          this.appliedMsg = true;
        }
    }
})