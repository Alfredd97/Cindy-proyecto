<template>
  <div class="q-pa-md fixed-center" style="max-width: 1000px">
    <h4>Control de Cumplimiento de las Normas Implantadas</h4>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >

      <q-input
        rounded outlined
        v-model="codigo_dn"
        label="Código DN"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'No puede estar vacio, por favor escriba algo']"
      />

      <q-input
        rounded outlined
        v-model="titulo_documento"
        label="Título del Documento Normativo"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'No puede estar vacio, por favor escriba algo']"
      />

      
      <q-input rounded outlined v-model="fecha" mask="date" hint="Fecha" :rules="['date']">
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
        v-model="area"
        label="Área en la cual será controlada"
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
        <q-btn label="Cancelar" to="tab-cumplimiento-norma" type="reset" color="red-10" flat class="q-ml-sm" />
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
    const codigo_dn = ref(null)
    const titulo_documento = ref(null)
    const area = ref(null)
    const observaciones = ref(null)
    const fecha = ref('2019/02/01')

    

    return {
      codigo_dn,
      titulo_documento,
      area,
      observaciones,
      fecha,
      onSubmit () {
          $q.notify({
            color: 'white',
            textColor: 'indigo-10',
            icon: 'cloud_done',
            message: 'Guardado'
          });
        codigo_dn.value = null
        titulo_documento.value = null
        area.value = null
        observaciones.value = null
        fecha.value = null
      },

      onReset () {
        codigo_dn.value = null
        titulo_documento.value = null
        area.value = null
        observaciones.value = null
        fecha.value = null
      }
    }
  }
}
</script>