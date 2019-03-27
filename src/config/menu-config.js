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
        name: '教师管理',
        componentName: 'TeacherManageLayout'
    }]
}]