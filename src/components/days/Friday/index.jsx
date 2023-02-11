import React from "react";
import s from "./style.module.css";
import { CloseOutlined } from "@ant-design/icons";

export default function Friday({ findDay, deleteDay }) {
  return (
    <div className={s.block}>
      <button onClick={() => deleteDay("Friday")}>
        <CloseOutlined />
      </button>
      <div className={s.first}>
        <p>FRI</p>
      </div>
      <div className={s.second}>{findDay("Friday")}</div>
    </div>
  );
}
