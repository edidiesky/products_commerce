import React, { useEffect, useState, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import {
  Home,
  LayoutIndex,
  SingleIndex,
  ShopIndex
} from "./screens";

export default function App() {
  const [height, setHeight] = useState(0);

  return (
    <div className="based" style={{ height }}>
      <Routes>
        <Route path={"/"} element={<LayoutIndex />}>
          <Route index element={<Home />} />
          <Route path=":product" element={<SingleIndex />} />
          <Route path="shop" element={<ShopIndex />} />
        </Route>
      </Routes>
    </div>
  );
}
