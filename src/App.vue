<template>
  <nav>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <NavBarComp/>
  </nav>
  <Contact/>
  <router-view/>
</template>


<script>
  import NavBarComp from './components/Nav-Bar.vue';
export default {
  components: {NavBarComp}
}

</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-navStyle {
  color: #42b983;
} */
</style>
