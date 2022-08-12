import { mountRootParcel } from "single-spa";
import { defineComponent, h, onMounted, onUnmounted, ref, watch } from "vue";

export default defineComponent({
  name: "Parcel",
  props: {
    config: [Object, Promise],
    path: String,
    wrapWith: String,
    wrapClass: String,
    wrapStyle: Object,
    parcelProps: Object,
  },
  setup(props) {
    const { config, parcelProps, wrapClass, wrapStyle, wrapWith, path } = props;
    const el = ref<HTMLElement | null>(null);
    const parcel = ref<any>(null);
    onMounted(() => {
      parcel.value = mountRootParcel(config, {
        ...parcelProps,
        domElement: el.value,
      });
      parcel.value.mountPromise.then(() => {
        console.log(`${path}-挂载完成`);
      });
    });

    onUnmounted(() => {
      if (parcel.value) {
        parcel.value.unmount();
        parcel.value.unmountPromise.then(() => {
          console.log(`${path}-卸载完成`);
        });
      }
    });

    watch(
      () => props.parcelProps,
      (value) => {
        if (typeof parcel.value.update === "function") {
          parcel.value
            .update({
              ...value,
              domElement: el.value,
            })
            .then(() => {
              console.log("parcel updated");
            });
        }
      }
    );

    return () =>
      h("div", {
        ref: el,
        class: wrapClass,
        style: wrapStyle,
      });
  },
});
