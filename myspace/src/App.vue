<template>
  <div>
    <NavBar />
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
   import 'bootstrap/dist/css/bootstrap.css';
   import 'bootstrap/dist/js/bootstrap';
   import NavBar from './components/NavBar';

   export default {
    name:"App",
    components:{
      NavBar,
    }
   }
</script>

<style>
#app {
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

nav a.router-link-exact-active {
  color: #42b983;
}

#app{
background:url("../public/123213.jpg");
width:100%;		
height:100%;		
position:fixed;
background-size: cover;
}

div.card{
  background-color: rgba(240,248,255,0.6);
}
</style>
