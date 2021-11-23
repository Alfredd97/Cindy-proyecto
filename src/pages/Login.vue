<template>
<div class="fullscreen bg-white text-white text-center q-pa-md flex flex-center">
  <q-page class=" window-height window-width row justify-center items-center">
    <div class="column">
    
      <div class="row">
        <q-img src='../assets/GC.png' rounded bordered spinner-color="white" style="height: 150px; max-width: 370px"/>
        <h5 class="text-h5 text-grey-8 q-my-md">Grupo Empresarial GeoCuba</h5>
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1">
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input rounded standout="bg-indigo-10 text-white" v-model="usuario" type="email" label="Usuario" :rules="[ val => val && val.length > 0 || 'Necesita tener un nombre de usuario']"/>
              <q-input rounded standout="bg-indigo-10 text-white" v-model="contrasenha" type="password" label="Contraseña" :rules="[ val => val && val.length > 0 || 'Porfavor escriba su contraseña']"/>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn 
            to="/pagina-ppal" 
            rounded bordered 
            unelevated color="red-10" 
            size="lg" 
            class="full-width" 
            label="Entrar"/>
            
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <p class="text-grey-6 text-italic">Necesita estar registrado para acceder al sistema</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      usuario: '',
      contrasenha: ''
    }
  }
}
</script>

<style>
.q-card {
  width: 360px;
}
</style>