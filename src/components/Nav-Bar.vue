<template>
  <nav class="navbar navbar-dark fixed-top">
    <div class="container-fluid">
      <ul class="d-flex">
        <li class="nav-item">
          <router-link class="nav-link navStyle" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link navStyle" to="/myViews"
            >Products</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link navStyle" to="/">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link navStyle" to="/contact"
            >Contact Us</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link navStyle" to="/">Admin</router-link>
        </li>
      </ul>
      <button
        class="navbar-toggler togglerBtn" type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end text-bg-dark"
        tabindex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Fume's</h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <router-link class="nav-link navStyle" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link navStyle" to="/myViews"
                >Products</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link navStyle" to="/">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link navStyle" to="/contact"
                >Contact Us</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="navStyle" to="">Admin</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
<style scoped>
nav {
  height: 3rem;
}
.navStyle {
  color: #c8bff2;
  margin: 0.5rem;
}

.navStyle:hover {
  color: #eed5fd;
  border-bottom: solid 0.1rem #eed5fd;
}
.navStyle1 {
  color: #c8bff2;
  margin: 0.5rem;
}

.navStyle1:hover {
  color: #eed5fd;
  border-bottom: solid 0.1rem #eed5fd;
}

.togglerBtn {
  display: none;
}

.navLogo {
  height: 2rem;
  width: 2rem;
  border-radius: 1rem;
  margin: 0.5rem;
  margin-right: 3rem;
}

nav {
  background-color: #5c6453;
}
ul {
  list-style: none;
}
/* End of Nav Styling */

/* Nav Responsiveness */
@media screen and (max-width: 300px) {
  .togglerBtn {
    display: block;
  }
  .navStyle {
    visibility: hidden;
  }
  .navLogo {
    margin: 0;
  }
  .navStyle {
    margin: 0;
  }
}
</style>
