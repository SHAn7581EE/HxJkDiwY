// 代码生成时间: 2025-09-02 00:08:57
import { ref, onMounted } from 'vue';

// 响应式数据: 表格数据和列配置
const tableData = ref([]);
const columns = ref([]);

// 组件挂载后初始化表格数据
onMounted(() => {
  generateTableData();
  generateColumns();
});

// 模拟生成表格数据
function generateTableData() {
  tableData.value = [];
  for (let i = 0; i < 10; i++) {
    tableData.value.push({
      id: i + 1,
      name: `Name ${i + 1}`,
      age: 20 + i,
      email: `name${i+1}@example.com`,
    });
  }
}

// 模拟生成列配置
function generateColumns() {
  columns.value = [
    {
      label: 'ID',
      field: 'id',
    },
    {
      label: 'Name',
      field: 'name',
    },
    {
      label: 'Age',
      field: 'age',
    },
    {
      label: 'Email',
      field: 'email',
    },
  ];
}

</script>

<template>
  <div class="excel-table-generator">
    <!-- 表格头部 -->
    <div class="table-header">
      <span v-for="column in columns" :key="column.field">{{ column.label }}</span>
    </div>
    <!-- 表格内容 -->
    <div class="table-content">
      <div v-for="row in tableData" :key="row.id" class="table-row">
        <span v-for="column in columns" :key="column.field">{{ row[column.field] }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.excel-table-generator .table-header, .excel-table-generator .table-row {
  display: flex;
  gap: 10px;
}
.excel-table-generator .table-header {
  font-weight: bold;
}
</style>
