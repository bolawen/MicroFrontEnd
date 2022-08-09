import { defineComponent, h, onMounted, onUnmounted, ref, watch } from "vue";

export default defineComponent({
  name: "parcel",
  props: {
    config: [Object, Promise],
    wrapWith: String,
    wrapClass: String,
    wrapStyle: Object,
    mountParcel: {
      type: Function,
      required: true,
    },
    parcelProps: Object,
  },
  setup(props) {
    console.log("哈哈哈",props)
    const el = ref<HTMLElement | null>(null);
    const parcel = ref<any>(null);
    onMounted(() => {
      parcel.value = props.mountParcel(props.config, {
        ...props.parcelProps,
        domElement: el.value,
      });
      parcel.value.mountPromise.then(() => {
        console.log("parcel mounted");
      });
    });
    onUnmounted(() => {
      if (parcel.value) {
        parcel.value.unmount();
        parcel.value.unmountPromise.then(() => {
          console.log("parcel unmounted");
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
        class: props.wrapClass,
        style: props.wrapStyle,
        ref: el,
      });
  },
});
