
import { menuList } from '../../public/data/menuData';
import { cancelIcon, dropIcon, oksignIcon } from '../../public/svg';
import useIsActive from '../hooks/useIsActive';

const Menu = ({ handleIsMenuActive }) => {
  const [isLangActive, handleIsLangActive] = useIsActive();

  return (
    <>
      <section className="menu">
        <div className="menu-cancel" onClick={handleIsMenuActive}>
          <img src={cancelIcon} alt="X" />
        </div>

        <ul className="menu-items">
          {menuList.map((item, index) => (
            <li className="menu-single-item" key={item.id || index}>
              {index !== 6 ? (
                <>
                  <img src={item.icon} alt={item.label} />
                  <h4>{item.label}</h4>
                </>
              ) : (
                <div className="menu-drop">
                  <div className="menu-drop-content" onClick={handleIsLangActive}>
                    <img src={item.icon} alt={item.label} />
                    <h4>{item.label}</h4>
                    <img
                      src={dropIcon}
                      className="menu-drop-content-dropIcon"
                      alt="drop"
                    />
                  </div>

                  {isLangActive && (
                    <ul className="menu-drop-items">
                      <li className="menu-drop-single-item">
                        <h4>{item.label}</h4>
                        <img src={oksignIcon} alt="ok" />
                      </li>
                      <li className="menu-drop-single-item">
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

export default Menu;
