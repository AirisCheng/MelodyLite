<template>
  <div class="reset-password">
    <div class="reset-password-head">
      <span>找回密码</span>
    </div>
    <el-form :model="resetForm" ref="resetForm" label-width="100px" class="demo-ruleForm" :rules="rules">
      <el-form-item prop="username" label="用户名" required>
        <el-input v-model="resetForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="securityQuestion" label="安全问题" required>
        <el-select v-model="resetForm.securityQuestion" placeholder="请选择安全问题" style="width: 100%;">
          <el-option label="您的出生地是？" value="您的出生地是？"></el-option>
          <el-option label="您的小学校名是？" value="您的小学校名是？"></el-option>
          <el-option label="您的第一个手机号码是？" value="您的第一个手机号码是？"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="securityAnswer" label="安全答案" required>
        <el-input v-model="resetForm.securityAnswer" placeholder="请输入安全答案"></el-input>
      </el-form-item>
      <el-form-item prop="newPassword" label="新密码" required>
        <el-input v-model="resetForm.newPassword" placeholder="请输入新密码" type="password"></el-input>
      </el-form-item>
      <el-form-item prop="confirmPassword" label="确认密码" required>
        <el-input v-model="resetForm.confirmPassword" placeholder="请再次输入新密码" type="password"></el-input>
      </el-form-item>
      <div class="login-btn">
        <el-button @click="goback(-1)">取消</el-button>
        <el-button type="primary" @click="resetPassword">确定</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import {mixin} from '../mixins'
import {verifySecurityAnswer, resetPassword} from '../api/index'

export default {
  name: 'reset-password',
  mixins: [mixin],
  data() {
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.resetForm.newPassword) {
        callback(new Error('两次输入密码不一致'));
      } else {
        callback();
      }
    };
    return {
      resetForm: {
        username: '',
        securityQuestion: '',
        securityAnswer: '',
        newPassword: '',
        confirmPassword: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
        securityQuestion: [
          { required: true, message: '请选择安全问题', trigger: 'change' }
        ],
        securityAnswer: [
          { required: true, message: '请输入安全答案', trigger: 'blur' }
        ],
        newPassword: [
          { required: true, message: '请输入新密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ],
        confirmPassword: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetPassword() {
      let _this = this;
      let params = new URLSearchParams();
      params.append('username', this.resetForm.username);
      params.append('securityAnswer', this.resetForm.securityAnswer);
      params.append('newPassword', this.resetForm.newPassword);

      verifySecurityAnswer(params)
        .then(res => {
          if (res.code === 1) {
            resetPassword(params)
              .then(res => {
                if (res.code === 1) {
                  _this.notify('密码重置成功', 'success');
                  setTimeout(function() {
                    _this.$router.push({path: '/'});
                  }, 2000);
                } else {
                  _this.notify('密码重置失败', 'error');
                }
              })
              .catch(err => {
                _this.notify('密码重置失败', 'error');
              });
          } else {
            _this.notify('安全答案验证失败', 'error');
          }
        })
        .catch(err => {
          _this.notify('安全答案验证失败', 'error');
        });
    },
    goback(index) {
      this.$router.go(index);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/sign-up.scss';

.reset-password {
  width: 450px;
  margin: 100px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 100px;

  .reset-password-head {
    text-align: center;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: bold;
  }

  .login-btn {
    text-align: center;
    margin-top: 20px;
  }

  :deep(.el-form-item__label) {
    width: 70px !important;
  }

  :deep(.el-form-item__content) {
    margin-left: 70px !important;
  }

  :deep(.el-input__inner) {
    width: 100%;
  }

  :deep(.el-select) {
    width: 100%;
  }
}
</style> 