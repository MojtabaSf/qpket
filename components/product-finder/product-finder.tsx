"use client";

import Image from "next/image";
import style from "./product-finder.module.css";
import ClientSelector from "../common/selector";
import { useEffect, useState, useRef } from "react";
import ClientButton from "../common/button";
import Modal from "../common/modal";
import {
  attributes,
  images,
  itemsList,
  selectorsList,
} from "@/objects/objects";

type ProductFinderType = {
  main: string;
  second: string;
  third: string;
  att_list?: any;
};

export default function ProductFinder() {
  const items: ProductFinderType = {
    main: "",
    second: "",
    third: "",
    att_list: {},
  };

  const [object, setObject] = useState(items);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [openModal, setOpenModal] = useState<string>("false");
  const [error, setError] = useState<boolean>(false);
  const [filteredList, setFilteredList] = useState<any[]>([]);
  const ref = useRef<any>(null);

  const AutoScroll = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  function ClearData() {
    setObject(items);
  }

  useEffect(() => {
    let obj: any = {};
    const att = attributes?.filter((x: any) => x.title == object.third)?.[0];
    att?.list.forEach((val) => {
      obj[`${val?.type}`] = "";
    });
    if (object.third != "") {
      AutoScroll();
    }
  }, [object.third]);

  function FindProducts() {
    if (object?.main != "" && object?.second != "" && object?.third != "") {
      setError(false);
      setFilteredList(
        itemsList?.filter(
          (val: any) =>
            val?.province == object.second &&
            val?.situation == object.third &&
            val?.type == object.main
        )
      );
      setOpenModal("true");
    } else {
      setError(true);
    }
  }

  useEffect(() => {
    setSelectedImage(
      images?.filter(
        (val: any) =>
          val?.province == object.second &&
          val?.situation == object.third &&
          val?.type == object.main
      )?.[0]?.src
    );
  }, [object]);

  return (
    <section className={style.container}>
      <div className={style.imageContainer}>
        <Image
          src={selectedImage ? selectedImage : "/images/empty.png"}
          width={350}
          height={350}
          alt=""
        />
        {object?.third != "" && (
          <div className={style.attributesContainer}>
            {object?.att_list?.type && <li>{object?.att_list?.type}</li>}
            {object?.att_list?.type1 && <li>{object?.att_list?.type1}</li>}
            {object?.att_list?.type1 && <li>{object?.att_list?.type2}</li>}
          </div>
        )}
      </div>
      <div className={style.selectorsContainer}>
        <h1>Qpket Product Finder</h1>
        <div className={style.breadCrumbs}>
          <span>{object.main != "" ? object.main : "Main Category"}</span>
          &thinsp; - &thinsp;
          <span>{object.second ? object.second : "Second Category"}</span>
          &thinsp; - &thinsp;
          <span>{object.third ? object.third : "Third Category"}</span>
        </div>
        <div className={`${style.scroll} hideScroll`}>
          <ClientSelector
            item={selectorsList?.[0]}
            object={object}
            setObject={setObject}
            margin="16px 0 0 0"
            placeholder="Main Category"
            opacity={0.6}
            items={items}
          />
          <ClientSelector
            item={
              selectorsList?.filter((x: any) => x.title == object.main)?.[0]
            }
            object={object}
            setObject={setObject}
            margin="16px 0 0 0"
            placeholder="Second Category"
            opacity={1}
            items={items}
          />
          <ClientSelector
            item={
              selectorsList?.filter((x: any) => x.title == object.second)?.[0]
            }
            object={object}
            setObject={setObject}
            margin="16px 0 0 0"
            placeholder="Third Category"
            opacity={1}
            items={items}
          />
          {object?.third != "" &&
            attributes
              ?.filter((x: any) => x.title == object.third)?.[0]
              ?.list?.map((val: any, index: number) => (
                <ClientSelector
                  ref={ref}
                  item={val}
                  object={object}
                  setObject={setObject}
                  margin="16px 0 0 0"
                  placeholder={
                    index == 0
                      ? "First Attribute"
                      : index == 1
                      ? "Second Attribute"
                      : "Third Attribute"
                  }
                  opacity={0.6}
                  key={index}
                />
              ))}
        </div>
        <div className={style.buttonContainer}>
          <ClientButton
            width="35%"
            color="white"
            backgroundColor="gray"
            padding="10px 0"
            margin="0 10px 0 0"
            borderRadius={4}
            onClick={FindProducts}
          >
            Find Product
          </ClientButton>
          <ClientButton
            width="25%"
            color="white"
            backgroundColor="#ff624a"
            padding="10px 0"
            borderRadius={4}
            onClick={ClearData}
          >
            Clear
          </ClientButton>
          <p className={error ? style.error : style.hideError}>
            Select All Options.
          </p>
        </div>
      </div>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        list={filteredList}
      />
    </section>
  );
}
