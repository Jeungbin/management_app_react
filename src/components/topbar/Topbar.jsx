// import { Link } from 'react-router-dom'
import './topbar.css'


export default function Topbar() {
  return (
    <div className='nav-bar'>
        <h4>Manage Users</h4>
        <div>
          <a className='link' href='/'>Schdule</a>
          <span> | </span>
          <a className='link' href='/'>Manage Users</a>
        </div>
    </div>
  )
}
