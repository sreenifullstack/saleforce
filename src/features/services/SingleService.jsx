export const SingleService = ({ data }) => {
  return (
    <>
      <div className="mt-2">
        <div className="flex flex-col gap-2">
          <div className="flex w-full flex-row">
            <div className="flex flex-1 flex-col">
              <label htmlFor="name"> Name </label>
              <input
                id="name"
                className="mt-1 border px-2 py-1 focus:border-gray-400 focus:outline-0"
                type="string"
                defaultValue={"title"}
              />
            </div>

            <div className="flex w-2/5 flex-col whitespace-nowrap">
              <label htmlFor="name"> Operationl Security Level </label>
              <input
                id="name"
                className="mt-1 border px-2 py-1 focus:border-gray-400 focus:outline-0"
                type="string"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label>Target Url</label>
            <div className="flex">
              <input
                disabled
                className="mt-1  table-cell w-2/5 border px-2 py-1 focus:border-gray-400 focus:outline-0"
                type="text"
                defaultValue="www"
              />
              <input
                className="mt-1 table-cell w-3/5 border px-2 py-1 focus:border-gray-400 focus:outline-0"
                type="text"
                defaultValue="google.com"
              />
            </div>
          </div>

          <details>
            <summary>Advanced</summary>
          </details>

          <div className="flex flex-col">
            <label>Descriptions</label>
            <textarea className="mt-1 h-12 resize-none border px-2 focus:border-gray-400 focus:outline-none"></textarea>
          </div>
        </div>
      </div>
    </>
  );
};
