import { computed } from "vue";
import { useStore } from "vuex";

export function useFormValidation() {
  const store = useStore();  

  const isFormValid = computed(() => {
    const { fullName, age, children } = store.state;

    return (
      fullName.trim() !== "" &&
      age > 0 &&
      children.every(
        (child) => child.name.trim() !== "" && child.age > 0
      )
    );
  });

  return { isFormValid };
};
