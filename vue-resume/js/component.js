Vue.component('editable-span', {
    props: ['preview','value'],
    template: `
            <span class="edit">
                <span v-show="!editing">{{value}}</span>
                <input v-show="editing" type="text" @input='notify'></input>
                <button v-show='!preview' v-on:click="editing = !editing">Edit</button>
            </span>
            `,
    data: function () {
        return {
            editing: false,
        }
    },
    methods: {
        notify: function (event) {
            this.$emit('update', event.target.value)//发出一个名字叫update的event，值:event.target.value
        }
    }
});