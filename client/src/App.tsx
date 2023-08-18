import React, { useEffect, useState, lazy, Suspense } from "react";
import "./index.css";
import {
  Home
} from "./screens";

export default function App() {
  const [height, setHeight] = useState(0);

  return (
    <div className="based" style={{ height }}>
      <Home/>
      {/* <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes> */}
    </div>
  );
}
