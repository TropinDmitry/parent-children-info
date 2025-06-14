<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { Child } from '@/store/types';

export default defineComponent({
  name: 'ChildForm',
  setup() {
    const store = useStore();
    const router = useRouter();
    
    const children = computed(() => store.state.children);
    const canAddMoreChildren = computed(() => store.getters.canAddMoreChildren);
    
    const isFormValid = computed(() => {
      return store.state.fullName.trim() !== '' && 
             store.state.age > 0 &&
             children.value.every(child => child.name.trim() !== '' && child.age > 0);
    });

    const addChild = () => {
      store.dispatch('addNewChild', {
        name: '',
        age: 0
      });
    };

    const removeChild = (id: number) => {
      store.dispatch('deleteChild', id);
    };

    const updateChild = (child: Child) => {
      store.dispatch('updateChild', child);
    };

    const saveData = () => {
      if (isFormValid.value) {
        router.push('/preview');
      }
    };

    return {
      children,
      canAddMoreChildren,
      isFormValid,
      addChild,
      removeChild,
      updateChild,
      saveData
    };
  }
});
</script>

<template>
  <div class="child-form">
    <div class="child-header">
      <h2>Дети (макс. 5)</h2>
      <button 
        v-if="canAddMoreChildren" 
        @click="addChild" 
        class="add-button"
      >
        Добавить ребенка
      </button>
    </div>
    
    <div v-for="child in children" :key="child.id" class="child-item">
      <div class="form-col">
        <label>Имя</label>
        <input 
          type="text" 
          v-model="child.name" 
          @input="updateChild(child)"
          placeholder="Имя ребенка"
        />
      </div>
      <div class="form-col">
        <label>Возраст</label>
        <input 
          type="number" 
          v-model.number="child.age" 
          @input="updateChild(child)"
          min="0"
          placeholder="Возраст ребенка"
        />
      </div>
      <button @click="removeChild(child.id)" class="remove-button">
        Удалить
      </button>
    </div>
    
    <button 
      @click="saveData" 
      class="save-button"
      :disabled="!isFormValid"
    >
      Сохранить
    </button>
  </div>
</template>

<style scoped lang="scss">
.child-form {
  margin-bottom: 30px;
}

.child-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.child-header h2 {
  font-size: 16px;
  font-weight: 500;
  margin: 0;
}

.add-button {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  color: #01A7FD;
  background-color: #fff;
  border: 2px solid #01A7FD;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;

  &::before {
    display: inline-block;
    background-image: url('@/assets/plus-icon.svg');
    background-size: 24px;
    width: 24px;
    height: 24px;
    content: '';
    margin-right: 4px;
  }
}

.child-item {
  position: relative;
  margin-bottom: 15px;
  border-radius: 5px;
  display: flex;
  gap: 20px;
}

.remove-button {
  color: #01A7FD;
  background-color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.form-col {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 100%;

  label {
    margin-left: 10px;
  }
}

label {
  display: block;
  font-weight: 500;
  color: #1111117A;
}

input, input:focus-visible {
  width: 100%;
  padding: 4px 12px;
  font-size: 16px;
  box-sizing: border-box;
  border: none;
  outline: none;
}

.save-button {
  padding: 12px 20px;
  background-color: #01A7FD;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 20px;
}

.save-button:hover {
  background-color: #1a2b3c;
}

.save-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>