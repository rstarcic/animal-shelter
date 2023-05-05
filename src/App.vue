<template>
  <v-app>
    <v-app-bar app color="#D13A40" dense outlined>
		<div class="d-flex align-center">
		  	<v-img alt="Logo Happy Tails" contain src="@/assets/Logo.png" width="45" height="48" />
      		<v-toolbar-title class="custom-title">Happy Tails</v-toolbar-title>
		</div>
		<v-spacer></v-spacer>
		<v-btn text to="/">Home</v-btn>
		<v-btn text to="/about">About us</v-btn>
		<v-btn text to="/adopt">Adopt Me</v-btn>
		<v-btn text to="/contact">Contact</v-btn>
		<v-spacer></v-spacer>
		<v-btn icon><v-icon>mdi-login</v-icon></v-btn>
		<v-btn icon><v-icon>mdi-account</v-icon></v-btn>
	  </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
	<v-footer class="footer-design">
		<v-card-title>
    		Get connected with us on social networks!
		</v-card-title>
		<div class="d-flex ml-auto">
			<v-btn small class="icon">
				<v-icon>mdi-facebook</v-icon>
			</v-btn>
			<v-btn small class="icon">
				<v-icon>mdi-instagram</v-icon>
			</v-btn>
			<v-btn small class="icon">
				<v-icon>mdi-twitter</v-icon>
			</v-btn>
		</div>
    </v-footer>
  </v-app>
</template>

<style>
.custom-title {
	font-weight: bold;
  	font-size: 24px;
}
.v-btn {
  font-weight: bold;
  font-size: 16px;
}
.footer-design { 
	margin-top: 50px;
	background-image: url('@/assets/FooterImage.jpg');
	padding-bottom: 5px;
	width: 100%;
}
.icon {
	margin-right: 10px;
}
</style>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
