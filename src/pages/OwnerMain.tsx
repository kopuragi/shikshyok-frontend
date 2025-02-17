import "../styles/ownerMain.scss";

export default function OwnerMain() {
  const shopName = ["서브웨이", "빽다방", "새싹떡볶이"];
  return (
    <main className="box-content mt-10">
      <div className="con w-full flex flex-col items-center">
        {/* 전체 컨테이너 */}
        <div className="titleBorder border-b border-gray-300  w-4/5 relative">
          {/* select 밑줄을 위한 div */}
          <div className="selctBox w-56 relative left-10 mb-2 ">
            <select
              name="shop"
              className="text-xl w-48 appearance-none 
              bg-contain bg-no-repeat bg-right 
              font-bold  cursor-pointer"
            >
              {shopName.map((shop, index) => {
                return (
                  <option value="shop" key={index}>
                    {shop}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="folderBox border shadow rounded w-4/5 my-7 flex justify-center">
          <div className="folder w-11/12 grid grid-cols-2 box-content">
            <div
              className="bg-contain bg-no-repeat w-[19rem] h-72 
                  relative my-0 mx-auto "
            >
              <p className="relative top-12 left-6 text-white text-lg">
                주문내역
              </p>
            </div>
            <div
              className="bg-contain bg-no-repeat w-[19rem] h-72 
                  relative my-0 mx-auto "
            >
              <p className="relative top-12 left-6 text-white text-lg">
                메뉴관리
              </p>
            </div>
            <div
              className="bg-contain bg-no-repeat w-[19rem] h-72 
                  relative my-0 mx-auto "
            >
              <p className="relative top-12 left-6 text-white text-lg">
                매출관리
              </p>
            </div>
            <div
              className="bg-contain bg-no-repeat w-[19rem] h-72 
                  relative my-0 mx-auto "
            >
              <p className="relative top-12 left-6 text-white text-lg">
                리뷰관리
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
