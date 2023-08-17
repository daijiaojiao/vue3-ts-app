<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import * as dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')
</script>

<template>
  <a-config-provider :locale="zhCN">
    <div>
      <a-button type="primary">click me</a-button>
      <a-button type="primary" ghost>clicccccc</a-button>
      <a-form form=""></a-form>
      <a href="https://vitejs.dev" target="_bladnk">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank"> </a>
    </div>
    <HelloWorld msg="Vite + Vue" />
  </a-config-provider>
</template>

<style scoped lang="scss">
.logo {
  width: 10px;
  height: 6em;
  padding: 1.5em;
  transition: filter 300ms;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
