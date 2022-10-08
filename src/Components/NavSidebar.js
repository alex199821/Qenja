import Wrapper from "../assets/wrappers/NavSidebar";
import LanguageSelect from "./LanguageSelect";
const NavSidebar = () => {
  return (
    <Wrapper>
      <header>
        <LanguageSelect />
        <main class="px-4 row py-4 justify-content-between ai-center w-100">
          <select
            class="fs-4 white font-spaceGrotesk fw-500 text-uppercase bg-dark border-0"
            onchange=""
          >
            <option value="EN">EN</option>
            <option value="GE">GE</option>
            <option value="FR">FR</option>
          </select>

          <button
            onclick="toggleSidebar(this)"
            form="sidebar"
            class=" bg-transparent border-0"
          >
            <img src="./assets/whiteXmark.png" />
          </button>
        </main>
      </header>

      <main class="contactsMain position-relative ">
        <img
          class="position-absolute w-100 h-100"
          src="./assets/backgroundGrid.png"
          alt="Header Menu"
        />
        <div class="position-absolute d-flex flex-column-sm ai-center">
          <div class="d-flex flex-column ai-center mb-20">
            <a href="#">
              <button class="headerMenuSmButton fs-3 font-spaceGrotesk fw-400 white mb-3 bg-transparent border-0">
                SHOP
              </button>
            </a>
            <a href="#">
              <button class="headerMenuSmButton fs-3 font-spaceGrotesk fw-400 white mb-3 bg-transparent border-0">
                ABOUT
              </button>
            </a>
            <a href="#">
              <button class="headerMenuSmButton fs-3 font-spaceGrotesk fw-400 white mb-3 bg-transparent border-0">
                CONTACT
              </button>
            </a>
          </div>
          <div class="d-flex gap-5">
            <a href="#" class="d-none d-flex-sm">
              <i class="fa-brands fa-facebook-f white fs-2-sm"></i>
            </a>
            <a href="#" class="d-none d-flex-sm">
              <i class="fa-brands fa-instagram white fs-2-sm"></i>
            </a>
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default NavSidebar;
