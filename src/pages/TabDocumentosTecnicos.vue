
<template>
  <div class="q-pa-md">
      <q-page-sticky  position="bottom-right" :offset="[18, 18]">
        <q-btn fab icon="add" to="/documentos-tecnicos" color="white" text-color="red-10"/>
      </q-page-sticky>
      <q-page-sticky position="bottom-right" :offset="[18, 90]">
        <q-fab icon="download" color="white" text-color="indigo-10" direction="up">
          <q-fab-action 
          :loading="progress[0].loading"
          :percentage="progress[0].loading"
          dark-percentage
          @click="startComputing(0)"
          external-label 
          label-position="left" 
          label="Excel" 
          label-class="bg-grey-3 text-grey-8" 
          color="teal-7" 
          icon="cloud_download"/>
          <q-fab-action 
          :loading="progress[1].loading"
          :percentage="progress[1].loading"
          dark-percentage
          @click="startComputing(1)"
          external-label 
          label-position="left" 
          label="PDF" 
          label-class="bg-grey-3 text-grey-8" 
          color="red-10" 
          icon="cloud_download"/>
          <q-fab-action 
          :loading="progress[2].loading"
          :percentage="progress[2].loading"
          dark-percentage
          @click="startComputing(2)"
          external-label 
          label-position="left" 
          label="Word" 
          label-class="bg-grey-3 text-grey-8" 
          color="blue-10" 
          icon="cloud_download"/>
        </q-fab>
      </q-page-sticky>
    </div>
  <div class="q-pa-md">
  <q-page-sticky  position="right-top" :offset="[300, 10]">   
    <q-markup-table :separator="separator" flat bordered>
      <thead>
        <tr>
          <th class="text-center">Documentos Técnicos</th>
          <th class="text-center">Fecha</th>
          <th class="text-center">Responsable</th>
          <th class="text-center">Ejecuta</th>
          <th class="text-center">Lugar</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </q-markup-table>
    </q-page-sticky>
  </div>
</template>

<script>
import { ref, onBeforeUnmount } from 'vue'
export default {
  setup () {
    const progress = ref([
      { loading: false, percentage: 0 },
      { loading: false, percentage: 0 },
      { loading: false, percentage: 0 }
    ])
    const intervals = [ null, null, null ]
    function startComputing (id) {
      progress.value[ id ].loading = true
      progress.value[ id ].percentage = 0
      intervals[ id ] = setInterval(() => {
        progress.value[ id ].percentage += Math.floor(Math.random() * 8 + 10)
        if (progress.value[ id ].percentage >= 100) {
          clearInterval(intervals[ id ])
          progress.value[ id ].loading = false
        }
      }, 700)
    }
    onBeforeUnmount(() => {
      intervals.forEach(val => {
        clearInterval(val)
      })
    })
    return {
      separator: ref('cell'),
      progress,
      startComputing,
    }
  }
}
</script>


