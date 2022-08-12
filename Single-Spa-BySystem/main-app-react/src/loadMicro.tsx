import React from "react";
import Parcel from "./parcel";

function useLoadMicro() {
  return async function (path:string) {
    const parcelConfig = await window.System.import(path);
    const parcelProps = {
      base: "/content",
      mode: "history",
    };
    return <Parcel path={path} config={parcelConfig} parcelProps={parcelProps} />;
  };
}

export default useLoadMicro;
