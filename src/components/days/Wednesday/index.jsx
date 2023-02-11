import React from "react";
import s from "./style.module.css";
import { CloseOutlined } from "@ant-design/icons";

export default function Wednesday({ findDay, deleteDay }) {
  return (
    <div className={s.block}>
      <button onClick={() => deleteDay("Wednesday")}>
        <CloseOutlined />
      </button>
      <div className={s.first}>
        <p>WED</p>
      </div>
      <div className={s.second}>{findDay("Wednesday")}</div>
    </div>
  );
}
