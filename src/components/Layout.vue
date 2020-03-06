<template>
  <div class="layout">
    <div class="leftPanel">
      <slot name="leftPanel">left panel</slot>
    </div>
    <div class="rightPanel">
      <div class="topCell">
        <slot name="topCell">top cell</slot>
      </div>
      <div class="bottomCell">
        <slot name="bottomCell">bottom cell</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
}
</script>

<style scoped>
.layout {
  display: flex;
  flex: 1 1 100%;
}

.leftPanel {
  /* this ratio is calculated based on the "doodled" specs */
  flex: 1 0 60%;
  min-width: 300px;
}

.rightPanel {
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
}

.topCell {
  flex: 1 0 60%;
}
.bottomCell {
  flex: 1 1 100%;
}
</style>
