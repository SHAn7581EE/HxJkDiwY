// 代码生成时间: 2025-08-26 11:36:36
import { ref, onMounted } from 'vue';

export default {
  name: 'SortingAlgorithmComponent',
  setup() {
    // 响应式数据
    const numbers = ref([5, 2, 9, 1, 5, 6]);
    const sortedArray = ref([]);

    // 冒泡排序算法
    const bubbleSort = (array) => {
      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
          if (array[j] > array[j + 1]) {
            const temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
          }
        }
      }
      return array;
    };

    // 排序函数
    const sortArray = () => {
      sortedArray.value = bubbleSort([...numbers.value]);
    };

    // 生命周期钩子
    onMounted(() => {
      console.log('Component is mounted.');
    });

    return {
      numbers,
      sortedArray,
      sortArray
    };
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
