<template>
  <div class="q-pa-md fixed-center" style="max-width: 1000px">
  <h4>Plan Temático Anual</h4>
      <q-form style="width: 700px"
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >
        <q-input
          rounded outlined
          v-model="codigo"
          label="Código"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'No puede estar vacio, por favor escriba algo']"
        />
        <q-input
          rounded outlined
          v-model="actividad"
          label="Actividad"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'No puede estar vacio, por favor escriba algo']"
        />
        <q-input rounded outlined v-model="fecha_hora" mask="date" hint="esto lleva datetime" :rules="['date']">
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
          v-model="lugar"
          label="Lugar"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'No puede estar vacio, por favor escriba algo']"
        />
        <q-input
          rounded outlined
          v-model="preside"
          label="Preside"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'No puede estar vacio, por favor escriba algo']"
        />
        <q-input
          rounded outlined
          v-model="org_part"
          label="Organiza y Participa"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'No puede estar vacio, por favor escriba algo']"
        />
      <div>
          <q-btn label="Añadir" type="submit" color="indigo-10"/>
          <q-btn label="Cancelar" to="tab-pt-anual" type="reset" color="red-10" flat class="q-ml-sm" />
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
    const codigo = ref(null)
    const actividad = ref(null)
    const preside = ref(null)
    const org_part = ref(null)
    const fecha_hora = ref('2019/02/01')

    

    return {
      codigo,
      actividad,
      preside,
      org_part,
      fecha_hora,
      onSubmit () {
          $q.notify({
            color: 'white',
            textColor: 'indigo-10',
            icon: 'cloud_done',
            message: 'Guardado'
          });
        codigo.value = null
        actividad.value = null
        preside.value = null
        org_part.value = null
        fecha_hora.value = null

      },

      onReset () {
        codigo.value = null
        actividad.value = null
        preside.value = null
        org_part.value = null
      }
    }
  }
}
</script>