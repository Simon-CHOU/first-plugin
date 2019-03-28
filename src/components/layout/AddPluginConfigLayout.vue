<template>
  <div>
    <h3>插件配置</h3>

    <form @submit.prevent="submitConfig">
      <div v-html="plugLayer">
      </div>
      <input
        type="submit"
        value="Submit"
      >
    </form>
    <p>{{resp}}</p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: function() {
    return {
      plugLayer: "",
      judge: 0,
      student_info: "d",
      resp: ""
    };
  },
  created() {
    axios
      .get("http://127.0.0.1:8082/addPlugin/cpplinthtml")
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
      const score = document.getElementsByName("score");
      const funcAnnotation = document.getElementsByName("funcAnnotation");
      const variableName = document.getElementsByName("variableName");
      const nestedLoop = document.getElementsByName("nestedLoop");
      const nestedSelect = document.getElementsByName("nestedSelect");
      const checkExtend = document.getElementsByName("checkExtend");
      // console.log("元素的值" + score[0].value);
      axios
        .post("http://127.0.0.1:8082/addPlugin/action", {
          funcAnnotation: funcAnnotation[0].value,
          score: score[0].value
          // variableName: variableName[0].value,
          // nestedLoop: nestedLoop[0].value,
          // nestedSelect: nestedSelect[0].value,
          // checkExtend: checkExtend[0].value
        })
        .then(function(response) {
          console.log(response.data);
          this.judge = response.data.score;
          this.student_info = response.data.student_infor;
        })
        .catch(function(error) {
          // console.log(error);
        });
    }
  }
};
</script>
