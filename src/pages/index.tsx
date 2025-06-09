import supabase from "@/supabase.client";
import { FormEvent, useState } from "react";

export default function Home() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if(description && title) {
      // return alert(description)
      setIsLoading(true)
      try {
        const { error } = await supabase.from("examples").insert([
          {
            title: title,
            description: description,
          },
        ]);
  
        if (error) {
          console.error(error.message);
          return;
        }

        setDescription('')
        setTitle('')
        return alert("Successfully sent!");

      } catch (error) {
        console.log("error sending message:", error);
      } finally {
        setIsLoading(false)
      }
    }

    return alert('Pls fill the form!!!')
  }

  return (
    <div
      className={`flex flex-col items-center py-10 min-h-screen max-w-xl mx-auto`}
    >
      <div className="w-full">
        <div>
          <h2 className="pb-4 font-semibold text-3xl">Tasks</h2>
        </div>
        <form onSubmit={e => handleSubmit(e)} className="space-y-4">
          <div>
            <label>Title</label>
            <input value={title} onChange={e => setTitle(e.target.value)} type="text" className="rounded border flex h-10 w-full border-gray-300 px-2 py-1 text-gray-600" />
          </div>

          <div>
            <label>Description</label>
            <textarea value={description} onChange={e => setDescription(e.target.value)} rows={5} className="rounded border flex h-20 w-full border-gray-300 px-2 py-1 text-gray-600"></textarea>
          </div>

          <div>
            <button disabled={isLoading} type="submit" className="bg-blue-600 text-white rounded p-2 px-4">
              { isLoading ? 'Loading...' : 'Submit'}
            </button>
          </div>
        </form>

        <div className="py-8">
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
