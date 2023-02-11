import React from "react";
import s from "./style.module.css";
import { CloseOutlined } from "@ant-design/icons";

export default function Monday({ findDay, deleteDay }) {
  return (
    <div className={s.block}>
      <button onClick={() => deleteDay("Monday")}>
        <CloseOutlined />
      </button>
      <div className={s.first}>
        <p>MON</p>
      </div>
      <div className={s.second}>{findDay("Monday")}</div>
    </div>
  );
}
