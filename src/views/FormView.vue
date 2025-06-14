<script lang="ts">
import { defineComponent } from 'vue';
import MyHeader from '@/components/app/AppHeader.vue';
import ParentForm from '@/components/ParentForm.vue';
import ChildForm from '@/components/ChildForm.vue';
import MyFooter from '@/components/app/AppFooter.vue';

export default defineComponent({
  name: 'FormView',
  components: {
    ParentForm,
    ChildForm
  }
});
</script>

<template>
  <div class="form-view">
    <div class="form__content">
      <ParentForm />
      <ChildForm />
    </div>
  </div>
</template>

<style scoped>
.form-view {
  margin: 0 auto;
  background-color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.form__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  padding-top: 30px;
}

.form__content > div {
  width: 616px;
}
</style>