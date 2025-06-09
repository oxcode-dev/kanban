
export default function Home() {
  return (
    <div
      className={`flex flex-col items-center py-10 min-h-screen max-w-xl mx-auto`}
    >
      <div className="w-full">
        <div>
          <h2 className="pb-4 font-semibold text-3xl">Tasks</h2>
        </div>
        <form className="space-y-4">
          <div>
            <label>Title</label>
            <input type="text" className="rounded border flex h-10 w-full border-gray-300" />
          </div>

          <div>
            <label>Description</label>
            <textarea rows={5} className="rounded border flex h-20 w-full border-gray-300"></textarea>
          </div>

          <div>
            <button type="submit" className="bg-blue-600 text-white rounded p-2 px-4">
              Submit
            </button>
          </div>
        </form>

        <div className="my-4">
          <div className="space-y-4">
            { [1, 2, 3, 4, 5].map((number, key) => (
              <dl>
                <div className="border border-gray-300 rounded p-4">
                  <dt className="text-lg font-bold text-gray-700">Title</dt>
                  <dd className="font-normal text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam esse minus voluptate soluta sit aspernatur atque voluptatem? Cupiditate odit laboriosam facilis modi, aperiam aut enim possimus numquam eveniet neque?
                  </dd>
                </div>
              </dl>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
