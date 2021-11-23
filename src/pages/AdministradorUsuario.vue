<template>
      <div class="fullscreen bg-red-10 text-black">
          <q-card class="fullscreen">
            <q-card-section>
              <div class="text-h6 absolute-center">Administrar Usuarios</div>
            </q-card-section>

            <q-tabs v-model="tab" class="text-indigo-10">
              <q-tab name="crear_cuenta" icon="person_add" label="Crear Cuenta" />
              <q-tab name="lista_usuarios" icon="list" label="Lista de Usuarios" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="crear_cuenta">
              <div class="q-pa-md">
                <q-stepper
                  v-model="step"
                  vertical
                  color="indigo-10"
                  color-text="white"
                  animated
                >
                  <q-step
                    :name="1"
                    color="indigo-10"
                    color-text="white"
                    title="Nombre Y Apellidos"
                    icon="person_add"
                    :done="step > 1"
                  >
                    <q-input
                        rounded outlined
                        v-model="nombre"
                        label="Nombre"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'No puede estar vacio, por favor escriba algo']"/>
                    <q-input
                      rounded outlined
                      v-model="apellido"
                      label="Apellidos"
                      lazy-rules
                      :rules="[ val => val && val.length > 0 || 'No puede estar vacio, por favor escriba algo']"/>

                    <q-stepper-navigation>
                      <q-btn @click="step = 2" color="red-10" color-text="white" label="Siguiente" />
                    </q-stepper-navigation>
                  </q-step>

                  <q-step
                    :name="2"
                    color="indigo-10"
                    color-text="white"
                    title="Cargo"
                    icon="badge"
                    :done="step > 2"
                  >
                    <q-input
                      rounded outlined
                      v-model="cargo"
                      label="Cargo"
                      lazy-rules
                      :rules="[ val => val && val.length > 0 || 'No puede estar vacio, por favor escriba algo']"/>

                    <q-stepper-navigation>
                      <q-btn @click="step = 3" color="red-10" label="Siguiente" />
                      <q-btn flat @click="step = 1" color="white" text-color="red-10" label="Atrás" class="q-ml-sm" />
                    </q-stepper-navigation>
                  </q-step>

                  <q-step
                    :name="3"
                    color="indigo-10"
                    color-text="white"
                    title="Contraseña"
                    icon="password"
                    :done="step > 3"
                  >
                     <q-input 
                        rounded outlined 
                        v-model="contrasenha" 
                        type="password" 
                        label="Contraseña" 
                        :rules="[ val => val && val.length > 0 || 'Porfavor escriba su contraseña']"/>

                    <q-stepper-navigation>
                      <q-btn @click="step = 4" color="red-10" label="Siguiente" />
                      <q-btn flat @click="step = 2" color="white" text-color="red-10" label="Atrás" class="q-ml-sm" />
                    </q-stepper-navigation>
                  </q-step>
                  <q-step
                    :name="4"
                    color="indigo-10"
                    color-text="white"
                    title="Rol"
                    icon="admin_panel_settings"
                    :done="step > 4"
                  >
                    <q-option-group
                      v-model="separator"
                      inline
                      label="Rol "
                      class="q-mb-md"
                      :options="[
                        { label: 'Administrador', value: 'administrador'},
                        { label: 'Usuario', value: 'usuario'},
                      ]"
                    />
                  
                    <q-stepper-navigation>
                      <q-btn color="red-10" label="Finalizar" />
                      <q-btn flat @click="step = 4" text-color="red-10" label="Atrás" class="q-ml-sm" />
                    </q-stepper-navigation>
                  </q-step>
                </q-stepper>
              </div>
            </q-tab-panel>

              <q-tab-panel name="lista_usuarios" class="text-indigo-10">
              
                <q-markup-table :separator="separator" flat bordered>
                  <thead>
                    <tr>
                      <th class="text-center">No.</th>
                      <th class="text-center">Nombre</th>
                      <th class="text-center">Apellidos</th>
                      <th class="text-center">Cargo</th>
                      <th class="text-center">Rol</th>
                    </tr>
                  </thead>
                  <tbody>
                  <q-btn unelevated color="red-10" icon="menu">
                    <q-menu
                      transition-show="jump-down"
                      transition-hide="jump-up"
                    >
                      <q-list class="align-right" style="min-width: 100px">
                        <q-item clickable>
                          <q-item-section to="/crear_cuenta">Editar</q-item-section>
                        </q-item>
                        <q-item clickable>
                          <q-item-section>Eliminar</q-item-section>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </q-btn>
                  </tbody>
                </q-markup-table>
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar'
export default defineComponent({
  name: 'AdministadorUsuario',
    setup () {
    const $q = useQuasar()
    const nombre = ref(null)
    const apellido = ref(null)
    const cargo = ref(null)
    const contrasenha = ref(null)
    
    return {
      tab: ref("crear_cuenta"),
      separator: ref('visitante'),
      step: ref(1),
      nombre,
      apellido,
      cargo,
      contrasenha,
      onSubmit () {
          $q.notify({
            color: 'white',
            textColor: 'indigo-10',
            icon: 'cloud_done',
            message: 'Guardado'
          });
        nombre.value = null
        apellido.value = null
        cargo.value = null
        contrasenha.value = null
        },
      onReset () {
      nombre.value = null
      apellido.value = null
      cargo.value = null
      contrasenha.value = null
      }
    }
  }
})

</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 700px
  max-heigth: 1000px
</style>