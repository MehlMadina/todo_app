import React from "react";
import s from "./style.module.css";
import { CloseOutlined } from "@ant-design/icons";

export default function Sunday({ findDay, deleteDay }) {
  return (
    <div className={s.block}>
      <button onClick={() => deleteDay("Sunday")}>
        <CloseOutlined />
      </button>
      <div className={s.first}>
        <p>SUN</p>
      </div>
      <div className={s.second}>{findDay("Sunday")}</div>
    </div>
  );
}
