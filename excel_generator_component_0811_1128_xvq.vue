// 代码生成时间: 2025-08-11 11:28:49
import { ref, onMounted, reactive } from 'vue';

export default {
  name: 'ExcelGenerator',
  setup() {
    // Reactivity setup
    const headers = ['Name', 'Age', 'Email'];
    const excelData = ref([]);

    // Function to generate random data for the Excel table
    const generateExcelData = () => {
      const data = [];
      for (let i = 1; i <= 10; i++) {
        data.push({
          Name: `Person ${i}`,
          Age: Math.floor(Math.random() * 50),
          Email: `person${i}@example.com`,
        });
      }
      return data;
    };

    // Reactive data setup
    const state = reactive({
      excelData: generateExcelData(),
    });

    // Lifecycle hook
    onMounted(() => {
      console.log('Component is mounted, Excel data is generated.');
    });

    // Method to trigger Excel generation
    const generateExcel = () => {
      state.excelData = generateExcelData();
      console.log('New Excel data generated.', state.excelData);
    };

    return {
      headers,
      excelData: state.excelData,
      generateExcel
    };
  }
};
</script>

<style>
.excel-generator {
  margin: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
</style>
