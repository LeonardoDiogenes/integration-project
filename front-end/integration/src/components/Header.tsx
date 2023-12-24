import { useNavigate } from 'react-router-dom';
import styles from '../css-modules/Header.module.css';

function Header() {
  const navigate = useNavigate();

  return (
<div className={ styles.header }>
  <header>
    <h1>Integration Project</h1>
    <div className={ styles.navContainer }>
      <nav>
        <ul className={ styles.navList }>
          <li>
            <a href="#" onClick={() => navigate('/')}>Home</a>
          </li>
          <li>
            <a href="#" onClick={() => navigate('/profile')}>Profile</a>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className={ styles.navList }>
          <li>
            <a href="#" onClick={() => navigate('/login')}>Login</a>
          </li>
          <li>
            <a href="#" onClick={() => navigate('/signup')}>Sign Up</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</div>




  )
}

export default Header;