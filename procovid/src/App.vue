<template>
  <div id="flashMessage" v-if="GStore.flashMessage">
    {{ GStore.flashMessage }}
  </div>
  <nav class="logo">
    <router-link to="/">Home</router-link>
    <!-- <router-link to="/about">About</router-link>| -->
    <!-- <router-link to="/aboutt">Vaccine injection</router-link> |
    <router-link to="/">Doctor Recommendation</router-link> | -->
  </nav>
  <router-view />
</template>
<script>
export default {
  inject: ["GStore"],
};
</script>
<style>
@keyframes yellowfade {
  from {
    background: yellow;
  }
  to {
    background: transparent;
  }
}
#flashMessage {
  animation-name: yellowfade;
  animation-duration: 3s;
}
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
  /* color: #42b983; */
}
h4 {
  font-size: 20px;
}
body {
  background-image: url("~@/assets/background.jpg");
  background-size: cover;
}
.logo {
  text-align: left;
  font-size: 50px;
  color: black;
}
</style>
