<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'ParentForm',
  setup() {
    const store = useStore();
    
    const fullName = ref(store.state.fullName);
    const age = ref(store.state.age);

    const updateParentInfo = () => {
      store.dispatch('saveParentInfo', {
        fullName: fullName.value,
        age: age.value
      });
    };

    watch(() => store.state.fullName, (newVal) => {
      fullName.value = newVal;
    });
    
    watch(() => store.state.age, (newVal) => {
      age.value = newVal;
    });

    return {
      fullName,
      age,
      updateParentInfo
    };
  }
});
</script>

<template>
  <div class="parent-form">
    <h2>Персональные данные</h2>
    <div class="form-group">
      <label>Имя</label>
      <input 
        type="text" 
        v-model="fullName" 
        @input="updateParentInfo"
        placeholder="Введите ваше имя"
      />
    </div>
    <div class="form-group">
      <label>Возраст</label>
      <input 
        type="number" 
        v-model.number="age" 
        @input="updateParentInfo"
        min="0"
        placeholder="Введите ваш возраст"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.parent-form {
  margin-bottom: 30px;
}

.parent-form h2 {
  font-size: 16px;
  margin-bottom: 15px;
  font-weight: 500;
}

.form-group {
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;

  label {
    margin-left: 10px;
  }
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  color: #1111117A;
}

input, input:focus-visible {
  width: 100%;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
  border: none;
  outline: none;
}
</style>