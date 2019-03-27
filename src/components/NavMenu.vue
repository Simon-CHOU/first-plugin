<template>
  <el-menu
    :default-openeds="['1', '1']"
    @open="handleOpen"
    @close="handleClose"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
  >
    <el-submenu
      v-for="item in menu"
      :key="item.id"
      :index="item.id"
    >
      <template slot="title"><i class="el-icon-message"></i><span v-text="item.name"></span></template>
      <el-menu-item-group
        v-for="sub in item.sub"
        :key="sub.componentName"
      >
        <el-menu-item :index="sub.componentName"><span v-text="sub.name"></span></el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
import menu from "@/config/menu-config.js";
export default {
  data: function() {
    return {
      menu: menu
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
      key + keyPath;
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
      key + keyPath;
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>


<style scoped>
</style>
