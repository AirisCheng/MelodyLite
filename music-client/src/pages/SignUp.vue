<!--&lt;!&ndash;<template>&ndash;&gt;-->
<!--&lt;!&ndash;<div>&ndash;&gt;-->
<!--&lt;!&ndash;    <loginLogo/>&ndash;&gt;-->
<!--&lt;!&ndash;    <div class="signUp">&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="signUp-head">&ndash;&gt;-->
<!--&lt;!&ndash;            <span>用户注册</span>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;        <el-form :model="registerForm" ref="registerForm" label-width="100px" class="demo-ruleForm" :rules="rules">&ndash;&gt;-->
<!--&lt;!&ndash;            <el-form-item prop="username" label="用户名">&ndash;&gt;-->
<!--&lt;!&ndash;                <el-input v-model="registerForm.username" placeholder="用户名"></el-input>&ndash;&gt;-->
<!--&lt;!&ndash;            </el-form-item>&ndash;&gt;-->
<!--&lt;!&ndash;            <el-form-item prop="password" label="密码">&ndash;&gt;-->
<!--&lt;!&ndash;                <el-input v-model="registerForm.password" placeholder="密码" type="password"></el-input>&ndash;&gt;-->
<!--&lt;!&ndash;            </el-form-item>&ndash;&gt;-->
<!--&lt;!&ndash;            <el-form-item prop="password2" label="确认密码" required>&ndash;&gt;-->
<!--&lt;!&ndash;                <el-input v-model="registerForm.password2" placeholder="确认密码" type="password"></el-input>&ndash;&gt;-->
<!--&lt;!&ndash;            </el-form-item>&ndash;&gt;-->
<!--&lt;!&ndash;            <el-form-item prop="sex" label="性别">&ndash;&gt;-->
<!--&lt;!&ndash;                <el-radio-group v-model="registerForm.sex">&ndash;&gt;-->
<!--&lt;!&ndash;                    <el-radio :label="0">女</el-radio>&ndash;&gt;-->
<!--&lt;!&ndash;                    <el-radio :label="1">男</el-radio>&ndash;&gt;-->
<!--&lt;!&ndash;                </el-radio-group>&ndash;&gt;-->
<!--&lt;!&ndash;            </el-form-item>&ndash;&gt;-->
<!--&lt;!&ndash;            <el-form-item prop="phoneNum" label="手机">&ndash;&gt;-->
<!--&lt;!&ndash;                <el-input v-model="registerForm.phoneNum" placeholder="手机"></el-input>&ndash;&gt;-->
<!--&lt;!&ndash;            </el-form-item>&ndash;&gt;-->
<!--&lt;!&ndash;            <el-form-item prop="email" label="邮箱">&ndash;&gt;-->
<!--&lt;!&ndash;                <el-input v-model="registerForm.email" placeholder="邮箱"></el-input>&ndash;&gt;-->
<!--&lt;!&ndash;            </el-form-item>&ndash;&gt;-->
<!--&lt;!&ndash;            <el-form-item prop="birth" label="生日">&ndash;&gt;-->
<!--&lt;!&ndash;                <el-date-picker v-model="registerForm.birth" placeholder="选择日期" style="width: 100%;"></el-date-picker>&ndash;&gt;-->
<!--&lt;!&ndash;            </el-form-item>&ndash;&gt;-->
<!--&lt;!&ndash;            <el-form-item prop="introduction" label="签名">&ndash;&gt;-->
<!--&lt;!&ndash;                <el-input v-model="registerForm.introduction" placeholder="签名"></el-input>&ndash;&gt;-->
<!--&lt;!&ndash;            </el-form-item>&ndash;&gt;-->
<!--&lt;!&ndash;            <el-form-item prop="location" label="地区">&ndash;&gt;-->
<!--&lt;!&ndash;                <el-select v-model="registerForm.location" placeholder="地区" style="width: 100%;">&ndash;&gt;-->
<!--&lt;!&ndash;                    <el-option v-for=" item in cities" :key="item.value" :label="item.label" :value="item.value"></el-option>&ndash;&gt;-->
<!--&lt;!&ndash;                </el-select>&ndash;&gt;-->
<!--&lt;!&ndash;            </el-form-item>&ndash;&gt;-->
<!--&lt;!&ndash;            <el-form-item prop="securityQuestion" label="安全问题" required>&ndash;&gt;-->
<!--&lt;!&ndash;                <el-select v-model="registerForm.securityQuestion" placeholder="请选择安全问题" style="width: 100%;">&ndash;&gt;-->
<!--&lt;!&ndash;                    <el-option label="您的出生地是？" value="您的出生地是？"></el-option>&ndash;&gt;-->
<!--&lt;!&ndash;                    <el-option label="您的小学校名是？" value="您的小学校名是？"></el-option>&ndash;&gt;-->
<!--&lt;!&ndash;                    <el-option label="您的第一个手机号码是？" value="您的第一个手机号码是？"></el-option>&ndash;&gt;-->
<!--&lt;!&ndash;                </el-select>&ndash;&gt;-->
<!--&lt;!&ndash;            </el-form-item>&ndash;&gt;-->
<!--&lt;!&ndash;            <el-form-item prop="securityAnswer" label="安全答案" required>&ndash;&gt;-->
<!--&lt;!&ndash;                <el-input v-model="registerForm.securityAnswer" placeholder="请输入安全答案"></el-input>&ndash;&gt;-->
<!--&lt;!&ndash;            </el-form-item>&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="login-btn">&ndash;&gt;-->
<!--&lt;!&ndash;                <el-button @click="goback(-1)">取消</el-button>&ndash;&gt;-->
<!--&lt;!&ndash;                <el-button type="primary" @click="SignUp">确定</el-button>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;        </el-form>&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--&lt;!&ndash;</div>&ndash;&gt;-->
<!--&lt;!&ndash;</template>&ndash;&gt;-->
<!--&lt;!&ndash;<script>&ndash;&gt;-->
<!--&lt;!&ndash;import loginLogo from '../components/LoginLogo'&ndash;&gt;-->
<!--&lt;!&ndash;import {rules,cities} from '../assets/data/form'&ndash;&gt;-->
<!--&lt;!&ndash;import {mixin} from '../mixins'&ndash;&gt;-->
<!--&lt;!&ndash;import {SignUp} from '../api/index'&ndash;&gt;-->

