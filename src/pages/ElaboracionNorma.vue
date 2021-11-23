<template>
  <div class="q-pa-md fixed-center" style="max-width: 1000px">
    <h4>Plan de Elaboración de Norma</h4>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >

      <q-input
        rounded outlined
        v-model="nivel_norma"
        label="Nivel de la Norma"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'No puede estar vacio, por favor escriba algo']"
      />

      <q-input
        rounded outlined
        v-model="titulo_norma"
        label="Título de la Norma"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'No puede estar vacio, por favor escriba algo']"
      />

      <q-input
        rounded outlined
        v-model="responsable"
        label="Responsable de la Elaboración"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'No puede estar vacio, por favor escriba algo']"
      />

      <q-input rounded outlined v-model="fecha_anteproyecto" mask="date" hint="Elaboración del Anteproyecto" :rules="['date']">
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

      <q-input rounded outlined v-model="fecha_proyecto" mask="date" hint="Terminación del Proyecto" :rules="['date']">
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

      <q-input rounded outlined v-model="fecha_aprobacion" mask="date" hint="Aprobación" :rules="['date']">
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
        v-model="observaciones"
        type="textarea"
        label="Observaciones"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'No puede estar vacio, por favor escriba algo']"
      />

      
    <div>
        <q-btn label="Añadir" type="submit" color="indigo-10"/>
        <q-btn label="Cancelar" to="tab-elaboracion-norma" type="reset" color="red-10" flat class="q-ml-sm" />
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
    const nivel_norma = ref(null)
    const titulo_norma = ref(null)
    const responsable = ref(null)
    const fecha_anteproyecto = ref('2019/02/01')
    const fecha_proyecto = ref('2019/02/01')
    const fecha_aprobacion = ref('2019/02/01')
    const observaciones = ref(null)
    

    return {
      nivel_norma,
      titulo_norma,
      responsable,
      fecha_anteproyecto,
      fecha_aprobacion,
      fecha_proyecto,
      observaciones,
      onSubmit () {
          $q.notify({
            color: 'white',
            textColor: 'indigo-10',
            icon: 'cloud_done',
            message: 'Guardado'
          });
        nivel_norma.value = null
        titulo_norma.value = null
        responsable.value = null
        fecha_anteproyecto.value = null
        fecha_aprobacion.value = null
        fecha_proyecto.value = null
        observaciones.value = null
      },

      onReset () {
        nivel_norma.value = null
        titulo_norma.value = null
        responsable.value = null
        observaciones.value = null
      }
    }
  }
}
</script>