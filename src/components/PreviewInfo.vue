<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const fullName = computed(() => store.state.fullName);
const age = computed(() => store.state.age);
const children = computed(() => store.state.children);

</script>

<template>
  <div class="preview-wrapper">
    <div class="preview-info">
      <div class="parent-holder">
        <h2>Персональные данные</h2>
        <p class="parent-data">{{ fullName }}, {{ age }} лет</p>
      </div>

      <template v-if="children.length > 0">
        <div class="child-holder">
          <h2>Дети</h2>
          <div
            v-for="child in children"
            :key="child.id"
            class="child-data"
          >
            <p>{{ child.name }}, {{ child.age }} лет</p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style
  scoped
  lang="scss"
>
.preview-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  padding-top: 30px;
}

.parent-holder {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.preview-info {
  width: 616px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;

  p {
    font-weight: bold;
  }

  h2 {
    font-size: 16px;
    font-weight: 500;
  }

  .child-holder {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

.parent-data {
  font-size: 16px;
  margin-bottom: 20px;
  border-radius: 4px;
}

.child-data {
  display: inline-block;
  font-size: 16px;
  margin-bottom: 10px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #F1F1F1;

  p {
    font-weight: bold;
  }
}
</style>