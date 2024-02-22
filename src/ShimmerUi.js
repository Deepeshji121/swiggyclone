const ShimmerUi = () => {
  return (
    <>
      <div className=" flex flex-wrap gap-4 mx-12 mt-4">
        {Array(12)
          .fill("")
          .map((e) => {
            return (
              <div className="max-w-sm w-[300px] h-[320px] animate-pulse flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <div className="h-2.5 mx-3 mt-2 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 mx-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[260px] mb-2.5"></div>
                <div className="h-2 mx-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 max-w-[240]"></div>
                <div className="h-2 mx-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[180px] mb-2.5"></div>
                <div className="h-2 mx-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[230px] mb-2.5"></div>
                <div className="h-2 mx-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[220px] mb-2.5"></div>
                <div className="h-2 mx-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[190px] mb-2.5"></div>
                <div className="h-2 mx-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[250px] mb-2.5"></div>
                <div className="h-2 mx-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[210px] mb-2.5"></div>
                <div className="h-2 mx-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[270px]"></div>  
                <span className="sr-only">Loading...</span>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default ShimmerUi;
