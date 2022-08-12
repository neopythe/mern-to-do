import Button from './shared/Button'

export default function NavBar() {
  return (
    <nav className="navbar justify-between absolute bg-white text-slate-800 w-full">
      <h2 className="font-bold text-xl tracking-wide underline decoration-[#626977] underline-offset-4 decoration-wavy">
        MERN to-do
      </h2>
      <Button navigation>logout</Button>
    </nav>
  )
}
