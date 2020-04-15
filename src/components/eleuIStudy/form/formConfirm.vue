<template>
    <div>
        <div style="width:500px;background-color:pink;">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                class="demo-ruleForm">
                <el-form-item label="密码1" prop="pass1">
                    <el-input type="password" v-model="ruleForm.pass1" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码1" prop="checkPass1">
                    <el-input type="password" v-model="ruleForm.checkPass1" autocomplete="off"></el-input>
                </el-form-item>

            </el-form>
        </div>
        <div style="width:500px;background-color:yellow">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm2" label-width="100px"
                class="demo-ruleForm">
                <el-form-item label="密码2" prop="pass2">
                    <el-input type="password" v-model="ruleForm.pass2" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码2" prop="checkPass2">
                    <el-input type="password" v-model="ruleForm.checkPass2" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        var validatePass1 = (rule, value, callback) => {
            if (value === '') {
                // callback(new Error('请输入密码'));
                this.$refs.ruleForm.validateField('checkPass1');
                callback();

            } else {
                if (this.ruleForm.checkPass1 !== '') {
                    this.$refs.ruleForm.validateField('checkPass1');
                }
                callback();
            }
        };
        var validatePass11 = (rule, value, callback) => {
            if (value === '') {
                // callback(new Error('请再次输入密码'));
                this.$refs.ruleForm.validateField('checkPass1');
                callback();
            } else {
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if ((this.ruleForm.pass1 === '') && (this.ruleForm.pass2 !== '')) {
                // callback(new Error('请输入密码'));
                this.$refs.ruleForm2.validateField('checkPass2');
                callback();

            } else {
                if (this.ruleForm.checkPass1 !== '') {
                    this.$refs.ruleForm2.validateField('checkPass2');
                }
                callback();
            }
        };
        var validatePass22 = (rule, value, callback) => {
            if (this.ruleForm.checkPass1 === '') {
                // callback(new Error('请再次输入密码'));
                this.$refs.ruleForm2.validateField('checkPass2');
                callback();
            } else {
                callback();
            }
        };
        return {
            ruleForm: {
                pass1: '',
                checkPass1: '',

                pass2: '',
                checkPass2: ''
            },
            rules: {
                pass1: [
                    { validator: validatePass1, trigger: 'blur' }
                ],
                checkPass1: [
                    { validator: validatePass11, trigger: 'blur' }
                ],

                pass2: [
                    { validator: validatePass2, trigger: 'blur' }
                ],
                checkPass2: [
                    { validator: validatePass22, trigger: 'blur' }
                ],
            }
        };
    },
    methods: {
        submitForm (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm (formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>

<style lang=""  scoped>
</style>