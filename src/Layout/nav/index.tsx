import { NavLinks, iNavLinks } from '../../mocks/Content'
import './style.scss'

const Links = NavLinks.map(({ link, alt, icon }: iNavLinks) => (
  <li key={link} className='item'>
    <a target='_blank' href={ link } className='link'>
      <img src={icon} alt={alt} className='logo' />
    </a>
  </li>
))

const Nav = ({ fakeLogo } : { fakeLogo: string }) => {
  return (
    <nav className='nav'>
      <h1 className='fake-logo'>{ fakeLogo }</h1>

      <ul className='list'>
        { Links }
      </ul>
    </nav>
  )
}

export default Nav