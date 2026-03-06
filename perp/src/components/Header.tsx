

const Header = () => {
  return (
    <>
    <nav className="sticky top-0 z-50 w-full bg-slate-900 text-white p-4 shadow-md left-0">
      <div className="container mx-auto flex justify-between">
        <h1 className="font-bold">Mi Proyecto</h1>
        <ul className="flex gap-4">
          <li>Inicio</li>
          <li>Proyectos</li>
        </ul>
      </div>
    </nav>

    </>
    
  )
}

export default Header