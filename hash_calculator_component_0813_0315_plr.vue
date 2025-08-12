// 代码生成时间: 2025-08-13 03:15:53
import { ref, onMounted } from 'vue';

export default {
  name: 'HashCalculator',
  setup() {
    const inputText = ref('');
    const hashValue = ref('');

    async function calculateHash() {
      hashValue.value = await generateHash(inputText.value);
    }

    async function generateHash(text) {
      if (text.length === 0) return '';
      const encoder = new TextEncoder();
      const data = encoder.encode(text);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }

    onMounted(() => {
      console.log('组件已挂载');
    });

    return {
      inputText,
      hashValue,
      calculateHash
    };
  }
};
</script>

<style scoped>
/* 可以在这里添加一些样式 */
</style>
