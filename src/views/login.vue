<template>
  <div class="login">
      <main>
          <div class="wrapper-login">
              <div class="logo">
                  <img src="@/../public/logo.png" alt="logo">
                  <h2>LOGIN</h2> 
                  <p>Belum punya akun? <code @click="$bvModal.show('modal-signUp')"> Sign Up! </code></p> 
              </div>
            <div class="userpass">
                <b-input-group prepend="@">
                <b-form-input style="text-align:center"  v-model="datalogin.username" placeholder="Enter your username"></b-form-input>
                </b-input-group>
                <b-input-group style="margin:15px auto 22px;">
                <b-form-input type="password" style="text-align:center; padding:20px" v-model="datalogin.password" placeholder="Enter your password"></b-form-input>
                </b-input-group>
               <b-button variant="primary" block @click="loginUser()">LOGIN</b-button>
            </div>
          </div>
          <!-- MODAL SIGN UP -->
           <b-modal id="modal-signUp" hide-footer header-bg-variant="primary" header-text-variant="white">
                <template v-slot:modal-title>
                    <h2> Register </h2>
                </template>
                <div class="d-flex-column">
                    <div class="input">
                     <b-form-input v-model="dataUsers.name" placeholder="Enter your name" style="font-size:14pt;margin-bottom:10px;"></b-form-input>
                     <b-input-group prepend="@" style="margin-bottom:10px;">
                        <b-form-input v-model="dataUsers.username" placeholder="Enter your username" style="font-size:14pt;"></b-form-input>
                     </b-input-group>
                     <b-form-file v-model="dataUsers.photo" :state="Boolean(dataUsers.photo)" placeholder="Choose a photo..." style="margin-bottom:10px"></b-form-file>
                     <b-form-input type="password" v-model="dataUsers.password" placeholder="Password" style="font-size:14pt;margin-bottom:10px"></b-form-input>
                     <b-form-select v-model="dataUsers.role" style="font-size:14pt;margin-bottom:10px;">
                        <b-form-select-option :value="null" disabled>Role</b-form-select-option>
                        <b-form-select-option value="Admin">User Admin.</b-form-select-option>
                        <b-form-select-option value="User">User Biasa.</b-form-select-option>
                      </b-form-select>
                    </div>
                </div>
                <b-button class="mt-3" variant="primary" block @click="regist()"> <h5>Konfirmasi</h5></b-button>
          </b-modal>
      </main>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "login",
    data(){
        return {    
            datalogin: {
                username : '',
                password : ''
            },
            status : 'error',
            dataUsers: {
                name: '',
                username: '',
                photo: null,
                password: '',
                role: null
            }
        }
    },
    methods: {
       loginUser(){
           if(this.datalogin.username != "" && this.datalogin.password != ""){
            axios.post('http://localhost:2150/auth', {
                username : this.datalogin.username,
                password : this.datalogin.password
            })
                .then((result) => {
                    this.$router.replace({ name : "home"})
                    this.datalogin = []
                    alert('berhasil Login', result)
                }).catch((err) => {
                    alert('username or password invalid', err)
                    this.datalogin= []
                });
            }else {
                alert('A username and password must be present')
            }
        },
        regist(){
            if(this.dataUsers.name != "" && this.dataUsers.password != "" && this.dataUsers.photo != "" && this.dataUsers.username != ""){
                axios.post('http://localhost:2150/users', {
                    name : this.dataUsers.name,
                    username : this.dataUsers.username,
                    photo : this.dataUsers.photo.name,
                    password : this.dataUsers.password,
                    role : this.dataUsers.role
                })
                    alert('User Barhasil ditambahkan, Selamat datang!')
                    this.dataUsers = []
                    this.$bvModal.hide('modal-signUp')
            }else {
                alert('A username and password must be present')
            }
        }
    }
}

</script>

<style scoped>
    .login {
        background-image:url("../assets/login.jpg"); 
        background-size: cover;
        height: 40em;
    }
    main {
        display: flex;
        justify-content: center;
        padding-top: 6em;
    }
    .wrapper-login {
        background-color: white;
        width:35em;
        height: 25em; 
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 1);
        z-index: 1;
        border-radius: 6%;
    }
    .logo img, .logo h2 {
        width: 4em;
        height: 4em;
        display: block;
        margin: 8px auto;
        text-align: center;
    }
    .logo p {
        text-align: center;
        margin-top: -6em;
    }
    .userpass  {
        width: 80%;
        display: block;
        margin: 2em auto;
    }
    code {
        cursor: pointer;
        font-size: 13pt;
    }
    .input {
        font-family: 'Courier New', Courier, monospace;
        padding: 1.5em;
    }
</style>