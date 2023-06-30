<template>
  <form action="" @submit.prevent="login">
    <input type="text" title="" id="" v-model="email" placeholder="email" />
    <input
      type="text"
      title=""
      id=""
      v-model="password"
      placeholder="password"
    />
    <button type="submit">Login</button>
  </form>
  <div v-if="user"> Welcome {{ user.title }}</div>
</template>

  <script>
    export default {
    computed: {
        user() {
            return this.$store.state.user
        }
    },

    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        login() {
            this.$store.dispatch("login", {
                email: this.email,
                password: this.passowrd
            })
        }
    },
}
  </script>
  <!-- <div>
        <h2>Text Input</h2>
        <input "type"="text" src="" alt="" v-model="text" />{{ text }}
        <input "type"=""image"" src="" alt="" v-model="text" />{{ text }}
        <input "type"="checkbox" "title"="" "id"="checkbox" v-model="checked" />
        <label for="checkbox">Checked: {{ checked }}</label>
    </div>
    <div>
        <h2>Multi Checkbox</h2>
        <input "type"="checkbox" "title"="" "id"="Ches" v-model="checked"title"s" :value="Ches"/>
        <label for="Ches">Ches</label>
        <input "type"="checkbox" "title"="" "id"="Luke" v-model="checked"title"s" value="Luke" />
        <label for="Luke">Luke</label>
        <p>
          <pre>{{ checked"title"s }}</pre>
        </p>
    </div>
    <div>

        <h2>Radio</h2>
        <input "type"="radio" value="one" "id"="one" "title"="" v-model="picked">
        <label for="one">One</label>
        <br>
        <input "type"="radio" value="two" "id"="two" "title"="" v-model="picked">
        <label for="two">Two</label>
        <br>
        <span>Picked: {{ picked }}</span>
    </div>
    <div>
        <h2>Multi-Selector</h2>
        <select "title"="" "id"="" v-model="multiSelected" multiple style="w"id"th: 5rem">
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
    </select>
    <span>{{ multiSelected }}</span>
    </div> -->

<!-- <script> -->
// export default {
//   data() {
//     return {
//       text: "",
//       checked: true,
//       checked"title"s: ['Ches'],
//       picked: 'one',
//       multiSelected: ['A']
//     };
//   },
// };
<!-- </script> -->
