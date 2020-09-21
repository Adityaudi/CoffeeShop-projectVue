<template>
  <div id="app">
       <div id="app">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
}
</script>

<style>
</style>
