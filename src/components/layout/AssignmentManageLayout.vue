//作业管理（）
<template>
  <div>
    <h2>作业管理</h2>
    <!-- 添加作业 -->
    <el-button icon="el-icon-circle-plus-outline" @click="dialogFormVisible = true" round>添加作业</el-button>

    <el-dialog title="新增作业详情" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="作业名称" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="题目编号列表" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form.problems" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="持续时间" :label-width="formLabelWidth">
          <el-date-picker
            v-model="form.duration"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="下发班级" :label-width="formLabelWidth">
          <el-select v-model="form.undertakeClasses" placeholder="请选择活动区域">
            <el-option label="班级1" value="001"></el-option>
            <el-option label="班级2" value="002"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <!-- 【题号】，标题，题目描述(纯文本/markdown+图床)，输入数据，期望输出，提交数，通过数，标签 -->
      <!-- 标签后续补全 -->
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('form')">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 添加待完成：题目编号列表 下发班级列表 穿梭框 -->

    <!-- 显示作业表格 -->
    <el-table :data="assignment_list" style="width: 100%">
      <el-table-column prop="assignment_id" label="作业号" width="180"></el-table-column>
      <el-table-column prop="assignment_title" label="作业名称" width="180"></el-table-column>
      <el-table-column prop="timeStart" label="开始时间"></el-table-column>
      <el-table-column prop="timeEnd" label="结束时间"></el-table-column>
      <el-table-column prop="assignment_status" label="作业状态"></el-table-column>
    </el-table>
    <!--TOOD 显示待完成：下发班级列表 -->
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      assignment_list: [
        {
          assignment_id: "001",
          assignment_title: "软件专业C程序第一次基础练习",
          timeStart: "20190423 20:00",
          timeEnd: "20190424 20:00",
          assignment_status: "进行中"
        }
      ], //对话框
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        title: "",
        problems: "",
        duration: "",
        class: "",
        undertakeClasses: []
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    submitForm: function() {
      this.dialogFormVisible = false;
      //提交表单
    }
  }
};
</script>

