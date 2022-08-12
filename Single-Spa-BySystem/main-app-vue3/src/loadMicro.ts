import { h, ref } from "vue";
import Parcel from "./parcel";

export default function (path: string) {
  return async function () {
    const parcelConfig = await window.System.import(path);
    return {
      setup() {
        let parcelProps = ref({
          base: '/content',
          mode: "history",
        });
        return () =>
          h(Parcel, {
            path,
            config: parcelConfig,
            parcelProps: parcelProps.value,
          });
      },
    };
  };
}
