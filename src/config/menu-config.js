module.exports = [{
    name: '插件',
    id: 'plugin',
    sub: [{
        name: '管理插件',
        componentName: 'AddPluginLayout'
    }, {
        name: '配置插件',
        componentName: 'AddPluginConfigLayout'
    }]
}, {
    name: '人员',
    id: 'person',
    sub: [{
        name: '学生管理',
        componentName: 'StudentManageLayout'
    }, {
        name: '教学班级管理',
        componentName: 'ClassManageLayout'
    },{
        name: '教师管理',
        componentName: 'TeacherManageLayout'
    }]
},
{
    name: '题目',
    id: 'problem',
    sub: [{
        name: '题目管理',
        componentName: 'ProblemManageLayout'
    }, {
        name: '作业管理',
        componentName: 'AssignmentManageLayout'
    }]
}]