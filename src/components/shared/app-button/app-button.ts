import { defineComponent } from 'vue';
import { AppButtonTypes } from './app-button.models';

export default defineComponent({
  name: 'AppButton',

  props: {
    buttonType: {
      type: String,
      default: AppButtonTypes.PRIMARY,
      validator: (btnType: AppButtonTypes) => {
        return (<any>Object).values(AppButtonTypes).includes(btnType);
      },
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },

  setup () {
    return { AppButtonTypes };
  },
});