<!--&lt;!&ndash;export default {&ndash;&gt;-->
<!--&lt;!&ndash;    name: 'sing-up',&ndash;&gt;-->
<!--&lt;!&ndash;    mixins: [mixin],&ndash;&gt;-->
<!--&lt;!&ndash;    components: {&ndash;&gt;-->
<!--&lt;!&ndash;        loginLogo&ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;    data() {&ndash;&gt;-->
<!--&lt;!&ndash;        return {&ndash;&gt;-->
<!--&lt;!&ndash;            registerForm: {&ndash;&gt;-->
<!--&lt;!&ndash;                username: '',       //用户名&ndash;&gt;-->
<!--&lt;!&ndash;                password: '',       //密码&ndash;&gt;-->
<!--&lt;!&ndash;                password2: '',      //确认密码&ndash;&gt;-->
<!--&lt;!&ndash;                sex: '',            //性别&ndash;&gt;-->
<!--&lt;!&ndash;                phoneNum: '',       //手机&ndash;&gt;-->
<!--&lt;!&ndash;                email: '',          //邮箱&ndash;&gt;-->
<!--&lt;!&ndash;                birth: '',          //生日&ndash;&gt;-->
<!--&lt;!&ndash;                introduction: '',   //签名&ndash;&gt;-->
<!--&lt;!&ndash;                location: '',       //地区&ndash;&gt;-->
<!--&lt;!&ndash;                securityQuestion: '', //安全问题&ndash;&gt;-->
<!--&lt;!&ndash;                securityAnswer: ''   //安全答案&ndash;&gt;-->
<!--&lt;!&ndash;            },&ndash;&gt;-->
<!--&lt;!&ndash;            cities: [],            //所有的地区&#45;&#45;省&ndash;&gt;-->
<!--&lt;!&ndash;            rules: {&ndash;&gt;-->
<!--&lt;!&ndash;                username: [&ndash;&gt;-->
<!--&lt;!&ndash;                    { required: true, message: '请输入用户名', trigger: 'blur' },&ndash;&gt;-->
<!--&lt;!&ndash;                    { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }&ndash;&gt;-->
<!--&lt;!&ndash;                ],&ndash;&gt;-->
<!--&lt;!&ndash;                password: [&ndash;&gt;-->
<!--&lt;!&ndash;                    { required: true, message: '请输入密码', trigger: 'blur' },&ndash;&gt;-->
<!--&lt;!&ndash;                    { min: 6, max: 20, message: '密码长度必须在 6 到 20 个字符之间', trigger: 'blur' }&ndash;&gt;-->
<!--&lt;!&ndash;                ],&ndash;&gt;-->
<!--&lt;!&ndash;                password2: [&ndash;&gt;-->
<!--&lt;!&ndash;                    { required: true, message: '请再次输入密码', trigger: 'blur' },&ndash;&gt;-->
<!--&lt;!&ndash;                    { validator: this.validatePass2, trigger: 'blur' }&ndash;&gt;-->
<!--&lt;!&ndash;                ],&ndash;&gt;-->
<!--&lt;!&ndash;                sex: [&ndash;&gt;-->
<!--&lt;!&ndash;                    { required: true, message: '请选择性别', trigger: 'change' }&ndash;&gt;-->
<!--&lt;!&ndash;                ],&ndash;&gt;-->
<!--&lt;!&ndash;                phoneNum: [&ndash;&gt;-->
<!--&lt;!&ndash;                    { required: true, message: '请输入手机号', trigger: 'blur' }&ndash;&gt;-->
<!--&lt;!&ndash;                ],&ndash;&gt;-->
<!--&lt;!&ndash;                email: [&ndash;&gt;-->
<!--&lt;!&ndash;                    { required: true, message: '请输入邮箱', trigger: 'blur' },&ndash;&gt;-->
<!--&lt;!&ndash;                    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }&ndash;&gt;-->
<!--&lt;!&ndash;                ],&ndash;&gt;-->
<!--&lt;!&ndash;                birth: [&ndash;&gt;-->
<!--&lt;!&ndash;                    { required: true, message: '请选择生日', trigger: 'change' }&ndash;&gt;-->
<!--&lt;!&ndash;                ],&ndash;&gt;-->
<!--&lt;!&ndash;                introduction: [&ndash;&gt;-->
<!--&lt;!&ndash;                    { required: true, message: '请输入签名', trigger: 'blur' }&ndash;&gt;-->
<!--&lt;!&ndash;                ],&ndash;&gt;-->
<!--&lt;!&ndash;                location: [&ndash;&gt;-->
<!--&lt;!&ndash;                    { required: true, message: '请选择地区', trigger: 'change' }&ndash;&gt;-->
<!--&lt;!&ndash;                ],&ndash;&gt;-->
<!--&lt;!&ndash;                securityQuestion: [&ndash;&gt;-->
<!--&lt;!&ndash;                    { required: true, message: '请选择安全问题', trigger: 'change' }&ndash;&gt;-->
<!--&lt;!&ndash;                ],&ndash;&gt;-->
<!--&lt;!&ndash;                securityAnswer: [&ndash;&gt;-->
<!--&lt;!&ndash;                    { required: true, message: '请输入安全答案', trigger: 'blur' },&ndash;&gt;-->
<!--&lt;!&ndash;                    { min: 2, max: 50, message: '长度在 2 到 50 个字符', trigger: 'blur' }&ndash;&gt;-->
<!--&lt;!&ndash;                ]&ndash;&gt;-->
<!--&lt;!&ndash;            }&ndash;&gt;-->
<!--&lt;!&ndash;        }        &ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;    created() {&ndash;&gt;-->
<!--&lt;!&ndash;        this.cities = cities;&ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;    methods:{&ndash;&gt;-->
<!--&lt;!&ndash;        SignUp(){&ndash;&gt;-->
<!--&lt;!&ndash;            let _this = this;&ndash;&gt;-->
<!--&lt;!&ndash;            if (this.registerForm.password.length < 6 || this.registerForm.password.length > 20) {&ndash;&gt;-->
<!--&lt;!&ndash;                this.notify('密码长度必须在6-20个字符之间', 'error');&ndash;&gt;-->
<!--&lt;!&ndash;                return;&ndash;&gt;-->
<!--&lt;!&ndash;            }&ndash;&gt;-->
<!--&lt;!&ndash;            let d = this.registerForm.birth;&ndash;&gt;-->
<!--&lt;!&ndash;            let datetime = d.getFullYear() + '-' +(d.getMonth() + 1) +'-' + d.getDate();&ndash;&gt;-->
<!--&lt;!&ndash;            let params = new URLSearchParams();&ndash;&gt;-->
<!--&lt;!&ndash;            params.append('username',this.registerForm.username);&ndash;&gt;-->
<!--&lt;!&ndash;            params.append('password',this.registerForm.password);&ndash;&gt;-->
<!--&lt;!&ndash;            params.append('sex',this.registerForm.sex);&ndash;&gt;-->
<!--&lt;!&ndash;            params.append('phoneNum',this.registerForm.phoneNum);&ndash;&gt;-->
<!--&lt;!&ndash;            params.append('email',this.registerForm.email);&ndash;&gt;-->
<!--&lt;!&ndash;            params.append('birth',datetime);&ndash;&gt;-->
<!--&lt;!&ndash;            params.append('introduction',this.registerForm.introduction);&ndash;&gt;-->
<!--&lt;!&ndash;            params.append('location',this.registerForm.location);&ndash;&gt;-->
<!--&lt;!&ndash;            params.append('avator','/img/user.jpg');&ndash;&gt;-->
<!--&lt;!&ndash;            params.append('securityQuestion',this.registerForm.securityQuestion);&ndash;&gt;-->
<!--&lt;!&ndash;            params.append('securityAnswer',this.registerForm.securityAnswer);&ndash;&gt;-->
<!--&lt;!&ndash;            SignUp(params)&ndash;&gt;-->
<!--&lt;!&ndash;                .then(res => {&ndash;&gt;-->
<!--&lt;!&ndash;                    if(res.code == 1){&ndash;&gt;-->
<!--&lt;!&ndash;                        _this.notify('注册成功','success');&ndash;&gt;-->
<!--&lt;!&ndash;                        setTimeout(function(){&ndash;&gt;-->
<!--&lt;!&ndash;                            _this.$router.push({path: '/'});&ndash;&gt;-->
<!--&lt;!&ndash;                        },2000);&ndash;&gt;-->
<!--&lt;!&ndash;                    }else{&ndash;&gt;-->
<!--&lt;!&ndash;                        _this.notify('注册失败','error');&ndash;&gt;-->
<!--&lt;!&ndash;                    }&ndash;&gt;-->
<!--&lt;!&ndash;                })&ndash;&gt;-->
<!--&lt;!&ndash;                .catch(err => {&ndash;&gt;-->
<!--&lt;!&ndash;                    _this.notify('注册失败','error');&ndash;&gt;-->
<!--&lt;!&ndash;                })&ndash;&gt;-->
<!--&lt;!&ndash;        },&ndash;&gt;-->
<!--&lt;!&ndash;        goback(index){&ndash;&gt;-->
<!--&lt;!&ndash;            this.$router.go(index);&ndash;&gt;-->
<!--&lt;!&ndash;        },&ndash;&gt;-->
<!--&lt;!&ndash;        validatePass2(rule, value, callback) {&ndash;&gt;-->
<!--&lt;!&ndash;            if (value === '') {&ndash;&gt;-->
<!--&lt;!&ndash;                callback(new Error('请再次输入密码'));&ndash;&gt;-->
<!--&lt;!&ndash;            } else if (value !== this.registerForm.password) {&ndash;&gt;-->
<!--&lt;!&ndash;                callback(new Error('两次输入密码不一致!'));&ndash;&gt;-->
<!--&lt;!&ndash;            } else {&ndash;&gt;-->
<!--&lt;!&ndash;                callback();&ndash;&gt;-->
<!--&lt;!&ndash;            }&ndash;&gt;-->
<!--&lt;!&ndash;        }&ndash;&gt;-->
<!--&lt;!&ndash;    }&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->
<!--&lt;!&ndash;</script>&ndash;&gt;-->

<!--&lt;!&ndash;<style lang="scss" scoped>&ndash;&gt;-->
<!--&lt;!&ndash;@import '../assets/css/sign-up.scss';&ndash;&gt;-->

<!--&lt;!&ndash;.signUp {&ndash;&gt;-->
<!--&lt;!&ndash;    width: 450px;&ndash;&gt;-->
<!--&lt;!&ndash;    margin: 50px auto;&ndash;&gt;-->
<!--&lt;!&ndash;    padding: 20px;&ndash;&gt;-->
<!--&lt;!&ndash;    background: #fff;&ndash;&gt;-->
<!--&lt;!&ndash;    border-radius: 5px;&ndash;&gt;-->
<!--&lt;!&ndash;    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);&ndash;&gt;-->
<!--&lt;!&ndash;    margin-bottom: 100px;&ndash;&gt;-->
<!--&lt;!&ndash;    position: absolute;&ndash;&gt;-->
<!--&lt;!&ndash;    right: 10%;&ndash;&gt;-->
<!--&lt;!&ndash;    top: 55%;&ndash;&gt;-->
<!--&lt;!&ndash;    transform: translateY(-50%);&ndash;&gt;-->

<!--&lt;!&ndash;    .signUp-head {&ndash;&gt;-->
<!--&lt;!&ndash;        text-align: center;&ndash;&gt;-->
<!--&lt;!&ndash;        margin-bottom: 20px;&ndash;&gt;-->
<!--&lt;!&ndash;        font-size: 20px;&ndash;&gt;-->
<!--&lt;!&ndash;        font-weight: bold;&ndash;&gt;-->
<!--&lt;!&ndash;    }&ndash;&gt;-->

<!--&lt;!&ndash;    .login-btn {&ndash;&gt;-->
<!--&lt;!&ndash;        text-align: center;&ndash;&gt;-->
<!--&lt;!&ndash;        margin-top: 20px;&ndash;&gt;-->
<!--&lt;!&ndash;    }&ndash;&gt;-->

<!--&lt;!&ndash;    :deep(.el-form-item__label) {&ndash;&gt;-->
<!--&lt;!&ndash;        width: 70px !important;&ndash;&gt;-->
<!--&lt;!&ndash;    }&ndash;&gt;-->

<!--&lt;!&ndash;    :deep(.el-form-item__content) {&ndash;&gt;-->
<!--&lt;!&ndash;        margin-left: 70px !important;&ndash;&gt;-->
<!--&lt;!&ndash;    }&ndash;&gt;-->

<!--&lt;!&ndash;    :deep(.el-input__inner) {&ndash;&gt;-->
<!--&lt;!&ndash;        width: 100%;&ndash;&gt;-->
<!--&lt;!&ndash;    }&ndash;&gt;-->

<!--&lt;!&ndash;    :deep(.el-select) {&ndash;&gt;-->
<!--&lt;!&ndash;        width: 100%;&ndash;&gt;-->
<!--&lt;!&ndash;    }&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->
<!--&lt;!&ndash;</style>&ndash;&gt;-->


<!--<template>-->
<!--  <div>-->
<!--    <loginLogo/>-->
<!--    <div class="sign-up">-->
<!--      <div class="sign-up-head">-->
<!--        <span>注册账号</span>-->
<!--      </div>-->
<!--      <el-form :model="registerForm" ref="registerForm" label-width="100px" class="demo-ruleForm" :rules="rules">-->
<!--        <el-form-item prop="username" label="用户名" required>-->
<!--          <el-input v-model="registerForm.username" placeholder="请输入用户名"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item prop="password" label="密码" required>-->
<!--          <el-input v-model="registerForm.password" placeholder="请输入密码" type="password"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item prop="confirmPassword" label="确认密码" required>-->
<!--          <el-input v-model="registerForm.confirmPassword" placeholder="请再次输入密码" type="password"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item prop="securityQuestion" label="安全问题" required>-->
<!--          <el-select v-model="registerForm.securityQuestion" placeholder="请选择安全问题" style="width: 100%;">-->
<!--            <el-option label="您的出生地是？" value="您的出生地是？"></el-option>-->
<!--            <el-option label="您的小学校名是？" value="您的小学校名是？"></el-option>-->
<!--            <el-option label="您的第一个手机号码是？" value="您的第一个手机号码是？"></el-option>-->
<!--          </el-select>-->
<!--        </el-form-item>-->
<!--        <el-form-item prop="securityAnswer" label="安全答案" required>-->
<!--          <el-input v-model="registerForm.securityAnswer" placeholder="请输入安全答案"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item prop="birth" label="生日" required>-->
<!--          <el-date-picker v-model="registerForm.birth" type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>-->
<!--        </el-form-item>-->
<!--        <el-form-item prop="sex" label="性别" required>-->
<!--          <el-radio-group v-model="registerForm.sex">-->
<!--            <el-radio :label="1">男</el-radio>-->
<!--            <el-radio :label="0">女</el-radio>-->
<!--          </el-radio-group>-->
<!--        </el-form-item>-->
<!--        <el-form-item prop="phoneNum" label="手机号">-->
<!--          <el-input v-model="registerForm.phoneNum" placeholder="请输入手机号"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item prop="email" label="电子邮箱">-->
<!--          <el-input v-model="registerForm.email" placeholder="请输入电子邮箱"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item prop="introduction" label="签名">-->
<!--          <el-input v-model="registerForm.introduction" placeholder="请输入签名"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item prop="location" label="地区">-->
<!--          <el-input v-model="registerForm.location" placeholder="请输入地区"></el-input>-->
<!--        </el-form-item>-->
<!--        <div class="login-btn">-->
<!--          <el-button @click="goback(-1)">取消</el-button>-->
<!--          <el-button type="primary" @click="SignUp">确定</el-button>-->
<!--        </div>-->
<!--      </el-form>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->
<!--<script>-->
<!--import loginLogo from '../components/LoginLogo'-->
<!--import {rules,cities} from '../assets/data/form'-->
<!--import {mixin} from '../mixins'-->
<!--import {SignUp} from '../api/index'-->

<!--export default {-->
<!--  name: 'sign-up',-->
<!--  mixins: [mixin],-->
<!--  components: {-->
<!--    loginLogo-->
<!--  },-->
<!--  data() {-->
<!--    const validatePass2 = (rule, value, callback) => {-->
<!--      if (value === '') {-->
<!--        callback(new Error('请再次输入密码'));-->
<!--      } else if (value !== this.registerForm.password) {-->
<!--        callback(new Error('两次输入密码不一致'));-->
<!--      } else {-->
<!--        callback();-->
<!--      }-->
<!--    };-->
<!--    return {-->
<!--      registerForm: {-->
<!--        username: '',-->
<!--        password: '',-->
<!--        confirmPassword: '',-->
<!--        sex: '1',-->
<!--        phoneNum: '',-->
<!--        email: '',-->
<!--        birth: '',-->
<!--        introduction: '',-->
<!--        location: '',-->
<!--        securityQuestion: '',-->
<!--        securityAnswer: ''-->
<!--      },-->
<!--      cities: [],            //所有的地区&#45;&#45;省-->
<!--      rules: {-->
<!--        username: [-->
<!--          { required: true, message: '请输入用户名', trigger: 'blur' },-->
<!--          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }-->
<!--        ],-->
<!--        password: [-->
<!--          { required: true, message: '请输入密码', trigger: 'blur' },-->
<!--          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }-->
<!--        ],-->
<!--        confirmPassword: [-->
<!--          { required: true, message: '请再次输入密码', trigger: 'blur' },-->
<!--          { validator: validatePass2, trigger: 'blur' }-->
<!--        ],-->
<!--        securityQuestion: [-->
<!--          { required: true, message: '请选择安全问题', trigger: 'change' }-->
<!--        ],-->
<!--        securityAnswer: [-->
<!--          { required: true, message: '请输入安全答案', trigger: 'blur' }-->
<!--        ],-->
<!--        birth: [-->
<!--          { required: true, message: '请选择生日', trigger: 'change' }-->
<!--        ],-->
<!--        sex: [-->
<!--          { required: true, message: '请选择性别', trigger: 'change' }-->
<!--        ]-->
<!--      }-->
<!--    }-->
<!--  },-->
<!--  created() {-->
<!--    this.cities = cities;-->
<!--  },-->
<!--  methods:{-->
<!--    SignUp(){-->
<!--      let _this = this;-->
<!--      this.$refs['registerForm'].validate(valid => {-->
<!--        if (valid) {-->
<!--          let d = this.registerForm.birth;-->
<!--          let datetime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();-->
<!--          let params = new URLSearchParams();-->
<!--          params.append('username', this.registerForm.username);-->
<!--          params.append('password', this.registerForm.password);-->
<!--          params.append('sex', this.registerForm.sex);-->
<!--          params.append('phoneNum', this.registerForm.phoneNum);-->
<!--          params.append('email', this.registerForm.email);-->
<!--          params.append('birth', datetime);-->
<!--          params.append('introduction', this.registerForm.introduction);-->
<!--          params.append('location', this.registerForm.location);-->
<!--          params.append('securityQuestion', this.registerForm.securityQuestion);-->
<!--          params.append('securityAnswer', this.registerForm.securityAnswer);-->
<!--          SignUp(params)-->
<!--            .then(res => {-->
<!--              if (res.code === 1) {-->
<!--                _this.notify('注册成功', 'success');-->
<!--                setTimeout(function () {-->
<!--                  _this.$router.push({path: '/'});-->
<!--                }, 2000);-->
<!--              } else {-->
<!--                _this.notify(res.msg || '注册失败', 'error');-->
<!--              }-->
<!--            })-->
<!--            .catch(err => {-->
<!--              _this.notify('注册失败', 'error');-->
<!--            });-->
<!--        } else {-->
<!--          if (this.registerForm.password !== this.registerForm.confirmPassword) {-->
<!--            _this.notify('两次密码不一致', 'error');-->
<!--          } else {-->
<!--            _this.notify('请填写必填项', 'error');-->
<!--          }-->
<!--          return false;-->
<!--        }-->
<!--      });-->
<!--    },-->
<!--    goback(index){-->
<!--      this.$router.go(index);-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style lang="scss" scoped>-->
<!--@import '../assets/css/sign-up.scss';-->

<!--.sign-up {-->
<!--  width: 450px;-->
<!--  margin: 50px auto;-->
<!--  padding: 20px;-->
<!--  background: #fff;-->
<!--  border-radius: 5px;-->
<!--  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);-->
<!--  margin-bottom: 100px;-->
<!--  position: absolute;-->
<!--  right: 10%;-->
<!--  top: 55%;-->
<!--  transform: translateY(-50%);-->

<!--  .sign-up-head {-->
<!--    text-align: center;-->
<!--    margin-bottom: 20px;-->
<!--    font-size: 20px;-->
<!--    font-weight: bold;-->
<!--  }-->

<!--  .login-btn {-->
<!--    text-align: center;-->
<!--    margin-top: 20px;-->
<!--  }-->

<!--  :deep(.el-form-item__label) {-->
<!--    width: 70px !important;-->
<!--  }-->

<!--  :deep(.el-form-item__content) {-->
<!--    margin-left: 70px !important;-->
<!--  }-->

<!--  :deep(.el-input__inner) {-->
<!--    width: 100%;-->
<!--  }-->

<!--  :deep(.el-select) {-->
<!--    width: 100%;-->
<!--  }-->
<!--}-->
<!--</style>-->

<template>
  <div>
    <loginLogo/>
    <div class="sign-up">
      <div class="sign-up-head">
        <span>注册账号</span>
      </div>
      <el-form :model="registerForm" ref="registerForm" label-width="100px" class="demo-ruleForm" :rules="rules">
        <el-form-item prop="username" label="用户名" required>
          <el-input v-model="registerForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码" required>
          <el-input v-model="registerForm.password" placeholder="请输入密码" type="password"></el-input>
        </el-form-item>
        <el-form-item prop="confirmPassword" label="确认密码" required>
          <el-input v-model="registerForm.confirmPassword" placeholder="请再次输入密码" type="password"></el-input>
        </el-form-item>
        <el-form-item prop="securityQuestion" label="安全问题" required>
          <el-select v-model="registerForm.securityQuestion" placeholder="请选择安全问题" style="width: 100%;">
            <el-option label="您的出生地是？" value="您的出生地是？"></el-option>
            <el-option label="您的小学校名是？" value="您的小学校名是？"></el-option>
            <el-option label="您的第一个手机号码是？" value="您的第一个手机号码是？"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="securityAnswer" label="安全答案" required>
          <el-input v-model="registerForm.securityAnswer" placeholder="请输入安全答案"></el-input>
        </el-form-item>
        <el-form-item prop="birth" label="生日" required>
          <el-date-picker v-model="registerForm.birth" type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item prop="sex" label="性别" required>
          <el-radio-group v-model="registerForm.sex">
            <el-radio :label="1">男</el-radio>
            <el-radio :label="0">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item prop="phoneNum" label="手机号">
          <el-input v-model="registerForm.phoneNum" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="email" label="电子邮箱">
          <el-input v-model="registerForm.email" placeholder="请输入电子邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="introduction" label="签名">
          <el-input v-model="registerForm.introduction" placeholder="请输入签名"></el-input>
        </el-form-item>
        <el-form-item prop="location" label="地区">
          <el-input v-model="registerForm.location" placeholder="请输入地区"></el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button @click="goback(-1)">取消</el-button>
          <el-button type="primary" @click="SignUp">确定</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
import loginLogo from '../components/LoginLogo'
import {rules,cities} from '../assets/data/form'
import {mixin} from '../mixins'
import {SignUp} from '../api/index'

export default {
  name: 'sign-up',
  mixins: [mixin],
  components: {
    loginLogo
  },
  data() {
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.registerForm.password) {
        callback(new Error('两次输入密码不一致'));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        username: '',
        password: '',
        confirmPassword: '',
        sex: '1',
        phoneNum: '',
        email: '',
        birth: '',
        introduction: '',
        location: '',
        securityQuestion: '',
        securityAnswer: ''
      },
      cities: [],            //所有的地区--省
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ],
        confirmPassword: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { validator: validatePass2, trigger: 'blur' }
        ],
        securityQuestion: [
          { required: true, message: '请选择安全问题', trigger: 'change' }
        ],
        securityAnswer: [
          { required: true, message: '请输入安全答案', trigger: 'blur' }
        ],
        birth: [
          { required: true, message: '请选择生日', trigger: 'change' }
        ],
        sex: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ]
      }
    }
  },
  created() {
    this.cities = cities;
  },
  methods:{
    SignUp(){
      let _this = this;
      this.$refs['registerForm'].validate(valid => {
        if (valid) {
          let d = this.registerForm.birth;
          let datetime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
          let params = new URLSearchParams();
          params.append('username', this.registerForm.username);
          params.append('password', this.registerForm.password);
          params.append('sex', this.registerForm.sex);
          params.append('phoneNum', this.registerForm.phoneNum);
          params.append('email', this.registerForm.email);
          params.append('birth', datetime);
          params.append('introduction', this.registerForm.introduction);
          params.append('location', this.registerForm.location);
          params.append('securityQuestion', this.registerForm.securityQuestion);
          params.append('securityAnswer', this.registerForm.securityAnswer);
          SignUp(params)
            .then(res => {
              if (res.code === 1) {
                _this.notify('注册成功', 'success');
                setTimeout(function () {
                  _this.$router.push({path: '/'});
                }, 2000);
              } else {
                _this.notify(res.msg || '注册失败', 'error');
              }
            })
            .catch(err => {
              _this.notify('注册失败', 'error');
            });
        } else {
          if (this.registerForm.password !== this.registerForm.confirmPassword) {
            _this.notify('两次密码不一致', 'error');
          } else {
            _this.notify('请填写必填项', 'error');
          }
          return false;
        }
      });
    },
    goback(index){
      this.$router.go(index);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/sign-up.scss';

.sign-up {
  width: 450px;
  margin: 50px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 100px;
  position: absolute;
  right: 10%;
  top: 55%;
  transform: translateY(-50%);

  .sign-up-head {
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
