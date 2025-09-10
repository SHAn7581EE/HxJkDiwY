// 代码生成时间: 2025-09-11 04:28:32
import { ref, reactive, onMounted } from 'vue';

// 响应式数据
const inventory = reactive([
  { name: '产品A', quantity: 10 },
  { name: '产品B', quantity: 30 },
  { name: '产品C', quantity: 20 }
]);
const showInventory = ref(false);

// 生命周期钩子
onMounted(() => {
  console.log('组件已挂载');
});

// 方法
const increment = (item) => {
  item.quantity++;
};

const decrement = (item) => {
  if (item.quantity > 0) {
    item.quantity--;
  }
};

const toggleInventory = () => {
  showInventory.value = !showInventory.value;
};
</script>

<style scoped>
/* 这里可以添加一些CSS样式 */
</style>