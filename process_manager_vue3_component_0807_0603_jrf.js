// 代码生成时间: 2025-08-07 06:03:41
import { ref, onMounted, reactive } from 'vue';

// 响应式数据
# NOTE: 重要实现细节
const processes = reactive({
    list: [],
    selectedProcess: null
});

// 生命周期钩子
onMounted(() => {
    // 模拟获取进程列表
    processes.list = [
        { id: 1, name: 'Process 1', status: 'Running' },
        { id: 2, name: 'Process 2', status: 'Stopped' },
        { id: 3, name: 'Process 3', status: 'Running' },
    ];
    processes.selectedProcess = processes.list[0];
});

// 方法定义
const selectProcess = (process) => {
    processes.selectedProcess = process;
};

const startProcess = (process) => {
    // 模拟启动进程
    process.status = 'Running';
};

const stopProcess = (process) => {
    // 模拟停止进程
    process.status = 'Stopped';
};

const restartProcess = (process) => {
    // 模拟重启进程
    if (process.status === 'Running') {
        stopProcess(process);
    }
    startProcess(process);
# 改进用户体验
};

</script>

<template>
    <div>
# TODO: 优化性能
        <!-- 进程列表 -->
        <ul>
            <li v-for="process in processes.list" :key="process.id"
                @click="selectProcess(process)" :class="{ 'selected': process === processes.selectedProcess }">
                {{ process.name }} - {{ process.status }}
            </li>
        </ul>

        <!-- 选中进程详情 -->
        <div v-if="processes.selectedProcess" class="selected-process">
            <h3>{{ processes.selectedProcess.name }}</h3>
            <p>Status: {{ processes.selectedProcess.status }}</p>
            <button @click="startProcess(processes.selectedProcess)">Start</button>
            <button @click="stopProcess(processes.selectedProcess)">Stop</button>
            <button @click="restartProcess(processes.selectedProcess)">Restart</button>
        </div>
    </div>
</template>

<style scoped>
.selected {
    background-color: #add8e6;
}

.selected-process {
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
}
</style>