import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import "../styles/Income.scss";

export default function Income() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [selectedDateText, setSelectedDateText] = useState(null); // 초기값을 null로 설정
  const [isCalendarVisible, setIsCalendarVisible] = useState(false); // 달력 표시 여부

  const handleDateChange = (dates) => {
    setDateRange(dates);
    if (dates[0] && dates[1]) {
      setSelectedDateText(
        `${dates[0].toLocaleDateString()} - ${dates[1].toLocaleDateString()}`
      );
    }
  };

  const generateChartDataForWeek = (start, end) => {
    if (!start || !end) return []; // start와 end가 유효하지 않으면 빈 배열 반환
    const diffDays = Math.ceil(
      (end.getTime() - start.getTime()) / (1000 * 3600 * 24)
    );
    const step = diffDays > 30 ? Math.ceil(diffDays / 30) : 1;
    return Array.from({ length: Math.ceil(diffDays / step) + 1 }, (_, i) => {
      const date = new Date(start);
      date.setDate(start.getDate() + i * step);
      return {
        name: `${date.getMonth() + 1}-${date.getDate()}`,
        value: i * 100,
      };
    });
  };

  const menu = [
    { name: "치킨", value: 102, color: "#ff9999" },
    { name: "피자", value: 202, color: "#66b3ff" },
    { name: "햄버거", value: 302, color: "#99ff99" },
  ];

  const MyChart = () => (
    <ResponsiveContainer width={900} height={500}>
      <AreaChart data={generateChartDataForWeek(dateRange[0], dateRange[1])}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type="linear"
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.3}
        />
      </AreaChart>
    </ResponsiveContainer>
  );

  const MyPieChart = () => (
    <div className="pie-chart-container">
      <ResponsiveContainer width={300} height={400}>
        <PieChart>
          <Pie
            data={menu}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
          >
            {menu.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <table className="menu-table">
        <thead>
          <tr>
            <th>메뉴</th>
            <th>매출</th>
          </tr>
        </thead>
        <tbody>
          {menu.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div
      className="income-container"
      style={{ width: "1200px", margin: "0 150px" }}
    >
      <h1>매출관리</h1>
      <hr />
      <div>
        선택기간 : <span>{selectedDateText || "날짜를 선택해주세요"}</span>
        <button onClick={() => setIsCalendarVisible(!isCalendarVisible)}>
          달력 보기
        </button>{" "}
        {/* 달력 토글 버튼 */}
        {isCalendarVisible && (
          <DatePicker
            selectsRange
            startDate={dateRange[0]}
            endDate={dateRange[1]}
            onChange={handleDateChange}
            inline
          />
        )}
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", margin: "20px, 0" }}
      >
        <div
          style={{
            width: "30%",
            border: "1px solid black",
            marginRight: "10px",
          }}
        >
          <h4>매출액</h4>
          <hr />
          <p>매장 매출 : 1,000,000원</p>
          <p>포장 매출 : 1,000,000원</p>
          <p style={{ textAlign: "end" }}> 총 매출액 : 2,000,000원</p>
        </div>
        <div
          style={{
            width: "30%",
            border: "1px solid black",
            marginRight: "10px",
          }}
        >
          <h4>고객 수</h4>
          <hr />
          <p>방문 고객 수 : 8명</p>
          <p>포장 고객 수 : 2명</p>
          <p style={{ textAlign: "end" }}>총 고객 수 : 10명</p>
        </div>
        <div style={{ width: "30%", border: "1px solid black" }}>
          <h4>재방문율</h4>
          <hr />
          <p>총 고객 수 : 100명</p>
          <p>재방문 고객 : 10명</p>
          <p>신규 고객 : 90명</p>
          <p style={{ textAlign: "end" }}>재방문율 : 10%</p>
        </div>
      </div>

      <div style={{ display: "flex", margin: "50px 0" }}>
        <div>
          <h4>매출</h4>
          <MyChart />
        </div>
        <div style={{ textAlign: "center" }}>
          <h4>메뉴별 매출 비율</h4>
          <MyPieChart />
        </div>
      </div>
    </div>
  );
}
