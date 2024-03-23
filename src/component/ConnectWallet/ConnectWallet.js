import React from 'react'
import style from './ConnectWallet.module.css'
function ConnectWallet() {
  return (
<div id="id01" className={style.modal}>
  
  <form className={style.modalcontent } action="/action_page.php" method="post">
    <div className={style.imgcontainer}>
      <span onclick="document.getElementById('id01').style.display='none'" className="close" title="Close Modal">&times;</span>
      <img src="img_avatar2.png" alt="Avatar" className="avatar"/>
    </div>

    <div className={style.container}>
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required/>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required/>
        
      <button type="submit">Login</button>
      <label>
        <input type="checkbox" checked="checked" name="remember"/> Remember me
      </label>
    </div>

    <div className="container" >
      <button type="button" onclick="document.getElementById('id01').style.display='none'" className="cancelbtn">Cancel</button>
      <span className="psw">Forgot <a href="#">password?</a></span>
    </div>
  </form>
  </div>
  )
}

export default ConnectWallet