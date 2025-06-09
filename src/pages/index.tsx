import supabase from "@/supabase.client";
import { FormEvent, useEffect, useState } from "react";

interface TaskType {
  title: string,
  description: string,
  created_at: Date,
  // created_at: string,
  id: string,
}

export default function Home() {
  const [title, setTitle] = useState('')
  const [tasks, setTasks] = useState <TaskType[]>([])
  const [description, setDescription] = useState('')
  const [isLoading, setIsLoading] = useState(false);

  const getDateTime = (datetime: Date) => {
    const date = new Date(datetime);

    const formatter = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      // timeZoneName: 'short',
    });

    return formatter.format(date);
  }

  const fetchTasks = async () => {
    try{
      const { error, data } = await supabase
        .from("examples")
        .select('*')
        .order('created_at', {ascending: false})

      if (error) {
        console.error(error.message);
        return;
      }

      setTasks(data)
    }
    catch (error) {
      console.log("error sending message:", error);
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchTasks()
  })
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if(description && title) {

      setIsLoading(true)
      try {
        const { error } = await supabase.from("examples").insert([
          {
            title: title,
            description: description,
          },
        ]).single();
  
        if (error) {
          console.error(error.message);
          return;
        }

        setDescription('')
        setTitle('')
        await fetchTasks()
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
            { tasks.map((task) => (
              <dl key={task.id}>
                <div className="border border-gray-300 rounded p-4">
                  <dt className="text-lg font-bold text-gray-700">
                    { task.title }
                  </dt>
                  <dd className="font-normal text-gray-500">
                    {task.description}
                  </dd>
                  <dd className="font-normal text-gray-400 text-sm">
                    <time>{getDateTime(task.created_at)}</time>
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
