import "./menu.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faGear } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Menus() {
  return (
    <main className="max-w-7xl m-auto">
      <h3 className="text-3xl font-bold m-5">메뉴 관리</h3>
      <ul className="menu-tab flex list-none">
        <li className="choose">전체 메뉴</li>
        <li>샘플. 커피</li>
        <li>샘플. 주스</li>
        <li>
          <FontAwesomeIcon icon={faPlus} />
        </li>
      </ul>

      <hr className="mb-3" />
      {/* <span>부제목 샘플. 커피</span> */}
      <span class="bg-gray-100 text-gray-800 text-xl font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-300">
        샘플. 커피
      </span>
      <ul className="menu-board flex list-none overflow-x-scroll">
        {/* {map 공간. 메뉴 데이터.} */}
        <li>
          <div className="icon-box">
            <FontAwesomeIcon icon={faGear} className="setting-icon m-2" />
          </div>
          <div className="img-box"></div>
          <div className="content-box"></div>
        </li>
        <li>
          <div className="icon-box">
            <FontAwesomeIcon icon={faGear} className="setting-icon m-2" />
          </div>
          <div className="img-box"></div>
          <div className="content-box"></div>
        </li>
        <li>
          <div className="icon-box">
            <FontAwesomeIcon icon={faGear} className="setting-icon m-2" />
          </div>
          <div className="img-box"></div>
          <div className="content-box"></div>
        </li>
        <li>
          <FontAwesomeIcon icon={faPlus} className="add-icon" />
        </li>
      </ul>
      <hr className="mb-3" />
      {/* <div className="sub-menu">부제목 샘플. 주스</div> */}
      <span class="bg-gray-100 text-gray-800 text-xl font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-300">
        샘플. 주스
      </span>
      <ul className="menu-board overflow-x-scroll flex list-none">
        {/* {map 공간. 메뉴 데이터.} */}
        <li>
          <div className="icon-box">
            <FontAwesomeIcon icon={faGear} className="setting-icon m-2" />
          </div>
          <div className="img-box"></div>
          <div className="content-box"></div>
        </li>
        <li>
          <FontAwesomeIcon icon={faPlus} className="add-icon" />
        </li>
      </ul>
    </main>
  );
}
