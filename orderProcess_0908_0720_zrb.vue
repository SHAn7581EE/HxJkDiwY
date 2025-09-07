// 代码生成时间: 2025-09-08 07:20:07
import { ref, onMounted } from 'vue';

export default {
  name: 'OrderProcess',
  setup() {
    const steps = ref(['Place Order', 'Payment', 'Confirmation', 'Processing', 'Dispatch']);
    const currentStep = ref(1);

    const nextStep = () => {
      if (currentStep.value < steps.value.length) {
        currentStep.value++;
      }
    };

    const previousStep = () => {
      if (currentStep.value > 1) {
        currentStep.value--;
      }
    };

    onMounted(() => {
      console.log('OrderProcess component is mounted.');
    });

    return {
      steps,
      currentStep,
      nextStep,
      previousStep,
    };
  },
};
</script>

<style scoped>
/* CSS styles here */
</style>