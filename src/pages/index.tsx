import Link from 'next/link'

function Home() {
  return (
    <ul>
      <li>
        <Link href="/workout/create">Create</Link>
      </li>
    </ul>
  )
}

export default Home