import { mountRootParcel } from "single-spa";
import React, { useRef, useEffect } from "react";

interface PropsType {
  config: any;
  path: string;
  wrapWith?: string;
  wrapClass?: string;
  wrapStyle?: object;
  parcelProps: object;
}

function Parcel(props: PropsType) {
  const divRef = useRef();
  const parcel = useRef();
  const { wrapClass, wrapStyle, parcelProps, config, path } = props;

  useEffect(() => {
    if (divRef.current) {
      parcel.current = mountRootParcel(config, {
        ...parcelProps,
        domElement: divRef.current,
      });
      parcel.current.mountPromise.then(() => {
        console.log(`${path}-挂载完成`);
      });
      return () => {
        parcel.current.unmount();
        parcel.current.unmountPromise.then(() => {
          console.log(`${path}-卸载完成`);
        });
      };
    }
  }, [divRef]);

  return <div ref={divRef} className={wrapClass} style={wrapStyle}></div>;
}

export default Parcel;
