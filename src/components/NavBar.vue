<template>
  <nav class="main-nav">
    <ul>
      <li><router-link to='/'>Home</router-link></li>
      <li><router-link :to="{name:'About'}">About</router-link></li>
    </ul>
    <h2>User Profiles</h2>
    <ul>
      <li v-for="(id, index) in userIds" :key="index">
        <router-link :to="{name:'ViewProfile', params:{user_id: id}}">
          <span>Profile {{id}}</span>
        </router-link>
      </li>
    </ul>
    <h2>Navigation Controls</h2>
    <ul>
      <li><button @click="goBack">Go Back</button></li>
      <li><button @click="goForward">Go Forward</button></li>
      <li><button @click="goHome">Redirect to Home</button></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name:'NavBar',
  data(){
    return{
      userIds:['1','2','3','4']
    }
  },
  methods:{
    goHome(){
      this.$router.push({ name: 'Home' })
    },
    goBack(){
      this.$router.go(-1)
    },
    goForward(){
      this.$router.go(1)
    }
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
  a.router-link-exact-active{
    color: purple;
  }
  li{
    display: inline-block;
    margin: 10px;
  }
</style>