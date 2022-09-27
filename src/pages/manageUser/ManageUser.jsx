import "./manageUser.css"
import Topbar from '../../components/topbar/Topbar'
export default function ManageUser() {
  return (
    <>
    <Topbar/>
        <main className="site-main-box">
        <header>
            <div className="header-info">
                <a className='header-name' href="/">All User</a>
                <div>
                    <p  className="header-user-count"><span id="total-user"></span> users</p>
                </div>
            </div>
        </header>


<div className="container">
    <div className="container-flex">
        <button className="all-user-btn" id="all-user-btn"><p>Show all user</p></button>
        <button className="create-new-user-btn">
            <a href="/add-user">
            Create New User
            </a>
        </button>                
            <div className="search-by-name">
            <label htmlFor="serchBar">User Name : </label>
            <input
                type="search"
                name="searchBar"
                id="searchBar"
                placeholder="search for a user"
            />
            <button type="submit" id="search-button" className="search-button">Search</button>
            {/* <!-- <button type="button" id="reset-button">Reset</button> --> */}
            </div>
            <div className="search-by-date">
                <label  htmlFor="remaining-date-input">Remaining Date : </label>
                <select name="reamainingDaysOption" id="reamainingDaysOption" >
                    <option value="reamainingDaysOption" >Select Remaining Date</option>
                    <option value="overDate">Over Date</option>
                    <option value="less7Days">Less Than 7 Days</option>
                    <option value="more7Days">More Than 7 Days</option>
                </select>
                {/* <!-- <button type="button" id="reset-button2">Reset</button> --> */}
            </div>

        
    </div>
    
    <table>
    <thead>
    <tr>
        <th className="th-left">Name</th>
        <th>PhoneNumber</th>
        <th>
            <select name="className=date" id="className=date">
                <option value="className=date" >className=Date</option>
                <option value="mon">Mon</option>
                <option value="tue">Tue</option>
                <option value="wed">Wed</option>
                <option value="thur">Thur</option>
                <option value="fri">Fri</option>
                <option value="sat">Sat</option>
                <option value="sun">Sun</option>
            </select>

        </th>
        <th>Starting Date</th>
        <th>Remaining Date</th>
        <th>
        <select name="teacher" id="teacher" >
            <option value="teacher" >Teacher</option>
            <option value="han">Han</option>
            <option value="kim">Kim</option>
        </select>
        </th>
        <th className="th-right">Action</th>
    </tr>
</thead>
<tbody  id="user-table-over-date">
</tbody>
<tbody  id="user-table-less-seven">
</tbody>
<tbody  id="user-table">
</tbody>
        
    </table> 
    
    
</div>
</main>
    </>
  )
}
