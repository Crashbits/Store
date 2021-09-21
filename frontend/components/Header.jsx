import Nav from './Nav'
import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className="bar">
        <Link href="/">Home</Link>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <Nav />
    </header>
  )
}
