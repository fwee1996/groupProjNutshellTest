import "./User.css"
export const User = ({ user })=>{
    return (<div className="user">
        <div>
            <div className="user-info">Name</div>
            <div>{user.fullName}</div> {/*customerObj changed to user but that means export line must have a prop to user {user}*/}
        </div>
        <div>
            <div className="user-info">Email</div>
            <div>{user.email}</div>
          </div>
        </div>)
}