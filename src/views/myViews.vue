<template>
  <div v-if="myViews" class="row">
    <MyCardComp id="me" v-for="myView of myViews" :key="myView.id" :myView="myView"/>
  </div>
  <div v-else>Processing...</div>
</template>
<script>
import MyCardComp from "@/components/My-Card.vue";
export default {
  computed: {
    myViews() {
      return this.$store.state.myViews
    }
  },
  mounted() {
    this.$store.dispatch("getmyViews");
  },

  components: { MyCardComp },
}
</script>
<style>
    
</style>