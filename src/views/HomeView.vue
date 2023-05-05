<template>
  <v-container fill-height fluid class="background">
    <v-row>
      <v-col>
        <v-row class="d-flex align-center justify-center">
          <h1 class="slogan-text">Get your Buddy!</h1>
        </v-row>
        <v-row class="d-flex align-center justify-center">
          <h2 class="intro-text">Welcome to Happy Tails Animal Shelter!</h2>
        </v-row>
        <v-row class="d-flex align-center justify-center">
          <p class="text-body">
            At Happy Tails, we're like Cupid for animals - we rescue them from unfortunate circumstances and help them find their purr-fect match.
          </p>
        </v-row>
      </v-col>
    </v-row> 
    <v-row class="d-flex justify-center align-center">
      <v-item-group class="btn-group">
        <v-item>
          <v-btn large class="animal-btn" height="200px" color="#D1CB3A">
            <img src="@/assets/DogIcon.png" height="100px" width="100px"/>
            <h1 class="buttonTitle">Dogs</h1>
          </v-btn>
        </v-item>
        <v-item>
          <v-btn large class="animal-btn" height="200px" color="#D13A40">
            <img src="@/assets/CatIcon.png" height="100px" width="100px"/>
            <p class="buttonTitle">Cats</p>
          </v-btn>
        </v-item>
        <v-item>
          <v-btn large class="animal-btn" height="200px" color="#8CD13A">
            <img src="@/assets/PawIcon.png" height="100px" width="100px"/>
            <p class="buttonTitle">Other animals</p>
          </v-btn>
        </v-item>
     </v-item-group>
    </v-row>
    <v-row class="d-flex align-center justify-center">
      <h1 class="adopt-title" style="color: #D13A40">Pets waiting for adoption</h1>
    </v-row>
    <v-row justify="center">
      <v-card class="card-spacing">
        <v-img src="@/assets/Junior.jpg" height="200px" width="200px" cover></v-img>
        <v-card-title class="d-flex align-center justify-center">Junior</v-card-title>
      </v-card>
      <v-card class="card-spacing">
        <v-img src="@/assets/BonnieAndClyde.jpg" height="200px" width="200px" cover></v-img>
        <v-card-title class="d-flex align-center justify-center">Bonnie&Clyde</v-card-title>
      </v-card>
      <v-card class="card-spacing">
        <v-img src="@/assets/Švrčo.jpg" height="200px" width="200px" cover></v-img>
        <v-card-title class="d-flex align-center justify-center">Švrćo</v-card-title>
      </v-card>
      <v-card class="card-spacing">
        <v-img src="@/assets/King.jpg" height="200px" width="200px" cover></v-img>
        <v-card-title class="d-flex align-center justify-center">King</v-card-title>
      </v-card>
    </v-row>
    <v-row class="d-flex align-center justify-center">
      <h1 class="adopt-title" style="color: #D13A40">Adopted pets</h1>
    </v-row>
    <v-row justify="center">
      <v-card class="card-spacing">
        <v-img src="@/assets/Coco.jpg" height="200px" width="200px" cover></v-img>
        <v-card-title class="d-flex align-center justify-center">Coco</v-card-title>
      </v-card>
      <v-card class="card-spacing">
        <v-img src="@/assets/Gizmo.jpg" height="200px" width="200px" cover></v-img>
        <v-card-title class="d-flex align-center justify-center">Gizmo</v-card-title>
      </v-card>
      <v-card class="card-spacing">
        <v-img src="@/assets/Charlie.jpg" height="200px" width="200px" cover></v-img>
        <v-card-title class="d-flex align-center justify-center">Charlie</v-card-title>
      </v-card>
      <v-card class="card-spacing">
        <v-img src="@/assets/Oggy.jpg" height="200px" width="200px" cover></v-img>
        <v-card-title class="d-flex align-center justify-center">Oggy</v-card-title>
      </v-card>
    </v-row>
  </v-container>
</template>


<style scoped>
.slogan-text {
  font-family: Arial, sans-serif;
  font-size: 46px;
  font-weight: bolder;
  text-align: center;
  margin-top: 50px;
}
.intro-text {
  font-family: Arial, sans-serif;
  font-size: 24px;
  font-style: italic;
  text-align: center;
  color: #D13A40;
}
.text-body {
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
}
.animal-btn {
  font-weight: bold;
  border-radius: 10px;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 30px;
}
.card-spacing {
  margin-left: 20px;
}
.buttonTitle {
  font-size: 24px;
  font-family: Arial, sans-serif;
}
.adopt-title {
  padding-top: 50px;
}
</style>

<script>
  export default {
    name: 'Home',
    components: {},
    methods: {}
  }
</script>