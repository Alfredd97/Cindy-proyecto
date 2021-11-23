<template>
  <div class="q-pa-md fixed-center" style="max-width: 1000px">
    <h4>Plan de Autocontrol</h4>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >

      <q-input
        rounded outlined
        v-model="acciones_control"
        type="textarea"
        label="Acciones de control"
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
        v-model="ejecutante"
        label="Ejecutante"
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


      <q-input
        rounded outlined
        v-model="componente"
        type="textarea"
        label="Componente <<Ambiente de control>>"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'No puede estar vacio, por favor escriba algo']"
      />

      <q-input
        rounded outlined
        v-model="sistema"
        type="textarea"
        label="Sistema"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'No puede estar vacio, por favor escriba algo']"
      />

    <div>
        <q-btn label="Añadir" type="submit" color="indigo-10"/>
        <q-btn label="Cancelar" to="tab-plan-autocontrol" type="reset" color="red-10" flat class="q-ml-sm" />
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
    const acciones_control = ref(null)
    const responsable = ref(null)
    const ejecutante = ref(null)
    const observaciones = ref(null)
    const componente = ref(null)
    const sistema = ref(null)
    const fecha = ref('2019/02/01')

    

    return {
      acciones_control,
      responsable,
      ejecutante,
      observaciones,
      componente,
      sistema,
      fecha,
      onSubmit () {
          $q.notify({
            color: 'white',
            textColor: 'indigo-10',
            icon: 'cloud_done',
            message: 'Guardado'
          });
        acciones_control.value = null
        responsable.value = null
        ejecutante.value = null
        observaciones.value = null
        componente.value = null
        sistema.value = null
        fecha.value = null
      },

      onReset () {
        acciones_control.value = null
        responsable.value = null
        ejecutante.value = null
        observaciones.value = null
        componente.value = null
        sistema.value = null
        fecha.value = null
      }
    }
  }
}
</script>