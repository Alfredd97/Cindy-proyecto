<template>
  <div class="q-pa-md fixed-center" style="max-width: 1000px">
    <h4>Materialización del Medio Ambiente</h4>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >

      
      <q-input
        rounded outlined
        v-model="estrategia"
        type="textarea"
        label="Acciones de la estrategia"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'No puede estar vacio, por favor escriba algo']"
      />

      
      <q-input
        rounded outlined
        v-model="materializacion"
        type="textarea"
        label="Acciones para la materialización"
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
        v-model="participantes"
        type="textarea"
        label="Participantes"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'No puede estar vacio, por favor escriba algo']"
      />

      
      <q-input
        rounded outlined
        v-model="controla"
        label="Controla"
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
        v-model="controles"
        label="Controles"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'No puede estar vacio, por favor escriba algo']"
      />

      <q-input
        rounded outlined
        v-model="metas"
        type="textarea"
        label="Metas"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'No puede estar vacio, por favor escriba algo']"
      />

      
      <q-input
        rounded outlined
        v-model="ind_desempenho"
        type="textarea"
        label="Indicadores de desempeño"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'No puede estar vacio, por favor escriba algo']"
      />


      <div>
        <q-btn label="Añadir" type="submit" color="indigo-10"/>
        <q-btn label="Cancelar" to="/tab-materializacion-medio-a" type="reset" color="red-10" flat class="q-ml-sm" />
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
    const estrategia = ref(null)
    const materializacion = ref(null)
    const responsable = ref(null)
    const participantes = ref(null)
    const controla = ref(null)
    const controles = ref(null)
    const metas = ref(null)
    const ind_desempenho = ref(null)
    const fecha = ref('2019/02/01')

    

    return {
      estrategia,
      materializacion,
      responsable,
      participantes,
      controla,
      controles,
      metas,
      ind_desempenho,
      fecha,
      onSubmit () {
          $q.notify({
            color: 'white',
            textColor: 'indigo-10',
            icon: 'cloud_done',
            message: 'Guardado'
          });
        estrategia.value = null
        materializacion.value = null
        responsable.value = null
        participantes.value = null
        controla.value = null
        controles.value = null
        metas.value = null
        ind_desempenho.value = null
        fecha.value = null
      },

      onReset () {
        estrategia.value = null
        materializacion.value = null
        responsable.value = null
        participantes.value = null
        controla.value = null
        controles.value = null
        metas.value = null
        ind_desempenho.value = null
      }
    }
  }
}
</script>