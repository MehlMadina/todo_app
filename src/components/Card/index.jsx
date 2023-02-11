import React from "react";
import s from "./style.module.css";
import { CloseOutlined } from "@ant-design/icons";

export default function Card({
  id,
  description,
  importance,
  deleteTask,
  checkImportance,
}) {
  return (
    <div className={s.task} style={checkImportance(importance)}>
      <button onClick={() => deleteTask(id)}>
        <CloseOutlined />
      </button>
      <p style={checkImportance(importance)}>{description}</p>
    </div>
  );
}
