// 代码生成时间: 2025-08-27 20:00:24
import { ref, onMounted } from 'vue';
import CryptoJS from 'crypto-js';

// Reactive data
const inputText = ref('');
const hashValue = ref('');

// Lifecycle hook
onMounted(() => {
  console.log('Hash Calculator component is mounted');
});

// Function to calculate hash
function calculateHash() {
  if (inputText.value) {
    hashValue.value = CryptoJS.SHA256(inputText.value).toString();
  } else {
    hashValue.value = '';
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>
