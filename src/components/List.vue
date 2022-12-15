<template>
    <div class="w-full h-full flex my-4 ">
        <div class="w-2/3 flex">
            <div class="w-1/2 ">
                <input type="checkbox" @click="checkDone()" />
            </div>
            <div v-if="!isEdit" :class="isCheck?'line-through': ''" class="w-1/2">{{todo.title}}</div>
            <input v-bind:value="todoText" @change="todoTextChange" v-else type="text" class="w-1/3 h-8 rounded-md border-slate-800 px-3 text-base border-2"/>
        </div>
        
        <div class="w-1/3 flex justify-end">
            <div class="w-1/2 flex">
                <div  @click="updateTodoI(todo)" class=" p-1 mx-2 cursor-pointer rounded-md hover:bg-cyan-300 bg-cyan-200 " >{{isEdit?'更新':'編輯'}}</div>
                <div @click="deleteTodo(todo.id)" class="p-1 mx-2  cursor-pointer rounded-md hover:bg-red-400 hover:text-white bg-red-300 ">刪除</div>
            </div>
            
        </div>

    </div>
</template>

<script>
import { mapActions } from 'vuex'



export default {
    props:{
        todo:{}
    },
    data(){
        return {
            isEdit:false,
            isCheck:false,
            todoText:""
        }
    },
    methods:{
        ...mapActions(['deleteTodo','updateTodo']),
        todoTextChange(e){
            this.todoText=e.target.value;
        },
        updateTodoI(todo){
            if(this.isEdit==true){
                this.isEdit=false;
            }else{
                this.isEdit=true;
            }
            if(this.isEdit){
                // this.isEdit=false;
                this.todoText=todo.title;
                this.updateTodo(todo);
            }else{
                // this.isEdit=true;
                todo.title = this.todoText;
            }
            // console.log(this.isEdit);
        },
        checkDone(){
            if(this.isCheck==true){
                this.isCheck=false;
            }else{
                this.isCheck=true;
            }
            console.log(this.isCheck);
        }
    },

}
</script>

<style>

</style>