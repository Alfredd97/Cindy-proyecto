
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
      // path: '', component: () => import('pages/Index.vue'),
      // path: '', component: () => import('pages/Main.vue'),
      path: '/tab-plan-medidas', component: () => import('pages/TabPlanMedidas.vue')
     },
     {
      path: '/pagina-ppal', component: () => import('pages/Main.vue'),
     },
     {
      path: '/tab-comite-normalizacion', component: () => import('pages/TabComiteNormalizacion.vue'),
     },
     {
      path: '/tab-sistema-integrado-gestion', component: () => import('pages/TabSistemaIntegradoGestion.vue'),
     },
     {
      path: '/tab-materializacion-medio-a', component: () => import('pages/TabMaterializacionMedioA.vue'),
     },
     {
      path: '/tab-prevencion-riesgos', component: () => import('pages/TabPrevencionRiesgos.vue'),
     },
     {
      path: '/tab-plan-autocontrol', component: () => import('pages/TabPlanAutocontrol.vue'),
     },
     {
      path: '/tab-plan-supervision', component: () => import('pages/TabPlanSupervision.vue'),
     },
     {
      path: '/tab-comprobacion-norma', component: () => import('pages/TabComprobacionNorma.vue'),
     },
     {
      path: '/tab-cumplimiento-norma', component: () => import('pages/TabCumplimientoNorma.vue'),
     },
     {
      path: '/tab-documentos-tecnicos', component: () => import('pages/TabDocumentosTecnicos.vue'),
     },
     {
      path: '/tab-implantacion-norma', component: () => import('pages/TabImplantacionNorma.vue'),
     },
     {
      path: '/tab-elaboracion-norma', component: () => import('pages/TabElaboracionNorma.vue'),
     },
     {
      path: '/tab-pt-anual', component: () => import('pages/TabPTAnual.vue'),
     },
     {
      path: '/administrador-usuario', component: () => import('pages/AdministradorUsuario.vue'),
     },
    ]
    
  },
  {
    path: '/pagina-ppal', component: () => import('pages/Main.vue'),
   },
   {
    path: '/comite-normalizacion', component: () => import('pages/ComiteNormalizacion.vue'),
   },
   {
    path: '/pt-anual', component: () => import('pages/PTAnual.vue'),
   },
   {
    path: '/plan-medidas', component: () => import('pages/PlanMedidas.vue'),
   },
   {
    path: '/materializacion-medio-a', component: () => import('pages/MaterializacionMedioA.vue'),
   },
   {
    path: '/prevencion-riesgos', component: () => import('pages/PrevencionRiesgos.vue'),
   },
   {
    path: '/plan-autocontrol', component: () => import('pages/PlanAutocontrol.vue'),
   },
   {
    path: '/plan-supervision', component: () => import('pages/PlanSupervision.vue'),
   },
   {
    path: '/sistema-integrado-gestion', component: () => import('pages/SistemaIntegradoGestion.vue'),
   },
   {
    path: '/comprobacion-norma', component: () => import('pages/ComprobacionNorma.vue'),
   },
   {
    path: '/cumplimiento-norma', component: () => import('pages/CumplimientoNorma.vue'),
   },
   {
    path: '/documentos-tecnicos', component: () => import('pages/DocumentosTecnicos.vue'),
   },
    {
    path: '/implantacion-norma', component: () => import('pages/implantacionNorma.vue'),
   },
   {
    path: '/elaboracion-norma', component: () => import('pages/ElaboracionNorma.vue'),
   },
   {
    path: '/login', component: () => import('pages/Login.vue'),
   },
   





  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
