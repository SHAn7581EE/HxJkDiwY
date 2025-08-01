// 代码生成时间: 2025-08-01 09:11:36
import { ref, onMounted } from 'vue';

// 响应式数据，存储当前主题
const currentTheme = ref('light');

// 切换主题的函数
function switchTheme() {
  currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light';
}

// 生命周期钩子 - 组件挂载后，检查是否有存储的主题偏好
onMounted(() => {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    currentTheme.value = storedTheme;
  }
});

// 监听主题变化，更新本地存储
watch(currentTheme, (newTheme) => {
  localStorage.setItem('theme', newTheme);
});
</script>

<template>
  <div :class="currentTheme">
    <h1>Theme Switcher</h1>
    <button @click="switchTheme">Switch Theme</button>
    <p>The current theme is: {{ currentTheme }}</p>
  </div>
</template>

<style scoped>
.light {
  background-color: #fff;
  color: #000;
}

.dark {
  background-color: #333;
  color: #fff;
}
</style>