<template>
  <div class="fullscreen bg-indigo-10 text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div class="text-h2" style="opacity:.4">
        Oops. nada aquí...
      </div>

      <q-btn
        class="q-mt-xl"
        text-color="white"
        unelevated
        to="/pagina-ppal"
        label="volver"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Error404'
})
</script>
