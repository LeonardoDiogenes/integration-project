import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
<div className="header">
  <header>
    <h1>Integration Project</h1>
    <div className="nav-container">
      <nav>
        <ul className="nav-list">
          <li>
            <a href="#" onClick={() => navigate('/')}>Home</a>
          </li>
          <li>
            <a href="#" onClick={() => navigate('/profile')}>Profile</a>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="nav-list">
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