<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import Test from "./components/Test";
function callback() {
  console.log("callback");
}
function onClick() {
  console.log("onClick event ");
}
</script>

<template>
  <div class="large">
    <HelloWorld
      id="hello"
      class="small"
      msg="Hello Vue 3 + TypeScript + Vite"
      @some-event="callback"
    >
      <h2>123--this is the slot</h2>
    </HelloWorld>
    <hr />

    <Test @click="onClick">
      <!-- <template v-slot:default> aaaaa </template> -->
      <template #default> aaaaa </template>
      <template #title> <h3>title</h3> </template>
    </Test>

    <!-- <Test v-slots={{title: ()=> <h3>title</h3>}}>
    </Test> -->

    <hr />
    <!-- 1.primary,secondary,text
  2.尺寸size
  3.disabled
  4.块级block
  5.iconbutton -->
    <SButton type="primary" size="large"> 确定 </SButton>
    <SButton type="secondary" size="medium"> 确定 </SButton>
    <SButton type="text" size="small"> 确定 </SButton>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 160px;
}
.large {
  background-color: pink;
}
.small {
  font-size: 50px;
}
</style>
