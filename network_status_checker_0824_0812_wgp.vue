// 代码生成时间: 2025-08-24 08:12:15
import { ref, onMounted, onUnmounted } from 'vue';

// 响应式数据：在线状态
const isOnline = ref(null);

// 检查网络连接状态函数
const checkNetworkStatus = () => {
    window.addEventListener('online',  () => {
        isOnline.value = true;
    });
    window.addEventListener('offline', () => {
        isOnline.value = false;
    });
};

// 生命周期钩子：组件挂载时检查网络连接状态
onMounted(() => {
    checkNetworkStatus();
    isOnline.value = navigator.onLine;
});

// 生命周期钩子：组件卸载时移除事件监听器
onUnmounted(() => {
    window.removeEventListener('online', checkNetworkStatus);
    window.removeEventListener('offline', checkNetworkStatus);
});
</script>

<style scoped>
/* 样式内容 */
</style>