<template>
  <div class="home">
    <p>
      This is just a sample homepage in order to support the routing mechanism.
    </p>
    <p>
      Please hed on to the <router-link to="/about">about page</router-link> to
      learn more about this project, or simply go to the
      <router-link to="/list">list page</router-link> to dive in 💦
    </p>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.home {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  max-width: 600px;
  min-width: 300px;
}

p {
  margin: 24px;
}
</style>
