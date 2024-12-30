"use client";

import { useEffect } from "react";
import styled from "styled-components";

type ClientSelectorType = {
  item: any;
  object: any;
  setObject: (x: any) => void;
  margin?: string;
  placeholder?: any;
  opacity?: number;
};

export default function ClientSelector({
  item,
  object,
  setObject,
  margin,
  placeholder,
  opacity,
}: ClientSelectorType) {
  return (
    <Select
      onChange={(e) => {
        setObject({ ...object, [`${item?.key}`]: e.target.value });
      }}
      value={object?.[`${item?.key}`]}
      margin={margin}
      opacity={opacity}
    >
      <option value="" hidden>
        {placeholder?.[`${item?.key}`]}
      </option>
      {item?.list?.map((val: any, index: number) => (
        <option key={index} value={val}>
          {val}
        </option>
      ))}
    </Select>
  );
}

type SelectType = {
  margin?: string;
  opacity?: number;
};

const Select = styled.select<SelectType>`
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  box-shadow: inset 0 0 0 transparent;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  background-image: url("/icons/chevron-down.svg");
  background-repeat: no-repeat;
  background-position: 97.5%;
  margin: ${({ margin }) => margin};
  outline: none;
  appearance: none;
  cursor: pointer;
  opacity: ${({ opacity }) => opacity};
`;
