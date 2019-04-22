//题目管理（题库）
<template>
  <div>
    <h2>题库</h2>
    <!-- 添加题目 -->
    <el-button icon="el-icon-circle-plus-outline" @click="dialogFormVisible = true" round>添加题目</el-button>

    <el-dialog title="新增题目详情" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="标题" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="题目描述" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form.description" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="输入数据" :label-width="formLabelWidth">
          <el-input v-model="form.testInput" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="期望输出" :label-width="formLabelWidth">
          <el-input v-model="form.expectOutput" autocomplete="off"></el-input>
        </el-form-item>
        <!-- <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>-->
      </el-form>
      <!-- 【题号】，标题，题目描述(纯文本/markdown+图床)，输入数据，期望输出，提交数，通过数，标签 -->
      <!-- 标签后续补全 -->
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('form')">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 表格 显示-->
    <!-- <el-button @click="clearFilter" round>清除所有过滤器</el-button> -->
    <el-table ref="filterTable" :data="problems_list" style="width: 100%">
      <el-table-column prop="problemid" label="题号" width="180"></el-table-column>
      <el-table-column prop="problemtitle" label="标题" width="180"></el-table-column>
      <el-table-column prop="submitNum" label="提交数"></el-table-column>
      <el-table-column prop="passNum" label="通过数"></el-table-column>
      <el-table-column
        prop="tag"
        label="标签"
        width="100"
        :filters="[{ text: '水题', value: '水题' }, { text: '难题', value: '难题' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === '难题' ? 'primary' : 'success'"
            disable-transitions
          >{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button> -->
          <el-button type="text" @click="dialogVisible1 = true">查看题目</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 题目提交 -->
    <el-dialog title="提示" :visible.sync="dialogVisible1" width="40%">
      <span>A+B</span>
      <p>输入两个数，输出两个整数，输出两个数的和。</p>
      <p>Simple Input: 1 2</p>
      <p>Simple Output: 3</p>
      <el-form :model="codeForm">
        <el-form-item label="编译器" :label-width="codeformLabelWidth">
          <el-select v-model="codeForm.compiler" placeholder="请选择活动区域">
            <el-option label="clang" value="clang"></el-option>
            <el-option label="gcc" value="gcc"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="源码" :label-width="codeformLabelWidth">
          <el-input type="textarea" v-model="codeForm.sourceCode" autocomplete="off" :rows="7"></el-input>
        </el-form-item>
      </el-form>
      <p>判题结果:</p>
      <el-input type="textarea" v-model="judgeResult" autocomplete="off" :rows="1"></el-input>
      
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="submitCode">提 交</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      problems_list: [
        {
          problemid: "001",
          problemtitle: "A+B",
          submitNum: "20",
          passNum: "10",
          tag: "水题"
        },
        {
          problemid: "002",
          problemtitle: "Pony",
          submitNum: "10",
          passNum: "2",
          tag: "难题"
        }
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      dialogVisible1: false, //提交框可见性
      form: {
        title: "",
        description: "",
        testInput: "",
        expectOutput: ""
      },
      formLabelWidth: "120px",
      codeformLabelWidth: "200px",
      codeForm: {
        problemid: "",
        sourceCode: "",
        compiler: "",
      },
      //   判题结果显示
      judgeResult: "等待判定"
    };
  },
  methods: {
    submitForm: function() {
      this.dialogFormVisible = false;
      //提交表单
    },
    // 过滤标签
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    // 查看题目
    handleClick(row) {
      console.log("查看题号:" + row.problemid);
      // window.location.href = "#/components/layout/AddPluginLayout.vue"
    },
    //提交源码
    submitCode() {
        console.log("点击提交");
      // this.dialogVisible1 = false;
       axios.post("http://119.23.209.207:8080/oj/handelCommit/basicCheck",this.codeForm
       ) .then(function(response) {
           console.log('成功返回');
          console.log(response.data.score);
          console.log(this.judgeResult);
          this.judgeResult = response.data.score;
          
        //   this.judge = response.data.score;
        //   this.student_info = response.data.student_infor;
        })
        .catch(function(error) {
          // console.log(error);
        });
    },
    // 弹出提示
    openRes() {        
        this.$message('提示一下');
      },
  }
};
</script>
