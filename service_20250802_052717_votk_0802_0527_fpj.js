// 代码生成时间: 2025-08-02 05:27:17
import { ref, onMounted } from 'vue';
import JSZip from 'jszip';
import axios from 'axios';

// 响应式数据
const unzippedFiles = ref([]);
const selectedFile = ref(null);

// 处理文件选择
function handleFileChange(event) {
  const file = event.target.files[0];
  selectedFile.value = file;
  // 读取文件
  const reader = new FileReader();
  reader.onload = function (e) {
    const zip = new JSZip();
    zip.loadAsync(e.target.result)
      .then(function (zip) {
        // 列出文件
        const files = Object.keys(zip.files);
        unzippedFiles.value = files.map((fileName) => ({ name: fileName }));
      }).catch(function (err) {
        console.error('Failed to load zip file', err);
      });
  };
  reader.readAsArrayBuffer(file);
}

// 生命周期钩子
onMounted(() => {
  // 可以在此处执行一些初始化操作，如获取默认文件等
});
</script>

<style scoped>
/* 你可以在这里添加一些CSS来美化组件 */
</style>