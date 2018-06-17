Vue.component('editable-span', {
    props: ['preview','value'],
    template: `
            <span class="edit">
                <span v-show="!editing">{{value}}</span>
                <input v-show="editing" type="text" @input='notify' v-on:click.prevent @keydown.enter="editing = !editing"></input>
                <button v-show='!preview' v-on:click.prevent="editing = !editing">Edit</button>
            </span>
            `,
    data: function () {
        return {
            editing: false,
        }
    },
    methods: {
        notify: function (event) {
            let result = event.target.value.trim().length === 0 ? 'Inputing...' : event.target.value;
            this.$emit('update', result)//发出一个名字叫update的event，值:event.target.value
        }
    }
});