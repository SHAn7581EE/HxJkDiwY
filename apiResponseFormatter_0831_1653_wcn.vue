// 代码生成时间: 2025-08-31 16:53:18
import { ref, onMounted } from 'vue';

// 响应式数据
const response = ref('');
const formattedResponse = ref('');

// 格式化API响应的函数
function formatResponse() {
  try {
    // 尝试将响应转换为JSON对象
    const json = JSON.parse(response.value);
    // 格式化JSON对象
    formattedResponse.value = JSON.stringify(json, null, 2);
  } catch (error) {
    // 如果转换失败，设置formattedResponse为错误信息
    formattedResponse.value = 'Invalid JSON';
  }
}

// 生命周期钩子
onMounted(() => {
  console.log('Component mounted, ready to format API responses');
});
</script>

<style scoped>
/* 你可以在这里添加一些CSS样式 */
</style>