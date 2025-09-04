// 代码生成时间: 2025-09-04 18:54:36
import { ref, onMounted, onUnmounted } from 'vue';

// 响应式数据
const currentTime = ref('');
const timerId = ref(null);

// 生命周期钩子
onMounted(() => {
  startTimer();
});

onUnmounted(() => {
  stopTimer();
});

// 开始定时器
function startTimer() {
  timerId.value = setInterval(() => {
    currentTime.value = new Date().toLocaleTimeString();
  }, 1000);
}

// 停止定时器
function stopTimer() {
  if (timerId.value) {
    clearInterval(timerId.value);
    timerId.value = null;
  }
}
</script>

<style>
/* 在这里添加样式 */
</style>