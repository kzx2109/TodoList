<template>
  <div class="w-2/3 h-full  ">
    <h1 class="mt-10 text-4xl p-2 text-gray-600 font-bold w-full bg-teal-100 rounded-md">{{ msg }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
