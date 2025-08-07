// 代码生成时间: 2025-08-07 10:34:00
import { ref, onMounted, onUnmounted } from 'vue';

// 响应式数据
const count = ref(0);

// 增加计数的方法
function increment() {
  count.value++;
}

// 生命周期钩子
onMounted(() => {
  console.log('组件已挂载');
});

onUnmounted(() => {
  console.log('组件已卸载');
});
</script>

<style scoped>
/* 组件样式 */
button {
  margin-top: 20px;
}
</style>
