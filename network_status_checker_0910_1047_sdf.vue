// 代码生成时间: 2025-09-10 10:47:45
import { onMounted, onUnmounted, ref, watch } from 'vue';

export default {
  name: 'NetworkStatusChecker',
  data() {
    return {
      connectionStatus: 'Checking...'
    };
  },
  setup() {
    const online = ref(false);
    const updateOnlineStatus = () => {
      online.value = navigator.onLine;
    };
    const checkConnection = () => {
      if (online.value) {
        this.connectionStatus = 'Online';
      } else {
        this.connectionStatus = 'Offline';
      }
    };
    
    onMounted(() => {
      updateOnlineStatus();
      window.addEventListener('online', updateOnlineStatus);
      window.addEventListener('offline', updateOnlineStatus);
    });
    
    onUnmounted(() => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    });
    
    watch(online, checkConnection);
    
    return { online };
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>