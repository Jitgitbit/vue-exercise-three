<template>
  <div class="view-profile">
    <h1>Profile for {{userId}}</h1>
  </div>
</template>

<script>
export default {
  name: 'ViewProfile',
  data () {
    return {
      userId: this.$route.params.user_id
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
