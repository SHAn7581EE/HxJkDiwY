// 代码生成时间: 2025-08-20 15:46:50
import { ref, onMounted } from 'vue';

// 响应式数据
const processes = ref([]);  // 存储进程信息

// 获取进程信息的函数
const fetchProcesses = async () => {
  try {
    // 这里是模拟的API调用
    // 你应该替换成真实的API调用代码
    const response = await fetch('/api/processes');
    const data = await response.json();
    processes.value = data;
  } catch (error) {
    console.error('Failed to fetch processes:', error);
  }
};

// 生命周期钩子：组件挂载时调用
onMounted(() => {
  fetchProcesses();
});
</script>

<template>
  <div class="process-manager">
    <h1>Process Manager</h1>
    <ul>
      <li v-for="process in processes" :key="process.id">
        {{ process.name }} - {{ process.status }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.process-manager h1 {
  text-align: center;
}
.process-manager ul {
  list-style: none;
  padding: 0;
}
.process-manager li {
  margin-bottom: 10px;
}
</style>
