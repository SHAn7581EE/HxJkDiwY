// 代码生成时间: 2025-08-09 12:07:30
import { ref, onMounted } from 'vue';
import axios from 'axios';

// 响应式数据
const users = ref([]);
const selectedUser = ref(null);

// 获取用户列表
const fetchUsers = async () => {
  try {
    const response = await axios.get('/api/users');
    users.value = response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

// 获取单个用户详情
const fetchUser = async (userId) => {
  try {
    const response = await axios.get(`/api/users/${userId}`);
    selectedUser.value = response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
  }
};

// 生命周期钩子
onMounted(fetchUsers);

// 导出响应式数据和方法
export default {
  name: 'RestfulApiComponent',
  setup() {
    return {
      users,
      selectedUser,
      fetchUsers,
      fetchUser,
    };
  },
};
</script>

<template>
  <!-- 用户列表展示 -->
  <div v-for="user in users" :key="user.id" @click="fetchUser(user.id)">
    {{ user.name }}
  </div>
  <!-- 选中用户详情 -->
  <div v-if="selectedUser">
    <p><strong>Id:</strong> {{ selectedUser.id }}</p>
    <p><strong>Name:</strong> {{ selectedUser.name }}</p>
  </div>
</template>

<style scoped>
/* 样式内容 */
</style>