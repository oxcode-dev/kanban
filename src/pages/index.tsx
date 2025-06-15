'use client';

import supabase from "@/supabase.client";
import { FormEvent, useEffect, useRef, useState } from "react";

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
  const [selectedTask, setSelectedTask] = useState <TaskType | null>(null)
  const [description, setDescription] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const titleRef = useRef(null)

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
        // .eq('id', '26ae1fd4-d353-4505-9cf4-38e6f2e03149')

      if (error) {
        console.error(error.message);
        return;
      }

      console.log(data);
      setTasks(data)
    }
    catch (error) {
      console.log("error sending message:", error);
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    if(selectedTask?.id) {
      return handleUpdateTask(selectedTask?.id)
    }
    return handleAddTask()
  }

  const handleClickEdit = (task: TaskType) =>{
    //@ts-ignore
    titleRef.current.focus()
    setSelectedTask(task)
    setDescription(task.description)
    setTitle(task.title)
  }

  const handleAddTask = async () => {
    
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

  const handleUpdateTask = async (id: string) => {
    if(description && title) {

      setIsLoading(true)
      try {
        const { error } = await supabase.from("examples").update([
          {
            title: title,
            description: description,
          },
        ]).eq('id', id);
  
        if (error) {
          console.error(error.message);
          return;
        }

        setDescription('')
        setTitle('')
        setSelectedTask(null)
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


  const handleDeleteTask = async (id: string) => {
    if(confirm('Are you sure, you wanted to deleted this task')) {

      if(!id) {
        return alert('Select a task')
      }

      try {
        const { error } = await supabase.from("examples").delete().eq('id', id);
  
        if (error) {
          console.error(error.message);
          return;
        }

        await fetchTasks()
        return alert("Successfully sent!");

      } catch (error) {
        console.log("error sending message:", error);
      } finally {
        setIsLoading(false)
      }
    }
  }


  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <div
      className={`flex flex-col items-center py-10 min-h-screen max-w-xl mx-auto`}
    >
      <div className="w-full">
        <div>
          <h2 className="pb-4 font-semibold text-3xl">Tasks</h2>
        </div>
        <form onSubmit={event => handleSubmit(event)} className="space-y-4">
          <div>
            <label htmlFor="title">Title</label>
            <input ref={titleRef} value={title} onChange={e => setTitle(e.target.value)} id="title" type="text" className="rounded border flex h-10 w-full border-gray-300 px-2 py-1 text-gray-600" />
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <textarea value={description} onChange={e => setDescription(e.target.value)} id="description" rows={5} className="rounded border flex h-20 w-full border-gray-300 px-2 py-1 text-gray-600"></textarea>
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
                  <div className="space-x-2 pt-2">
                    <button onClick={() => handleDeleteTask(task.id)} type="button" className="bg-red-600 text-white rounded p-1 px-3 cursor-pointer">
                      Delete
                    </button>
                    <button onClick={() => handleClickEdit(task)} type="button" className="bg-white text-gray-500 rounded p-1 px-3 border cursor-pointer">
                      Edit
                    </button>
                  </div>

                </div>
              </dl>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
