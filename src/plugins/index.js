/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import {
  VDataTable,
  VDataTableServer,
  VDataTableVirtual,
} from 'vuetify/labs/VDataTable'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import vuetify from './vuetify'
import router from '../router'
import VueTheMask from 'vue-the-mask'


import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

export function registerPlugins(app) {
  app
    .use(vuetify)
    .use(router)
    .use(VueTheMask)
    .use(VueSweetalert2)


  app.component('VueDatePicker', VueDatePicker)

  app.component('VDataTable', VDataTable)
  app.component('VDataTableServer', VDataTableServer)
  app.component('VDataTableVirtual', VDataTableVirtual)


}
