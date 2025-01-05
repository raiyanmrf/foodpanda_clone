import { menuList } from "../assets/data/menuData";
import { cancelIcon, dropIcon, oksignIcon } from "../assets/svg";
import { useAuthContext } from "../hooks/AuthContext";
import useIsActive from "../hooks/useIsActive";

const NavbarMenu = ({ handleIsMenuActive }) => {
  const [isLangActive, handleIsLangActive] = useIsActive();
  const { navbarUsername, setNavbarUsername } = useAuthContext();
  return (
    <>
      <section className="navmenu">
        <div className="navmenu-cancel" onClick={handleIsMenuActive}>
          <img src={cancelIcon} alt="X" />
        </div>

        <ul className="navmenu-items">
          {menuList.map((item, index) => (
            <li
              onClick={(e) => {
                e.stopPropagation();
                if (index === 8) {
                  localStorage.removeItem("token");
                  setNavbarUsername(null);
                  handleIsMenuActive();
                }
              }}
              className="navmenu-single-item"
              key={item.id || index}
            >
              {index !== 6 ? (
                <>
                  <img src={item.icon} alt={item.label} />
                  <h4>{item.label}</h4>
                </>
              ) : (
                <div className="navmenu-drop">
                  <div
                    className="navmenu-drop-content"
                    onClick={handleIsLangActive}
                  >
                    <img src={item.icon} alt={item.label} />
                    <h4>{item.label}</h4>
                    <img
                      src={dropIcon}
                      className="navmenu-drop-content-dropIcon"
                      alt="drop"
                    />
                  </div>

                  {isLangActive && (
                    <ul className="navmenu-drop-items">
                      <li className="navmenu-drop-single-item">
                        <h4>{item.label}</h4>
                        <img src={oksignIcon} alt="ok" />
                      </li>
                      <li className="navmenu-drop-single-item">
                        <h4>{item.label2}</h4>
                        <img src={oksignIcon} alt="ok" />
                      </li>
                    </ul>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default NavbarMenu;
