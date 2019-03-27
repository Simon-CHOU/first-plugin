<template>
  <div class="home">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside>
          <NavMenu></NavMenu>
        </el-aside>
        <el-main>
          <router-view>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import NavMenu from "@/components/NavMenu.vue";
import Header from "@/components/Header.vue";

export default {
  components: {
    NavMenu,
    Header
  }
};
</script>

<style>
</style>
