
<template>
  <div class="q-pa-md">
      <q-page-sticky  position="bottom-right" :offset="[18, 18]">
        <q-btn fab icon="add" to="/pt-anual" color="white" text-color="red-10"/>
      </q-page-sticky>
      <q-page-sticky position="bottom-right" :offset="[18, 90]">
        <q-fab icon="download" color="white" text-color="indigo-10" direction="up">
          <q-fab-action 
          :loading="progress[0].loading"
          :percentage="progress[0].loading"
          dark-percentage
          @click="startComputing(0)"
          color="teal-7" 
          icon="cloud_download">
            <q-tooltip
              class="bg-grey-3 text-grey-8"
              anchor="center left" self="center right" :offet="[10, 10]"
              transition-show="scale"
              transition-hide="scale">
              Excel
            </q-tooltip>
          </q-fab-action>
          <q-fab-action 
          :loading="progress[1].loading"
          :percentage="progress[1].loading"
          dark-percentage
          @click="startComputing(1)"
          color="red-10" 
          icon="cloud_download">
          <q-tooltip
              class="bg-grey-3 text-grey-8"
              anchor="center left" self="center right" :offet="[10, 10]"
              transition-show="scale"
              transition-hide="scale">
              PDF
            </q-tooltip>
          </q-fab-action>
          <q-fab-action 
          :loading="progress[2].loading"
          :percentage="progress[2].loading"
          dark-percentage
          @click="startComputing(2)" 
          color="blue-10" 
          icon="cloud_download">
          <q-tooltip
              class="bg-grey-3 text-grey-8"
              anchor="center left" self="center right" :offet="[10, 10]"
              transition-show="scale"
              transition-hide="scale">
              Word
            </q-tooltip>
          </q-fab-action>
        </q-fab>
      </q-page-sticky>
    </div>
  
  <q-page-sticky  position="right-top" :offset="[430, 10]">   
    <div class="q-pa-md">
      <q-markup-table :separator="separator" flat bordered>
        <thead>
          <tr>
            <th class="text-center">Código</th>
            <th class="text-center">Actividad</th>
            <th class="text-center">E</th>
            <th class="text-center">F</th>
            <th class="text-center">M</th>
            <th class="text-center">A</th>
            <th class="text-center">M</th>
            <th class="text-center">J</th>
            <th class="text-center">J</th>
            <th class="text-center">A</th>
            <th class="text-center">S</th>
            <th class="text-center">O</th>
            <th class="text-center">N</th>
            <th class="text-center">D</th>
            <th class="text-center">Hora</th>
            <th class="text-center">Lugar</th>
            <th class="text-center">Preside</th>
            <th class="text-center">Organiza y Participa</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </q-markup-table>
    </div>
  </q-page-sticky>
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
