
function Nav() {
  return (
    <>
      <nav>
        <div className="flex space-x-7 p-4 items-center">
          {/* logo and bold text */}
          <div className="flex space-x-2 items-center">
            <div className="h-full w-8">
              <img src="../assets/spiro.svg"></img>
            </div>
            <div>
              <span className="font-bold">React Navigation</span>
            </div>
          </div>
          {/* extended links */}
          <div className="space-x-6 font-medium flex">
            <a className="hover:text-purple-400" href="#">Docs</a>
            <a className="hover:text-purple-400" href="#">Blog</a>
            <a className="hover:text-purple-400" href="#">Help</a>
            <div className="relative inline-block">
              <a className="hover:text-purple-400"  href="#" role="button">7.x<i className="fas fa-caret-down ml-1"></i></a>
              <div className="absolute bg-white min-w-40 rounded-lg shadow-lg z-10 mt-2">
                <ul className="p-2">
                  <li>
                    <a href="#" className="hover:bg-gray-100 block py-2 px-4 text-sm">7.x</a>
                  </li>
                  <li>
                    <a href="#" className="hover:bg-gray-100 block py-2 px-4 text-sm">6.x</a>
                  </li>
                  <li>
                    <a href="#" className="hover:bg-gray-100 block py-2 px-4 text-sm">5.x</a>
                  </li>
                  <li>
                    <a href="#" className="hover:bg-gray-100 block py-2 px-4 text-sm">4.x</a>
                  </li>
                  <li>
                    <a href="#" className="hover:bg-gray-100 block py-2 px-4 text-sm">3.x</a>
                  </li>
                  <li>
                    <a href="#" className="hover:bg-gray-100 block py-2 px-4 text-sm">2.x</a>
                  </li>
                  <li>
                    <a href="#" className="hover:bg-gray-100 block py-2 px-4 text-sm">1.x</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default App
