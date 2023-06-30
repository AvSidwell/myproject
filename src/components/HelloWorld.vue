<template>

<div>
  <img src="https://i.postimg.cc/Tw444wTF/h1.jpg" id="cont" alt="" />
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #cont {
    width: 100%;
    height: 80vh;
    margin-top: 3rem;
  }

  @media screen and (max-width: 300px) {
    #cont {
      margin-top: 0;
    }
  }
</style>
