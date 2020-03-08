<template>
  <div class="card" :class="theme">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    theme: {
      type: String,
      default: "green"
    }
  }
};
</script>

<style scoped>
.card {
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 24px;
  transition: all 300ms ease;
  text-align: left;
}

.card:hover {
  transform: scale(1.025);
}

.card.green {
  border: 1px solid #2e90a2;
  color: #0a155a;
}

.card.green:hover {
  box-shadow: 0px 0px 10px 0px #2e90a2;
}

.card.light {
  border: 1px solid rgba(0, 0, 0, 0.2);
}

.card.light:hover {
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
}

.card.dark {
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.card.dark:hover {
  box-shadow: 0px 0px 10px 0px rba(255, 255, 255, 0.2);
}
</style>
