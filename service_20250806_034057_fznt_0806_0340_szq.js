// 代码生成时间: 2025-08-06 03:40:57
import { ref, onMounted, reactive } from 'vue';

export default {
    name: 'Zip解压工具',
    props: {},
    setup() {
        const isUnzipping = ref(false);
        const unzippedFiles = ref([]);
        const error = ref(null);

        const unzipFile = async (file) => {
            try {
                isUnzipping.value = true;
                error.value = null;
                const reader = new FileReader();
                reader.onload = (event) => {
                    const zip = new window.ZipJS();
                    const uint8Array = new Uint8Array(event.target.result);
                    zip.load(uint8Array);
                    zip.forEach((path, file) => {
                        console.log(path);
                        unzippedFiles.value.push(path);
                    });
                };
                reader.readAsArrayBuffer(file);
            } catch (e) {
                error.value = e.message;
            } finally {
                isUnzipping.value = false;
            }
        };

        const handleFileChange = (event) => {
            const file = event.target.files[0];
            if (file && file.type === 'application/zip') {
                unzipFile(file);
            }
        };

        onMounted(() => {
            console.log('Zip解压工具组件已挂载');
        });

        return {
            isUnzipping,
            unzippedFiles,
            error,
            handleFileChange
        };
    }
};
</script>

<style scoped>

</style>