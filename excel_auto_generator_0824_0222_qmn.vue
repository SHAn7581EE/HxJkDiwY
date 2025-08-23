// 代码生成时间: 2025-08-24 02:22:53
import { ref, onMounted } from 'vue';

// 响应式数据定义
const excelData = ref([]);

// 生成Excel表格数据的方法
function generateExcel() {
  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      name: `姓名${i + 1}`,
      age: 20 + i,
      job: `职业${i + 1}`
    });
  }
  excelData.value = data;
}

// 生命周期钩子
onMounted(() => {
  console.log('组件挂载完成');
  generateExcel();
});
</script>

<style scoped>
/* 这里可以添加一些样式 */
table {
# NOTE: 重要实现细节
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
# NOTE: 重要实现细节
}
</style>
