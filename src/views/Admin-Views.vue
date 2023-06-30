<template>
  <div v-if="myViews" class="row">
    <MyAdminComp
      id="me"
      v-for="myView of myViews"
      :key="myView.id"
      :myView="myView"
    />
  </div>

  <div v-else>Processing...</div>
  <div>
    <h1>Add to List</h1>
    <form action="">
      <label for="image">Image URL</label>
      <br />
      <input type="text" name="" id="" v-model="form.image" />

      <label for="title">Title</label>
      <br />
      <input type="text" name="" id="" v-model="form.title" />

      <label for="price">Price</label>
      <br />
      <input type="number" name="" id="" v-model="form.price" />

      <label for="size">Size</label>
      <br />
      <input type="number" name="" id="" v-model="form.size" />

      <label for="quantity">Quantity</label>
      <br />
      <input type="number" name=" " id="" v-model="form.quantity" />

      <label for="type">Type</label>
      <br />
      <input type="text" name=" " id="" v-model="form.type" />
    </form>
    <button @click="getAdminIn">Submit</button>
  </div>
</template>
<script>
import MyAdminComp from "@/components/My-Admin.vue";
export default {
  name: "Form",
  data() {
    return {
      form: {
        image: null,
        title: null,
        price: null,
        size: null,
        quantity: null,
        type: null,
      },
    }
  },
  computed: {
    myViews() {
      return this.$store.state.myViews;
    }
  },
  methods: {
    getAdminIn() {
      return this.$store.dispatch("getAdminIn", this.form),
      console.warn(this.getAdminIn)
        }
      },
    mounted() {
      this.$store.dispatch("getmyViews")
    },

      components: { MyAdminComp },
    }

      
</script>
<style>
/* .row {
      height: 150vh;
    } */

/* @media screen and (max-width: 300px){
        .row {
          height: 700vh;
        }
    } */
</style>
