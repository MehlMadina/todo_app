import React from "react";
import s from "./style.module.css";
import { CloseOutlined } from "@ant-design/icons";

export default function Saturday({ findDay, deleteDay }) {
  return (
    <div className={s.block}>
      <button onClick={() => deleteDay("Saturday")}>
        <CloseOutlined />
      </button>
      <div className={s.first}>
        <p>SAT</p>
      </div>
      <div className={s.second}>{findDay("Saturday")}</div>
    </div>
  );
}
