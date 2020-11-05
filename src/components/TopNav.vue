<template>
  <div class="topnav">
    <!-- <img class="nav-logo" src="../assets/datageneratorlogo.png" alt=""> -->
    <h1 class="logo"><span class="text-primary"><i class="fas fa-laptop-code"></i> Data</span> Generator</h1>
    <div>
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/login" class="nav-link">Login</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "TopNav",
};
</script>
<style>
.topnav {
  background-color: var(--color-palette1);
  color: #fff;
  height: 70px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 75%;
}

.logo {
    cursor:default;
}

.text-primary {
    color: var(--color-palette3);
}


.topnav .nav-link {
  color: #fff !important;
  text-decoration: none;
  margin: 10px 20px;
  padding: 20px;
  transition: all 0.5s ease-in-out;
}

.topnav .nav-link:hover {
  background-color: var(--color-palette3);
}
</style>