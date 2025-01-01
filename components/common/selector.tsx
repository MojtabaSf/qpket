"use client";

import styled from "styled-components";

type ClientSelectorType = {
  item: any;
  object: any;
  setObject: (x: any) => void;
  margin?: string;
  placeholder?: any;
  opacity?: number;
  items?: any;
  ref?: any;
};

export default function ClientSelector({
  item,
  object,
  setObject,
  margin,
  placeholder,
  opacity,
  items,
  ref,
}: ClientSelectorType) {
  return (
    <Select
      ref={ref}
      onChange={(e) => {
        if (item?.key == "main") {
          setObject({ ...items, main: e.target.value });
        } else if (item?.key == "second") {
          setObject({
            ...object,
            second: e.target.value,
            third: "",
            att_list: {
              type: "",
              type1: "",
              type2: "",
            },
          });
        } else if (item?.key == "third") {
          setObject({
            ...object,
            third: e.target.value,
            att_list: {
              type: "",
              type1: "",
              type2: "",
            },
          });
        } else {
          setObject({
            ...object,
            att_list: {
              ...object.att_list,
              [`${item?.type}`]: e.target.value,
            },
          });
        }
      }}
      value={
        item?.key
          ? object?.[`${item?.key}`]
          : object?.att_list?.[`${item?.type}`]
      }
      margin={margin}
      opacity={opacity}
    >
      <option value="" hidden>
        {placeholder}
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
