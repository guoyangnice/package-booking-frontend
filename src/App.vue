<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <!-- <router-view/> -->
    <!--入库界面-->
    <H1>{{msg}}</H1>
    <p>{{this.$store.getters.getAllPackages}}</p>
  <a-form
      :form="form"
      @submit="handleSubmit"
    >
    
      <a-form-item label="运单号">
        <a-input
          v-decorator="[
            'packageNumber',
            {
              rules: [{ required: true, message: '不能为空' }],
            }
          ]"
        />
      </a-form-item>

      <a-form-item label="收件人">
        <a-input
          v-decorator="[
            'recipient',
            {
              rules: [{ required: true, message: '不能为空' }],
            }
          ]"
        />
      </a-form-item>
      <a-form-item label="电话">
        <a-input
          v-decorator="[
            'phoneNumber',
            {
              rules: [{ required: true, message: '不能为空' }],
            }
          ]"
        />
      </a-form-item>
      <a-form-item label="重量">
        <a-input
          v-decorator="[
            'weight',
            {
              rules: [{ required: true, message: '不能为空' }],
            }
          ]"
        />
      </a-form-item>
      <a-button
        type="primary"
        html-type="submit"
      >
        提交
      </a-button>
    </a-form>
      
  </div>
</template>
<script>
export default  {
  name:"App",
  data(){
    return {
      msg:"包裹入库",
      packageInfo:{

      }
    }
  },
  computed: {
    // username () {
    //   return this.$store.state.username;
    // },
  },
  watch: {
    username (val) {
      console.log('this.$store.state.username: ', val);
      this.form.setFieldsValue({username: val});
    },
  },
  created () {
    this.form = this.$form.createForm(this, {
      onFieldsChange: (_, changedFields) => {
        this.$emit('change', changedFields);
      },
      mapPropsToFields: () => {
        return {
          username: this.$form.createFormField({
            value: this.username,
          }),
        };
      },
      onValuesChange: (_, values) =>{
        console.log(values);
        // Synchronize to vuex store in real time 
        // this.$store.commit('update', values)
      },
    });
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ',values );
          //this.$store.commit('update', values);
          this.$store.dispatch('commitMessage',values);
        }
      });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
