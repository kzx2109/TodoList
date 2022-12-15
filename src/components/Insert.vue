<template>
    <div class=" w-7/12 h-full flex my-8">
        <div class="w-11/12">
            <input @change="todoTextChange"  v-bind:value="todoText" type="text" placeholder="請輸入代辦事項" class="w-full h-12 rounded-md border-slate-800 px-5 text-xl border-4">
        </div>
        <div class="w-1/12 flex justify-center items-center">
            <div @click="addTodoI" class="text-xl cursor-pointer p-2 rounded-md hover:bg-orange-300 bg-amber-200">新增</div>
        </div>
        
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import {v1} from 'uuid';
export default {
    data(){
        return{
            todoText:""
        }
    },
    methods:{
        ...mapActions(["addTodo"]),
        todoTextChange(e){
            this.todoText=e.target.value;
        },
        addTodoI(){
            this.addTodo({
                id:v1(),
                title:this.todoText,
                dostate:'N'
            });
            this.todoText="";
        }
    }

}
</script>

<style>

</style>