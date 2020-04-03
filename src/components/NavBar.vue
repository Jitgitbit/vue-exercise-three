<template>
  <nav class="main-nav">
    <ul>
      <li><router-link to='/'>Home</router-link></li>
      <li><router-link :to="{name:'About'}">About</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name:'NavBar',
  data(){
    return{}
  }
}
</script>

<style scoped>
  ul{
    list-style-type: none;
    padding: 0;
  }
  a{  
    /* in Vue.js when it sees the router-link, it interprets it as an a         */
    color: #42b983;
  }
</style>