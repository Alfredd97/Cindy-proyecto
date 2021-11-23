<template>
  <div class="q-pa-md fixed-center" style="max-width: 1000px">
    <h4>Consejo Sistema Integrado de Gestión</h4>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >

      <q-input
        rounded outlined
        v-model="acciones"
        type="textarea"
        label="Acciones"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'No puede estar vacio, por favor escriba algo']"
      />

      <q-input rounded outlined v-model="fecha" mask="date" hint="Fecha de cumplimiento" :rules="['date']">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="date">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
      </q-input>

      <q-input
        rounded outlined
        v-model="responsable"
        label="Responsable"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'No puede estar vacio, por favor escriba algo']"
      />

      
      <q-input
        rounded outlined
        v-model="participantes"
        type="textarea"
        label="Participantes"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'No puede estar vacio, por favor escriba algo']"
      />

      
      <q-input
        rounded outlined
        v-model="observaciones"
        type="textarea"
        label="Observaciones"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'No puede estar vacio, por favor escriba algo']"
      />


    <div>
        <q-btn label="Añadir" type="submit" color="indigo-10"/>
        <q-btn label="Cancelar" to="tab-sistema-integrado-gestion" type="reset" color="red-10" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { date } from 'quasar'
import { ref } from 'vue'
export default {

  setup () {
    const $q = useQuasar()
    const acciones = ref(null)
    const responsable = ref(null)
    const participantes = ref(null)
    const obervaciones = ref(null)
    const fecha = ref('2019/02/01')

    

    return {
      acciones,
      responsable,
      participantes,
      observaciones,
      fecha,
      onSubmit () {
          $q.notify({
            color: 'white',
            textColor: 'indigo-10',
            icon: 'cloud_done',
            message: 'Guardado'
          });
        acciones.value = null
        responsable.value = null
        participantes.value = null
        observaciones.value = null
        fecha.value = null
      },

      onReset () {
        acciones.value = null
        responsable.value = null
        participantes.value = null
        observaciones.value = null

      }
    }
  }
}
</script>