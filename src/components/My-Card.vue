<template>
  <router-link
    class="col-12 col-md-3 col-sm-4"
    :to="{ title: 'myView', params: { id: myView.id } }"
  >
    <div class="cardStyle">
      <img class="img mb-2" :src="myView.image" :alt="myView.title" />
      <div class="div">
        <h3 class="bg bg-black">{{ myView.title }}</h3>
        <h2>R {{ myView.price }}</h2>
        <p>{{ myView.desc }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["myView"],
};
</script>
<style>
.img {
  width: 100%;
  height: 15rem;
  background: #e0e0e0;
  box-shadow: 5px 5px 5px #bebebe, -5px -5px 5px #ffffff;
}

.div {
  box-shadow: 5px 5px 5px #bebebe, -5px -5px 5px #ffffff;
}

.cardStyle {
  margin: auto;
  margin: 1rem;
  height: 1rem;
}

.myCard {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;
}

</style>
