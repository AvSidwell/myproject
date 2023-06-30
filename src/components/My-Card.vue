<template>
  <router-link
    class="col-12 col-md-3 col-sm-3"
    :to="{ title: 'myView', params: { id: myView.id } }"
  >
    <div class="cardStyle mt-5">
      <img class="img mb-2" :src="myView.image" :alt="myView.title" />
      <div class="div">
        <h5 class="bg bg-black">{{ myView.title }}</h5>
        <h5 class="border-bottom">R {{ myView.price }}</h5>
        <p>{{ myView.size }}ml</p>
        <button @click="addToCart" type="button" class="btOn">Add to 🛒</button>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["myView"],
};


</script>
<style scoped>
.btOn {
  color: #c8bff2;
  margin: 0.5rem;
  background-color: #5c6453;
  border: solid #c8bff2;
}
.btOn:hover {
  color: #5c6453;
  margin: 0.5rem;
  background-color: #c8bff2;
  border: solid black;
}
.img {
  width: 300px;
  height: 20rem;
  background: #e0e0e0;
  box-shadow: 5px 5px 5px #bebebe, -5px -5px 5px #ffffff;
}

.div {
  text-align: center;
  /* height: 4rem; */
  border: solid 0.1rem black;
  box-shadow: 5px 5px 5px #bebebe, -5px -5px 5px #ffffff;
}

.cardStyle {
  margin-top: 20px;
  width: 300px;
  /* margin: 1rem;
  height: 1rem; */
}

.myCard {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;
}
</style>
