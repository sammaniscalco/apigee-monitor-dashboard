<template>
  <b-navbar toggleable="md" type="dark" class="bg-dark">
    <b-navbar-brand href="#">Apigee Monitor</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mr-auto">
        <b-nav-item>
          <router-link class="nav-link" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-home"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Dashboard
          </router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/Servers" class="nav-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-bar-chart-2"
            >
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
            Servers
          </router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/Components" class="nav-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-layers"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
            Components
          </router-link>
        </b-nav-item>
      </b-navbar-nav>
      <div class="form-inline mb-0">
        <input
          class="form-control mr-sm-2"
          v-model="searchValue"
          type="text"
          @keyup.enter="submit"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "navHeader",
  data() {
    return {
      searchValue: null
    };
  },
  methods: {
    submit: function() {
      this.$emit("searchValue", this.searchValue);
      this.searchValue=null;
    }
  }
};
</script>
