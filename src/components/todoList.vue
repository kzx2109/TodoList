<template>
    <div class="w-2/3 h-full">
        <div v-for="todo in allTodos" :key="todo.id" >
            <List :todo="todo" />
        </div>
    </div>
  
</template>
<!--  -->
<script>
// import List from './List.vue';
import List from '@/components/List.vue'
import { mapGetters } from 'vuex';
export default {
  components: { List },
  computed:{
    ...mapGetters(["allTodos"])
  }

}
</script>

<style>

</style>