Vue.component('task', {
    props: ['data'],
    methods: {
        task_done: function(){
            this.$emit('task_done');
        }

    },
    template: `
    <div class="task">
        <div>
            <h3 class="task__title">{{data.title}}</h3>
            <p class="task__desc">{{data.desc}}</p>
        </div>
        <button @click="task_done()" class="task__done">✔️</button>
    </div>
    `
})
let vue = new Vue({
    el:'#app',
    data: {
        new_task: {
            title: '',
            desc: ''
        },
        tasks: [
            {
                title: 'vue js',
                desc: 'read book vue js'
            },
            {
                title: 'record video',
                desc: 'record vue js'
            }
        ]
    },
    methods: {
        delete_task(id){
            this.tasks.splice(id, 1);
        },
        add_task() {
            if(this.new_task!='') {
                this.tasks.push({
                    title: this.new_task.title,
                    desc: this.new_task.desc
                });
                this.new_task.title = '';
                this.new_task.desc = '';
            }
        }

    }
});