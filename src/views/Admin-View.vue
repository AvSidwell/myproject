<template>
  <div v-if="myView" class="myStyle">
    <img
      class="animate__animated animate__slideInLeft mb-2 img"
      :src="myView.image"
      :alt="myView.title"
    />
    <div class="div animate__animated animate__slideInRight">
      <h3 class="bg bg-black text-white">{{ myView.title }}</h3>
      <p class="paragraph"><span>Quantity:</span> {{ myView.quantity }}</p>
      <p><span>Size: </span> {{ myView.size }}ml</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    myView() {
      return this.$store.state.myView;
    },
  },
  mounted() {
    this.$store.dispatch("getmyView", this.id);
  },
};
</script>

<style>
.img {
  background: #e0e0e0;
  box-shadow: 5px 5px 5px #bebebe, -5px -5px 5px #ffffff;
}
.div {
  box-shadow: 5px 5px 5px #bebebe, -5px -5px 5px #ffffff;
}
.myStyle {
  width: 20rem;
  margin: auto;
}

span {
  font-weight: bolder;
}

/* .div {
  position: relative;
  animation-"title": animation;
  animation-delay: 3s;
  animation-duration: 2s;
}

@keyframes animation {
  0% {
    right: 400px;
    top: 0px;
  }
  25% {
    right: 300px;
    top: 0px;
  }
  50% {
   right: 200px;
    top: 0px;
  }
  75% {
    right: 100px;
    top: 0px;
  }
  100% {
    right: 0px;
    top: 0px;
  }
}
.myStyle {
  position: relative;
  animation-"title": SecAnimation;
  animation-delay: 3s;
  animation-duration: 2s;
}

@keyframes SecAnimation {
  0% {
    left: 400px;
    top: 0px;
  }
  25% {
    left: 300px;
    top: 0px;
  }
  50% {
    left: 200px;
    top: 0px;
  }
  75% {
    left: 100px;
    top: 0px;
  }
  100% {
    left: 0px;
    top: 0px;
  }
} */

img {
  width: 100%;
  height: 20rem;
  margin: 0;
}
.div {
  text-align: center;
  margin: 0;
  border: solid;
  border-top: none;
}

h2 {
  color: white;
  background-color: black;
}

.paragraph {
  border-bottom: solid 1px;
}
</style>
