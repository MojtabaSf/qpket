"use client";

import styled from "styled-components";
import Image from "next/image";
import ProductCard from "../product-card/product-card";

type ModalType = {
  openModal: string;
  setOpenModal: (val: string) => void;
  list: any[];
};

export default function Modal({ openModal, setOpenModal, list }: ModalType) {
  return (
    <Container openmodal={openModal} list={list}>
      <div className="content">
        <Image
          src="/icons/close.svg"
          width={20}
          height={20}
          alt=""
          onClick={() => {
            setOpenModal(openModal == "true" ? "false" : "true");
          }}
        />
        <div className="items customScroll">
          {list?.length == 0 ? (
            <p>No Item Found!</p>
          ) : (
            <>
              {list?.map((val: any, index: number) => (
                <ProductCard item={val} key={index} />
              ))}
            </>
          )}
        </div>
      </div>
      <div className="shadow"></div>
    </Container>
  );
}

type ContainerType = { openmodal: string; list: any[] };

const Container = styled.section<ContainerType>`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  opacity: ${({ openmodal }) => (openmodal == "true" ? "1" : "0")};
  z-index: ${({ openmodal }) => (openmodal == "true" ? "1000" : "-1")};

  .content {
    width: 800px;
    height: 435px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    z-index: 1;
    background-color: white;
    border-radius: 8px;
    position: absolute;
    padding: 16px 20px;
    overflow-y: hidden;

    > img {
      cursor: pointer;
    }
  }

  .items {
    width: 100%;
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: ${({ list }) => (list?.length == 1 ? "flex-start" : "center")};
    justify-content: flex-start;
    overflow-y: ${({ list }) => (list?.length < 2 ? "hidden" : "scroll")};
    padding: 16px 0 0 0;

    > p {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
      font-family: RobotoRegular;
    }
  }

  .shadow {
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
  }
`;
