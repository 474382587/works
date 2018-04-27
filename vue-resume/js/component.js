Vue.component('editable-span', {
    props: ['value'],
    template: `
            <span class="edit">
                <span>{{value}}</span>
                <input v-show="editing" type="text" @input='notify'></input>
                <button v-on:click="editing = !editing">Edit</button>
            </span>
            `,
    data: function () {
        return {
            editing: false,
        }
    },
    methods: {
        notify: function (event) {
            this.$emit('update', event.target.value)//发出一个名字叫update的event，值叫做event。target。value
        }
    }
});