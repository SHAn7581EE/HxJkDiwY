// 代码生成时间: 2025-08-12 18:48:30
import { ref, onMounted } from 'vue';

// Reactive data
const randomNumber = ref(0);

// Function to generate a random number
function generateRandomNumber() {
  randomNumber.value = Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
}

// Lifecycle hook to initialize the random number on mount
onMounted(() => {
  generateRandomNumber();
});
</script>

<style scoped>
.random-number-generator {
  text-align: center;
  padding: 20px;
}
button {
  padding: 10px 20px;
  margin-top: 10px;
}
</style>
