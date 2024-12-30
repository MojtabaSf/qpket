"use client";

import Image from "next/image";
import style from "./product-finder.module.css";
import ClientSelector from "../common/selector";
import { useEffect, useState } from "react";
import { images, itemsList, selectorsList } from "@/objects/objects";
import ClientButton from "../common/button";
import Modal from "../common/modal";

type ProductFinderType = {
  main: string;
  second: string;
  third: string;
  first: string;
};

export default function ProductFinder() {
  const items: ProductFinderType = {
    main: "Main Category",
    second: "Second Category",
    third: "Third Category",
    first: "First Attribute",
  };

  const [object, setObject] = useState(items);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [openModal, setOpenModal] = useState<string>("false");
  const [error, setError] = useState<boolean>(false);
  const [filteredList, setFilteredList] = useState<any[]>([]);

  function ClearData() {
    setObject(items);
  }

  function FindProducts() {
    setFilteredList(
      itemsList?.filter(
        (val: any) =>
          val?.province == object.second &&
          val?.situation == object.third &&
          val?.type == object.main &&
          val?.attribute == object.first
      )
    );
    if (
      object?.main != "Main Category" &&
      object?.second != "Second Category" &&
      object?.third != "Third Category"
    ) {
      setError(false);
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
        <li>{object?.first}</li>
      </div>
      <div className={style.selectorsContainer}>
        <h1>Qpket Product Finder</h1>
        <div className={style.breadCrumbs}>
          <span>{object.main}</span>
          &thinsp; - &thinsp;
          <span>{object.second}</span>
          &thinsp; - &thinsp;
          <span>{object.third}</span>
        </div>
        {selectorsList?.map((val: any, index: number) => (
          <ClientSelector
            item={val}
            object={object}
            setObject={setObject}
            key={index}
            margin="16px 0 0 0"
            placeholder={items}
            opacity={val?.id == 1 || val?.id == 4 ? 0.6 : 1}
          />
        ))}
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
