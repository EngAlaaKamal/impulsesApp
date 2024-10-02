const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className="screen-layout pt-8">
        <div className="bg-primary px-4 py-2 md:-mx-4 -my-4 md:m-0 rounded-xl">
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center gap-16">
              <img
                src="./images/logo.png"
                alt="Impulses"
                className="w-12 md:w-20 mx-2"
              />
              <ul className="text-white font-medium gap-8 text-lg hidden md:flex">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Catalog</a>
                </li>
              </ul>
            </div>
            <a
              className="text-sm md:text-base font-medium bg-secondary text-white px-3 py-1 md:px-4 md:py-2 rounded-lg"
              href="https://api.whatsapp.com/send?phone=201010099180"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
