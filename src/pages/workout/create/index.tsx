import { ChangeEvent, FormEvent, useState } from 'react';

export default function CreateForm() {
  const [name, setName] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const workout = localStorage.getItem("workout")
    let result = [name] as string[]

    if (workout) {
      const workouts = JSON.parse(workout) as string[]
      result = [...workouts, name ]
    } 

    localStorage.setItem("workout", JSON.stringify(result))

    console.log(localStorage.getItem("workout"));
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" value={name} onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  )
}