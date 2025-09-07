// 代码生成时间: 2025-09-07 18:27:46
import { ref, onMounted } from 'vue';

// 响应式数据
const password = ref('');
const encryptedPassword = ref('');
const isEncrypted = ref(false);

// 加密解密函数
function toggleCrypto() {
  if (isEncrypted.value) {
    // 解密
    encryptedPassword.value = atob(password.value);
  } else {
    // 加密
    encryptedPassword.value = btoa(password.value);
  }
  isEncrypted.value = !isEncrypted.value;
}

// 生命周期钩子
onMounted(() => {
  console.log('Password Crypto Tool component is mounted.');
});
</script>

<style scoped>
.password-crypto-tool input {
  margin-right: 10px;
}
.password-crypto-tool button {
  cursor: pointer;
}
</style>
