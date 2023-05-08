import propTypes from "prop-types";
import React from "react";
import f from "./Filter.module.css";

interface FilterProps{
  value:string; 
  onChange:React.ChangeEventHandler<HTMLInputElement>;
}

function Filter({ value, onChange }:FilterProps) {
  return (
    <label className={f.filter_title}>
      Filter by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
}
Filter.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
};
export default Filter;
