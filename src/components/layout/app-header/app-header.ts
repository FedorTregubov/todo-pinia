import { defineComponent } from 'vue';
import { APP_TITLE } from '@/data/constants';

export default defineComponent({
  name: 'AppHeader',

  setup () {
    return {
      APP_TITLE,
    };
  },
});
