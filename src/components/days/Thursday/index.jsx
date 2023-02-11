import React from "react";
import s from "./style.module.css";
import { CloseOutlined } from "@ant-design/icons";

export default function Thursday({ findDay, deleteDay }) {
  return (
    <div className={s.block}>
      <button onClick={() => deleteDay("Thursday")}>
        <CloseOutlined />
      </button>
      <div className={s.first}>
        <p>THU</p>
      </div>
      <div className={s.second}>{findDay("Thursday")}</div>
    </div>
  );
}
