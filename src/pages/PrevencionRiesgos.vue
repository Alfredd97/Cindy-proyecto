<template>
  <div class="q-pa-md fixed-center" style="max-width: 1000px">
    <h4>Plan de Prevencion de Riesgos</h4>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        rounded outlined
        v-model="area"
        label="Actividad o área"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'No puede estar vacio, por favor escriba algo']"
      />

      <q-input
        rounded outlined
        v-model="riesgos"
        type="textarea"
        label="Riesgos"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'No puede estar vacio, por favor escriba algo']"
      />
      
      <q-input
        rounded outlined
        v-model="manifestaciones"
        type="textarea"
        label="Posibles manifestaciones negativas"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'No puede estar vacio, por favor escriba algo']"
      />

      <q-input
        rounded outlined
        v-model="medidas"
        type="textarea"
        label="Medidas a aplicar"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'No puede estar vacio, por favor escriba algo']"
      />

      <q-input
        rounded outlined
        v-model="responsable"
        label="Responsable"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'No puede estar vacio, por favor escriba algo']"
      />

      <q-input
        rounded outlined
        v-model="ejecutante"
        label="Ejecutante"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'No puede estar vacio, por favor escriba algo']"
      />


      <q-input rounded outlined v-model="fecha" mask="date" hint="Fecha de cumplimiento de las medidas" :rules="['date']">
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

    <div>
        <q-btn label="Añadir" type="submit" color="indigo-10"/>
        <q-btn label="Cancelar" to="tab-prevencion-riesgos" type="reset" color="red-10" flat class="q-ml-sm" />
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
    const area = ref(null)
    const riesgos = ref(null)
    const manifestaciones = ref(null)
    const medidas = ref(null)
    const responsable = ref(null)
    const ejecutante = ref(null)
    const fecha = ref('2019/02/01')

    
    return {
      area,
      riesgos,
      manifestaciones,
      medidas,
      responsable,
      ejecutante,
      fecha,
      onSubmit () {
          $q.notify({
            color: 'white',
            textColor: 'indigo-10',
            icon: 'cloud_done',
            message: 'Guardado'
          });
        area.value = null
        riesgos.value = null
        manifestaciones.value = null
        medidas.value = null
        responsable.value = null
        ejecutante.value = null
        fecha.value = null
      },

      onReset () {
        area.value = null
        riesgos.value = null
        manifestaciones.value = null
        medidas.value = null
        responsable.value = null
        ejecutante.value = null
      }
    }
  }
}
</script>
