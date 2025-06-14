<script
  lang="ts"
  setup
>
import ParentForm from '@/components/ParentForm.vue';
import ChildForm from '@/components/ChildForm.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useFormValidation } from '@/composables/useFormValidation';

const router = useRouter();
const { isFormValid } = useFormValidation();

const saveData = () => {
  if (isFormValid.value) {
    router.push('/preview');
  }
};
</script>

<template>
  <div class="form-view" @submit.prevent>
    <form class="form__content">
      <ParentForm />
      <ChildForm :is-formvalid="isFormValid" />

      <button
        @click="saveData"
        class="save-button"
        :disabled="!isFormValid"
        type="button"
      >
        Сохранить
      </button>
    </form>
  </div>
</template>

<style scoped>
.form-view {
  margin: 0 auto;
  background-color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  padding-top: 30px;
  width: 616px;
}

.form__content > div {
  width: 100%;
}

.save-button {
  padding: 12px 20px;
  background-color: #01A7FD;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
}

.save-button:hover {
  background-color: #1a2b3c;
}

.save-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>