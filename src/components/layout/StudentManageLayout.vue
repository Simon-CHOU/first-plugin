<template>
  <div>
    <h2>学生管理</h2>
 <el-table
      :data="students_list"
      style="width: 100%">
      <el-table-column
        prop="studentid"
        label="学号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="class"
        label="班级">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      students_list:[{
        studentid:'5120151111',
        name:'张三',
        class:'软件1504'
      },
      {
        studentid:'5120151112',
        name:'李四',
        class:'软件1504'
      },{
        studentid:'5120151113',
        name:'王五',
        class:'软件1504'
      },
      {
        studentid:'5120151113',
        name:'赵六',
        class:'软件1504'
      },]
    };
  },
  methods:{
    getStudnetsList: function(){

    }
  }
}
</script>
