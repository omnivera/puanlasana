<template>
<div class="center">
<div class="container-animation">
    <div class="part one"></div>
    <div class="part two"></div>
    <div class="part three"></div>
    <div class="part four"></div>
</div>

</div>
</template>

<script>


export default {
  setup() {

  

    return {};
  }
};
</script>

<style scoped>
:root {
  --border-width: 10px;
  --border-color: #FFF;
}
body {
  background-color: #645cc1;
  min-height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-animation {
  position: relative;
  animation: rotate 2s linear infinite;
}
.part {
  position: absolute;
  height: 50px;
  width: 50px;
  box-sizing: border-box;
}
.one {
  top: -50px;
  left: -50px;
  border-radius: 100% 0 0 0;
  animation: animato1 1s linear 1s alternate infinite;
  border-top: var(--border-width) solid var(--border-color);
  border-left: var(--border-width) solid var(--border-color);
}
.two {
  top: -50px;
  border-radius: 0 100% 0 0;
  animation: animato2 1s linear alternate infinite;
  border-top: var(--border-width) solid var(--border-color);
  border-right: var(--border-width) solid var(--border-color);
}
.three {
  left: -50px;
  border-radius: 0 0 0 100%;
  animation: animato3 1s linear alternate infinite;
  border-bottom: var(--border-width) solid var(--border-color);
  border-left: var(--border-width) solid var(--border-color);
}
.four {
  top: 0px;
  left: 0px;
  border-radius: 0 0 100% 0;
  animation: animato4 1s linear 1s alternate infinite;
  border-bottom: var(--border-width) solid var(--border-color);
  border-right: var(--border-width) solid var(--border-color);
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
    background-color: orange;
  }
}
@keyframes animato1 {
  to {
    width: 20px; height: 20px; top: -20px; left: -20px;
  }
}
@keyframes animato2 {
  to {
    width: 20px; height: 20px; top: -20px;
  }
}
@keyframes animato3 {
  to {
    width: 20px; height: 20px; left: -20px;
  }
}
@keyframes animato4 {
  to {
    width: 20px; height: 20px;
  }
}


</style>
