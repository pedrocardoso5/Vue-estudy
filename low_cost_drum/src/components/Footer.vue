<template>
    <div>
        <b-navbar toggleable="lg" type="dark" fixed="top" class="nav-background">

        <b-navbar variant="faded" type="light">
          <b-navbar-brand href="#">
            <!-- <img src="../images/smile.png" alt="Kitten" height="100" width="150"> -->
          </b-navbar-brand>
        </b-navbar>
        <b-navbar-brand href="#" color:black>LAPERME</b-navbar-brand>
        <!-- <b-navbar-brand to="/">Home</b-navbar-brand>
        <b-navbar-brand to="/sobre">About</b-navbar-brand> -->
        <!-- <b-navbar-brand to="/">Home</b-navbar-brand> -->
        <b-navbar-toggle target="nav-collapse" style="color: black">V</b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item-dropdown text="Projetos" left>
              <b-dropdown-item to="/tutorial">Bateria</b-dropdown-item>
            </b-nav-item-dropdown>
              <!-- <b-dropdown-item href="#">EN</b-dropdown-item> -->
            <b-nav-item to="/sobre" right>Sobre</b-nav-item>
            <b-nav-item to="/contato" right>Contato</b-nav-item>
            <!-- <b-nav-item to="/tutorial">Tutorial</b-nav-item> -->
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <!-- <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form> -->

            <!-- <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">BR</b-dropdown-item>
              <b-dropdown-item href="#">EN</b-dropdown-item>
            </b-nav-item-dropdown> -->

          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#nav a.router-link-exact-active{
    color:#FF3B3F;
}
.nav-background{
  background:white;
  line-height: 30px;
}
</style>
