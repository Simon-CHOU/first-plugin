<template>
  <div>
    <h2>教师管理</h2>
    <el-table
      :data="teachers_list"
      style="width: 100%">
      <el-table-column
        prop="teacherid"
        label="教师号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="qq"
        label="QQ">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话">
      </el-table-column>
       <el-table-column
        prop="email"
        label="邮箱">
      </el-table-column>
    </el-table>
  </div>

</template>
<script>
export default {
  data: function() {
    return {
      teachers_list:[{
        teacherid:'8888888',
        name:'李老师',
        qq:'软件1504',
        phone:'13322228888',
        email:'example@gmail.com'
      },]
    };
  },
  methods:{
    getStudnetsList: function(){

    }
  }
}
</script>
