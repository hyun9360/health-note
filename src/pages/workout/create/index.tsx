import { ChangeEvent, FormEvent, useState } from 'react';

export default function CreateForm() {
  const [name, setName] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert(name)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" value={name} onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  )
}