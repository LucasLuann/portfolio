export default function Header() {
  return (
    <header className="fixed w-full bg-gray-900 bg-opacity-90 z-10">
      <div className="container mx-auto flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">Lucas Luann</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="#about"
                className="hover:text-blue-400 transition-colors text-white"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-blue-400 transition-colors text-white"
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-blue-400 transition-colors text-white"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-400 transition-colors text-white"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
