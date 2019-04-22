//班级管理 教学班
<template>
    <div>
        <h2>教学班级管理</h2>
         <el-table
      :data="class_list"
      style="width: 100%">
      <el-table-column
        prop="classname"
        label="班级名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="term"
        label="学期">
      </el-table-column>
      <el-table-column
        prop="population"
        label="人数">
      </el-table-column>
      <el-table-column
        prop="startdate"
        label="开班日期">
      </el-table-column>
      <el-table-column
        prop="enddate"
        label="结束日期">
      </el-table-column>
      <el-table-column
        prop="status"
        label="班级状态">
      </el-table-column>
    </el-table>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            class_list:[{
                classname:'C++开发课程软件医影',
                term:'201902',
                population:'20',
                startdate:'20190422',
                enddate:'20190428',
                status:'开启'                
            }]
        }
    },
  methods:{
  }
}
</script>
