<template>
  <div class="about">
    <p>
      This is an online developer test for my job application as a frontend
      developer at
      <a href="http://form3.tech" target="_blank">form3</a>.
    </p>
    <p>
      If you want to find out more about this test, be sure the check the
      <a
        href="https://github.com/gion/form3-interview-test/blob/master/README.md"
        target="_blank"
        >Readme file</a
      >.
    </p>
    <p>
      ...and if everything goes the way I plan to, I could actually shake hands
      with the CEO for this position :)
    </p>
    <div class="image" />
  </div>
</template>

<style scoped>
p {
  font-size: 16px;
  padding: 12px;
}

.about {
  padding: 24px;
  overflow: auto;
}
.image {
  background: url("../assets/form3-bogdan-doodle.png") no-repeat center;
  background-size: contain;
  width: 400px;
  height: 400px;
  margin: 0 auto;
}
</style>
