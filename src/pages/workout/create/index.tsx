export default function CreateForm() {
    const handleSubmit = async (event: any) => {
      event.preventDefault()
      alert(event.target.name.value)
    }
    
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
  
        <button type="submit">Submit</button>
      </form>
    )
}