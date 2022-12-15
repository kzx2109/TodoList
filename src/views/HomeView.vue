<template>
  <div class="flex flex-col items-center justify-center">
    <HelloWorld msg="TodoList"/>
    <!-- <Listname></Listname> -->
    <insert></insert>
    <todoList></todoList>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Listname from '@/components/Listname.vue';
import Insert from '@/components/Insert.vue';
// import List from '../components/List.vue';
import todoList from '../components/todoList.vue'


export default {
    name: 'HomeView',
    components: {
      HelloWorld,
      Listname,
      Insert,
      todoList
      // List
  },
  
}
</script>
