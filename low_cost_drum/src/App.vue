<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" class="nav-background">

        <b-navbar variant="faded" type="light">
          <b-navbar-brand href="#">
            <img src="./batera.png" alt="Kitten" height="100" width="150">
          </b-navbar-brand>
        </b-navbar>

        <b-navbar-brand href="#">Arddrum</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav> -->

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <!-- <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form> -->

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">BR</b-dropdown-item>
              <b-dropdown-item href="#">EN</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown text="About" right>
              <b-dropdown-item href="#">BR</b-dropdown-item>
              <b-dropdown-item href="#">EN</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
      <div class="bloco-1">
        <img src="./amigo.jpg" fluid alt="Kitten" class="imgp">
      </div>
  </div>
</template>

<style>
body{
  background: #EEf1f4;
  font-family: Arial, Helvetica, sans-serif;
}
/* .bloco-1{
  height: 100%;
} */
.imgp{
  width: 100%;
  height: 60vh;
  /* padding: 100px 0; */
  /* width: 100%; */
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
}
.nav-background{
  background:#2c3e50
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
