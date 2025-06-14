<script lang="ts">
import { defineComponent } from 'vue';
import MyHeader from '@/components/app/AppHeader.vue';
import PreviewInfo from '@/components/PreviewInfo.vue';
import MyFooter from '@/components/app/AppFooter.vue';

export default defineComponent({
  name: 'PreviewView',
  components: {
    PreviewInfo
  }
});
</script>

<template>
  <div class="preview-view">
    <PreviewInfo />
  </div>
</template>

<style scoped lang="scss">
.preview-view {
  margin: 0 auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>