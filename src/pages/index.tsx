import Link from 'next/link'
import { useEffect, useMemo } from 'react';

export default function Home() {
  useEffect(() => {
    console.log(localStorage.getItem("workout"))
  },[])

  const workouts = useMemo(() => {
    try {
      const localStorageWorkout = localStorage.getItem("workout")
      if(!localStorageWorkout) return null

      return JSON.parse(localStorageWorkout) as string[]
    } catch (error) {
      return null
    }
  }, [])

  return (
    <main>
      <div>
          <Link href="/workout/create">Create</Link>
      </div>
      <ul>
        {workouts && workouts.map((workout, index) => (
          <li key={index}>
            {workout}
          </li>
        ))}
      </ul>
    </main>
  )
}