

const SideBar = () => {

        
    const navbarOpenClose = () => {
        const navbar = document.getElementById('navbar-collapse');
        if (navbar) {
            navbar.classList.toggle('hidden');
            navbar.classList.toggle('open');
        } else {
            console.error('Navbar element not found');
        }
    };


  return (

    <header className="fixed top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-screen">
        <nav className="relative max-w-[66rem] w-full bg-neutral-800 rounded-[28px] py-3 ps-5 pe-2 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto" aria-label="Global">
            <div className="flex items-center justify-between">
            <a className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80" href="../templates/agency/index.html" aria-label="Preline">
                <p className=" text-2xl text-white">Absensi RFID</p>
            </a>

            <div className="md:hidden" onClick={navbarOpenClose} >
                <button type="button" className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-neutral-800 text-white disabled:opacity-50 disabled:pointer-events-none" data-hs-collapse="#navbar-collapse" aria-controls="navbar-collapse" aria-label="Toggle navigation">
                <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
            </div>
            </div>

            <div id="navbar-collapse" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
            <div className="flex flex-col md:flex-row md:items-center md:justify-end py-2 md:py-0 md:ps-7">
                <a className="py-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300" href="/" aria-current="page">Home</a>
                <a className="py-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300" href="/kelas">Kelas</a>
                <a className="py-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300" href="/absensi">Absensi</a>
                <a className="py-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300" href="#">Approach</a>

                <div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] py-3 ps-px sm:px-3 md:py-4">
                
                </div>

                <div>
                <a className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none" href="../templates/agency/index.html#contact">
                    Contact us
                </a>
                </div>
            </div>
            </div>
        </nav>
    </header>
  )
}

export default SideBar
