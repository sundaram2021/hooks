"use client";

import React, { createContext, useContext, useState } from "react";

interface ContextProps {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Ctx = createContext<ContextProps>({ state: true, setState: () => {} });

export default function Home() {
  const [state, setState] = useState<boolean>(true);

  return (
    <Ctx.Provider value={{ state, setState }}>
      <Component />
    </Ctx.Provider>
  );
}

const Component = () => {
  const { state, setState } = useContext(Ctx);

  return (
    <div>
      {state ? <h1>hello</h1> : ""}
      <button onClick={() => setState(!state)}>Pop</button>
    </div>
  );
};
