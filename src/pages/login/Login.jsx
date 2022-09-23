import "./login.css";
import mainImg from '../../customImg/New team members-rafiki.svg';
export default function Login() {
  return (
    <main>
        
        <img  src={mainImg} alt="" />
        <div className='loginContainer'>
        <section className='loginBox'>
            <p className='main-name'>Manage Users</p>
        <form action="submit">
                <input placeholder='EMAIL' type="email" required/>
                <input placeholder='PASSWORD' type="password" required />
                <button className="LOGIN-button">
                    LOGIN
                </button>
            </form>
        </section>
        </div>
    </main>
  )
}
