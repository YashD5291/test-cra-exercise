import { FC } from "react";
import styles from "./NavBar.module.scss";
import Button from "../Button/Button";
import { useAppDispatch } from "../../contexts/AppContext";

const NavBar: FC = () => {
  const dispatch = useAppDispatch();

  const handleTitleChange = (v: string) =>
    dispatch({ type: "UPDATE_TITLE", payload: v });

  return (
    <div className={styles.navbarWrap}>
      <nav className={styles.navbar}>
        <div className={styles.logoWrap}>
          <img
            className={styles.logo}
            alt="Logo"
            src="/img/-master-emblem-no-box.svg"
          />
        </div>
        <div className={styles.titleInputWrap}>
          <input
            className={styles.titleInput}
            placeholder="Questionnaire Title"
            onChange={(e) => handleTitleChange(e.target.value)}
            type="text"
          />
        </div>
        <Button label="Log In" size="sm" variant="primary-light" />
      </nav>
    </div>
  );
};

export default NavBar;
