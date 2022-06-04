import { defineComponent } from "vue";
import { APP_GITHUB_LINK } from "@/data/constants";

export default defineComponent({
  name: "AppFooter",

  setup() {
    return {
      APP_GITHUB_LINK,
    };
  },
});
