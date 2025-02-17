import axios from "axios";
import { useEffect, useState } from "react";
import OwnerReviewBox from "../components/OwnerReviewBox";
import "../styles/ownerReview.scss";

//test interface
interface test {
  userid: number;
  id: number;
  title: string;
  body: string;
}

export default function OwnerReview() {
  const [text, setText] = useState<test[]>([]);
  const [openId, setOpenId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // test용 await axios
  const getData = async () => {
    const resData = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setText(resData.data.slice(0, 30));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = text.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(text.length / itemsPerPage);

  return (
    <>
      <div className="con m-10 flex flex-col items-center">
        <div className="reviewTitle mb-8">
          <h1 className="text-2xl font-bold">리뷰 관리</h1>
        </div>
        <div className="title flex h-10 relative items-center border-amber-500 bg-amber-500 text-white w-3/5">
          <div className="flex justify-between justify-items-center w-full">
            <p className="w-24 text-center">작성일</p>
            <p className="">제목</p>
            <p className="w-20 text-center">작성자</p>
          </div>
        </div>

        {currentItems.map((data) => (
          <OwnerReviewBox
            data={data}
            key={data.id}
            isOpen={openId === data.id}
            onClick={() => handleClick(data.id)}
          />
        ))}

        {/* 페이지네이션 */}
        <div className="pagination flex mt-4">
          <button
            className="px-4 py-2 mx-1 text-xs "
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            이전
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              className={` px-3 py-2 mx-1 text-xs ${
                currentPage === index + 1 &&
                "border border-amber-500 text-amber-500"
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className=" px-4 py-2 mx-1 text-xs"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            다음
          </button>
        </div>
      </div>
    </>
  );
}
