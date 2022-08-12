import React, { useState } from "react";
import useLoadMicro from "./loadMicro";

function Content() {
  const [microApp, setMicroApp] = useState();
  const loadMicro = useLoadMicro();

  const handleClick = async (path: string) => {
    const result = await loadMicro(path);
    setMicroApp(null);
    setMicroApp(result);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleClick("micro-app-vue3")}>
          micro-app-vue3 微应用
        </button>
        <button onClick={() => handleClick("micro-app-react")}>
          micro-app-react 微应用
        </button>
      </div>
      {microApp}
    </div>
  );
}

export default Content;
