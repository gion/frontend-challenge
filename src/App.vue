<template>
  <div id="app">
    <div id="nav">
      <div class="left">
        <router-link to="/"
          ><img src="./assets/logo_white.svg" alt="form3 logo" id="logo"
        /></router-link>
      </div>
      <div class="right">
        <router-link class="menu-item" to="/home">Home</router-link>
        <router-link class="menu-item" to="/list">Transaction list</router-link>
        <router-link class="menu-item" to="/about">About</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<!-- a simple css reset -->
<style src="../node_modules/reset-css/reset.css"></style>

<!-- the global style -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

#nav {
  background-image: linear-gradient(#211845, #221846);
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.left {
  flex: 0 1 40%;
}

#logo {
  height: 50px;
  width: auto;
}

#nav a.menu-item {
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  text-decoration: none;
  padding: 10px 15px;
}

#nav a.menu-item:after {
  content: "";
  display: block;
  height: 2px;
  width: 120%;
  max-width: 0px;
  background: #4d57d2;
  transition: all 300ms ease;
  transform: translate(-10%, 5px);
}

#nav a.menu-item.router-link-active:after,
#nav a.menu-item:hover:after,
#nav a.menu-item:active:after {
  max-width: 120%;
}
</style>
