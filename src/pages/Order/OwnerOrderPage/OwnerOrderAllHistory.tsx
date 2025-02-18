import "../../../styles/ownerOrderAllHistory.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../../components/Header/Header";

interface OwnerOrderAllHistory {}

const OwnerOrderAllHistory: React.FC = () => {
  return (
    <>
      <Header nickname="고민봉" />
      <div className="wrap-container-all">
        <div>
          <section className="order-history-container-all">
            <div className="menu-tab-container-all">
              <div className="menu-tab-1-all">
                <p>현제 주문</p>
              </div>
              <div className="menu-tab-2-all">
                <p>전체 주문</p>
              </div>
            </div>
            <hr className="border-2 opacity-75 black" />
            <div className="receipt-card-container-all">
              <div className="receipt-card-all">
                <ul className="receipt-card-list-all">
                  <li>
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="custom-icon-all"
                    />
                  </li>
                  <li>주문시간</li>
                  <li>[2025-02-15]</li>
                  <li>19:30:55</li>
                  <li>주문번호</li>
                  <li>123123</li>
                  <li>매장 인원 4명</li>
                  <li>연락처</li>
                  <li>010-1234-1234</li>
                  <li>메뉴이름</li>
                  <li>매우매우맛잇는치킨x1</li>
                  <li>매우매우맛잇는피자x1</li>
                  <li>매우매우맛잇는햄버거x1</li>

                  <br />
                  <li>합계: 85000원</li>
                  <li>방문시간</li>
                  <li>19:40:55</li>
                </ul>
                <div className="mt-2">
                  {window.innerWidth >= 480 ? (
                    <div>
                      <button className="btn btn-warning">조리 시작</button>
                      <button className="btn btn-success">조리 완료</button>
                    </div>
                  ) : (
                    <div>
                      <button className="btn btn-warning btn-sm">
                        조리 시작
                      </button>
                      <button className="btn btn-success btn-sm">
                        조리 완료
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="receipt-card-all">
                <ul className="receipt-card-list-all">
                  <li>
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="custom-icon-all"
                    />
                  </li>
                  <li>주문시간</li>
                  <li>[2025-02-15]</li>
                  <li>19:30:55</li>
                  <li>주문번호</li>
                  <li>123123</li>
                  <li>매장 인원 4명</li>
                  <li>연락처</li>
                  <li>010-1234-1234</li>
                  <li>메뉴이름</li>
                  <li>매우매우맛잇는치킨x1</li>
                  <li>매우매우맛잇는피자x1</li>
                  <li>매우매우맛잇는햄버거x1</li>

                  <br />
                  <li>합계: 85000원</li>
                  <li>방문시간</li>
                  <li>19:40:55</li>
                </ul>
                <div className="mt-2">
                  {window.innerWidth >= 480 ? (
                    <div>
                      <button className="btn btn-warning">조리 시작</button>
                      <button className="btn btn-success">조리 완료</button>
                    </div>
                  ) : (
                    <div>
                      <button className="btn btn-warning btn-sm">
                        조리 시작
                      </button>
                      <button className="btn btn-success btn-sm">
                        조리 완료
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
          <nav className="pagination-container-all">
            <ul className="pagination-number-container-all">
              <li>
                <a href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li>
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">5</a>
              </li>
              <li>
                <a href="#">6</a>
              </li>
              <li>
                <a href="#">7</a>
              </li>
              <li>
                <a href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default OwnerOrderAllHistory;
