import { menuList } from "../assets/data/menuData";
import { cancelIcon, dropIcon, oksignIcon } from "../assets/svg";
import useIsActive from "../hooks/useIsActive";

const NavbarMenu = ({ handleIsNavbarMenuActive }) => {
  const [isLangActive, handleIsLangActive] = useIsActive();

  return (
    <>
      <section className="navmenu">
        <div className="navmenu-cancel" onClick={handleIsNavbarMenuActive}>
          <img src={cancelIcon} alt="X" />
        </div>

        <ul className="navmenu-items">
          {menuList.map((item, index) => (
            <li className="navmenu-single-item" key={item.id || index}>
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
