<template>
<NavbarComp/>
<router-view/>
</template>
<script>
import NavbarComp from './components/NavbarComp.vue';
export default{

  components:{NavbarComp}
}

</script>
<style>
#app {
  font-family:'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  overflow-x:hidden;
  overflow-y: hidden;
}

nav {
  padding: 30px;
  
}

nav a {
  font-weight: bold;
  color: #060606;
  text-decoration: none;
  padding-left: 2rem;
}

nav a.router-link-exact-active {
  color: #f10505;
}
</style>
