import Button from './shared/Button'

export default function NavBar() {
  return (
    <nav className="navbar justify-end absolute bg-white text-slate-800 w-full">
      <Button navigation>logout</Button>
    </nav>
  )
}
