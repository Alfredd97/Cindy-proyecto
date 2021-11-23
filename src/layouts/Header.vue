<template>
  <div view="lHh Lpr lff"  class="shadow rounded-borders">
      <q-header elevated class="bg-indigo-10">
        <q-toolbar>
          <q-toolbar-title class="text-bold">GeoCuba Auditoria</q-toolbar-title>      
            <div>
              <q-page-sticky position="top-right" :offset="[18, -27]">
                <q-fab color="red-10" text-color="white" icon="keyboard_arrow_left" direction="left">
                  <q-fab-action 
                  color="red-10" 
                  text-color="white" 
                  @click="fixed = true" 
                  icon="logout" >
                  <q-tooltip
                      class="bg-grey-3 text-grey-8"
                      transition-show="scale"
                      transition-hide="scale">
                      Salir
                    </q-tooltip>
                  </q-fab-action>
                    <q-dialog v-model="fixed">
                      <q-card>
                        <q-card-section>
                          <div class="text-h6">¿Seguro que desea cerrar sesión?</div>
                        </q-card-section>
                        <q-card-actions align="right">
                          <q-btn flat label="cancelar" color="red-10" v-close-popup />
                          <q-btn flat to="/login" label="Salir" color="indigo-10" type="submit" />
                        </q-card-actions>
                      </q-card>
                    </q-dialog>
                  <q-fab-action 
                  to="/administrador-usuario" 
                  color="red-10" 
                  text-color="white"  
                  @click="onClick" 
                  icon="supervisor_account" >
                  <q-tooltip
                      class="bg-grey-3 text-grey-8"
                      transition-show="scale"
                      transition-hide="scale">
                      Administrar Usuarios
                    </q-tooltip>
                  </q-fab-action>
                  <q-fab-action
                  to="/pagina-ppal" 
                  color="red-10" 
                  text-color="white"  
                  @click="onClick" 
                  icon="home" >
                  <q-tooltip
                      class="bg-grey-3 text-grey-8"
                      transition-show="scale"
                      transition-hide="scale">
                      Página Principal
                    </q-tooltip>
                  </q-fab-action>
                </q-fab>
              </q-page-sticky>
            </div>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawerLeft"
        show-if-above
        :width="300"
        class="bg-red-10 text-white"
      >

        <q-scroll-area class="fit">
          <q-list padding class="menu-list">

            <q-item to="/tab-pt-anual/" clickable @click="drawerLeft = !drawerLeft" v-ripple>
              <q-item-section class="text-italic">PT Anual de GEOCUBA</q-item-section>
            </q-item>

            <q-item to="/tab-plan-medidas/" clickable @click="drawerLeft = !drawerLeft" v-ripple>
              <q-item-section class="text-italic">Plan de Medidas</q-item-section>
            </q-item>

            <q-item to="/tab-comite-normalizacion/" clickable @click="drawerLeft = !drawerLeft" v-ripple>
              <q-item-section class="text-italic">Comité de Normalizacion</q-item-section>
            </q-item>
            
            <q-item to="/tab-materializacion-medio-a/" clickable @click="drawerLeft = !drawerLeft" v-ripple>
              <q-item-section class="text-italic">Materialización del Medio Ambiente</q-item-section>
            </q-item>           
            
            <q-item to="/tab-prevencion-riesgos/" clickable @click="drawerLeft = !drawerLeft" v-ripple>
              <q-item-section class="text-italic">Plan de Prevención</q-item-section>
            </q-item>
            
            <q-item to="/tab-plan-autocontrol/" clickable @click="drawerLeft = !drawerLeft" v-ripple>
              <q-item-section class="text-italic">Plan de Autocontrol</q-item-section>
            </q-item>

            <q-item to="/tab-sistema-integrado-gestion/" clickable @click="drawerLeft = !drawerLeft" v-ripple>
              <q-item-section class="text-italic">Consejo de SIG</q-item-section>
            </q-item>
            
            <q-item to="/tab-plan-supervision/" clickable @click="drawerLeft = !drawerLeft" v-ripple>
              <q-item-section class="text-italic">Plan de Supervisión</q-item-section>
            </q-item>

            <q-item to="/tab-elaboracion-norma/" clickable @click="drawerLeft = !drawerLeft" v-ripple>
              <q-item-section class="text-italic">Elaboración de Norma</q-item-section>
            </q-item>

            <q-item to="/tab-implantacion-norma/" clickable @click="drawerLeft = !drawerLeft" v-ripple>
              <q-item-section class="text-italic">Implantación de Normas</q-item-section>
            </q-item>

            <q-item to="/tab-cumplimiento-norma/" clickable @click="drawerLeft = !drawerLeft" v-ripple>
              <q-item-section class="text-italic">Cumplimiento de las Normas</q-item-section>
            </q-item>

            <q-item to="/tab-documentos-tecnicos/" clickable @click="drawerLeft = !drawerLeft" v-ripple>
              <q-item-section class="text-italic">Control de Documentos Técnicos</q-item-section>
            </q-item>

            <q-item to="/tab-comprobacion-norma/" clickable @click="drawerLeft = !drawerLeft" v-ripple>
              <q-item-section class="text-italic">Comprobación de Normas</q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>
      <q-page-container>
      </q-page-container>
  </div>
</template>
<style lang="sass" scoped>
  .row > div
    width: 300px

</style>

<script>
import { ref } from 'vue'
export default {
  setup () {
    return {
      onClick () {
        // console.log('Clicked on a fab action')
      },
      fixed: ref(false),
    }
  }
}
</script>