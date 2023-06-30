<template>
  <router-link
    class="col-12 col-sm-6 col-sm-6"
    :to="{ title: 'myView', params: { id: myView.id } }"
  >
    <!-- <div class="cardStyle">
      <img class="img mb-2" :src="myView.image" :alt="myView.title" />
      <div class="div">
        <h5 class="bg bg-black">{{ myView.title }}</h5>
        <h5 class="border-bottom">R {{ myView.price }}</h5>
        <p>{{ myView.size }}</p>
      </div>
    </div> -->

    <div class="divider">
      <table>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Size</th>
          <th></th>
        </tr>
        <tr>
          <td>
            <img class="img mb-2" :src="myView.image" :alt="myView.title" />
          </td>
          <td>
            <p>{{ myView.title }}</p>
          </td>
          <td>
            <p>R{{ myView.price }}</p>
          </td>
          <td>
            <p>{{ myView.size }}ml</p>
          </td>
        </tr>
      </table>
    </div>
    <!-- <div>
      <h1>Add to List</h1>
      <form action="">
        <label for="image">Image</label>
        <input type="text" name="" id="" />

        <label for="title">Title</label>
        <input type="text" name="" id="" />

        <label for="price">Price</label>
        <input type="number" name="" id="" />

        <label for="size">Size</label>
        <input type="number" name="" id="" />

        <label for="quantity">Quantity</label>
        <input type="number" name=" " id="" />
      </form>
    </div> -->
  </router-link>
</template>

<script>
export default {
  props: ["myView"],
};
</script>
<style scoped>
/* th {
  border: solid 0.1rem;
} */
table {
  width: 90%;
  margin: auto;
}

th {
  text-decoration: underline;
  color: black;
}
tr {
  border: solid 0.1rem;
  border-color: black;
}

img {
  width: 3rem;
  height: 3rem;
}

p {
  color: black;
  text-decoration: underline;
}

.divider {
  padding-top: 4rem;
  padding-left: 4rem;
  padding-right: 4rem;
}

@media screen and (max-width: 300px) {
  .divider {
    padding: 0;
  }

  table {
    margin-top: 1.2rem;
  }
}
</style>
