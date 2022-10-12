
import { createStore } from 'vuex';

import { navigation } from '@/Shared/_store/navigation.module.js';
import { alerts } from '@/Shared/_store/alerts.module.js';
import { users } from '@/Shared/_store/users.module.js';
import { web } from '@/Web/_store/web.module.js';
import { fpacnow } from '@/FPACNow/_store/fpacnow.module.js';
import { today } from '@/Demos/_store/today.module.js';

export const store = createStore({
  modules: {
    navigation: navigation,
    alerts: alerts,
    users: users,
    web: web,
    fpacnow: fpacnow,
    today: today
  }
});