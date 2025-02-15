import "../../../styles/customerOrderHistory.scss";
interface CustomerOrderHistory {}
const CustomerOrderHistory: React.FC = () => {
  return (
    <section className="order-history-container-customer">
      <div className="menu-tab-container-customer">
        <div className="menu-tab-1-customer">
          <p>현제 주문</p>
        </div>
        <div className="menu-tab-2-customer">
          <p>전체 주문</p>
        </div>
      </div>

      <div className="receipt-card-container-customer">
        <div className="receipt-card-customer">
          <ul className="receipt-card-list-customer">
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
        </div>
      </div>
    </section>
  );
};

export default CustomerOrderHistory;
