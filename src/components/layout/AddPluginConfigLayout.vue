<template>
  <div>
    <h3>插件配置</h3>

    <!-- @submit.prevent="submitConfig" -->
    <form id="plugin">
      <div v-html="plugLayer"></div>
      <!-- <input type="submit" value="Submit"> -->
    </form>
    <button @click="submitConfig">Submit</button>
    <!-- <p>{{resp}}</p>
    <p>{{student_info}}:{{judge}}</p>-->
  </div>
</template>
<script>
import axios from "axios";
import qs from "qs";
import $ from "jquery";
export default {
  data: function() {
    return {
      plugLayer: "",
      judge: 0,
      student_info: "",
      resp: "",
      plugin1: {},
      settings: []
    };
  },
  created() {
    console.log($);
    axios
      .get("http://119.23.209.207:8080/oj/addPlugin/cpplinthtml")
      .then(response => {
        this.plugLayer = response.data;
        // console.log(response.data);
      })
      .catch(function(error) {
        // console.log(error);
      });
  },
  methods: {
    submitConfig: function() {
      // //获得表单数据
      // //检查项开始
      // //总分
      // const totalScore = document.getElementsByName("totalScore");
      // //检查函数注释
      // const checkFuncAnnotation = document.getElementsByName("checkFuncAnnotation");
      // const scoreOfFuncAnnotation = document.getElementsByName("scoreOfFuncAnnotation");
      // //检查函数命名
      // const checkFuncName = document.getElementsByName("checkFuncName");
      // const scoreOfFuncName = document.getElementsByName("scoreOfFuncName");
      // //检查函数参数个数
      // const checkFuncParamtersNum = document.getElementsByName("checkFuncParamtersNum");
      // const scoreOfFuncParamtersNum = document.getElementsByName("scoreOfFuncParamtersNum");
      // //检查函数内部语句行数
      // const checkFuncStatLinesNum = document.getElementsByName("checkFuncStatLinesNum");
      // const scoreOfFuncStatLinesNum = document.getElementsByName("scoreOfFuncStatLinesNum");
      // //检查变量命名
      // const checkVariableName = document.getElementsByName("checkVariableName");
      // const scoreOfVariableName = document.getElementsByName("scoreOfVariableName");
      // //检查宏常量命名
      // const checkMacroName = document.getElementsByName("checkMacroName");
      // const scoreOfMacroName = document.getElementsByName("scoreOfMacroName");
      // //检查嵌套次数
      // const checkNestedNum = document.getElementsByName("checkNestedNum");
      // const scoreOfNestedNum = document.getElementsByName("scoreOfNestedNum");
      // //检查是否使用goto语句
      // const checkUseGoto = document.getElementsByName("checkUseGoto");
      // const scoreOfUseGoto = document.getElementsByName("scoreOfUseGoto");
      // //检查每行代码长度
      // const checkLineLength = document.getElementsByName("checkLineLength");
      // const scoreOfLineLength = document.getElementsByName("scoreOfLineLength");
      // //检查缩进格式
      // const checkIdentationStyle = document.getElementsByName("checkIdentationStyle");
      // const scoreOfIdentationStyle = document.getElementsByName("scoreOfIdentationStyle");
      // //检查操作符周围空格
      // const checkOperationSpace = document.getElementsByName("checkOperationSpace");
      // const scoreOfOperationSpace = document.getElementsByName("scoreOfOperationSpace");
      // //检查关键词是否使用大括号
      // const checkKeyWordsUseBraces = document.getElementsByName("checkKeyWordsUseBraces");
      // const scoreOfKeyWordsUseBraces = document.getElementsByName("scoreOfKeyWordsUseBraces");
      // //扩展检查项
      // const scoreOfExtendRules = document.getElementsByName("scoreOfExtendRules");
      // const checkExtendRules = document.getElementsByName("checkExtendRules");
      // //检查项完毕

      // console.log("元素的值" + score[0].value);
      this.getsets();
      console.log("查看拼接好的字符串" + JSON.stringify(this.plugin1));
      var toBack = JSON.stringify(this.plugin1);
      var newtoBack = toBack.substring(0, toBack.length - 1);

      // console.log("qs:"+qs.stringify(this.plugin1));

      console.log("传到后台的JSON:" + newtoBack);
      axios
        .post(
          "http://119.23.209.207:8080/oj/addPlugin/action",
        JSON.stringify(this.plugin1),
            {headers: {'Content-Type': 'application/json'}}
        )
        .then(function(response) {
          console.log(response.data);
          this.judge = response.data.score;
          this.student_info = response.data.student_infor;
        })
        .catch(function(error) {
          // console.log(error);
        });
      
      // axios({
      //   method: 'post',
      //   url: 'http://119.23.209.207:8080/oj/addPlugin/action',
      //   data:newtoBack
      // });
    },
    getsets() {
      var register = $("#plugin");
      var formData = register.serialize();
      console.log(formData);
      formData = register.serializeArray();
      console.log(formData);
      // 将json数组转为json 对象
      var jsons = transformToJson(formData);
      console.log(JSON.stringify(jsons));
      // var plugin1 = {}
      // plugin1.id = this.setting.plugins[0]
      this.plugin1 = JSON.stringify(jsons);
      this.settings.push(this.plugin1);

      console.log(this.settings);
      // this.unziptask.setting = JSON.stringify(this.settings)
      // 转为json数据格式
      function transformToJson(formData) {
        var obj = {};
        for (var i in formData) {
          // 下标为的i的name做为json对象的key，下标为的i的value做为json对象的value
          obj[formData[i].name] = formData[i]["value"];
        }
        return obj;
      }
    }
  }
};
</script>
