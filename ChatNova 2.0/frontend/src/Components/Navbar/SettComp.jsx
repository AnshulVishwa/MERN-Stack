import React from 'react'
import './SettComp.css'
import user from '../../assets/user.png'
import notification from '../../assets/notification.png'
import privacySecurity from '../../assets/privacy-Security.png'
import chatThemes from '../../assets/chats-themes.png'
import backup from '../../assets/backup.png'
import storage from '../../assets/storage.png'
import aboutus from '../../assets/about-us.png'
function SettComp({show , setShow}) {
  return (
    <div className={`setting-bar ${ show ? "show-setting" : "hide-setting" }`}>
      <section className="section1-setting flex">
        {/* heading */}
        <div className="heading flex">
          <p className='set-bars-icon'><i class="fa-solid fa-bars"></i></p>
          <h1>Settings</h1>
        </div>

        {/* content  */}
        <div className="setContent flex">

          {/* profile in content */}
          <div className="set-profile-con set-content-position flex">
            {/* icon div in profile */}
            <div className="set-user setting-icon-div flex">
              <img src={user} className='set-user-icon'/>
            </div>
            <span>Profile</span>
          </div>

          {/* notification in content */}
          <div className="set-notify-con set-content-position flex">

            {/* icon div in notification */}
            <div className="set-noti setting-icon-div flex">
              <img src={notification} className='set-notification-icon'/>

            </div>
            <span>Notification</span>
          </div>

          {/* Privacy and security in content */}
          <div className="set-privacy-con set-content-position flex">

            {/* icon div in Privacy and security */}
            <div className="set-secure setting-icon-div flex">
              <img src={privacySecurity} className='set-privacySecurity-icon'/>

            </div>
            <span>Privacy and Security</span>
          </div>

          {/* chats and themes in content */}
          <div className="set-chatandtheme-con set-content-position flex">

            {/* icon div in chats and themes */}
            <div className="set-theme setting-icon-div flex">
              <img src={chatThemes} className='set-chatThemes-icon'/>

            </div>
            <span>Chats and Themes</span>
          </div>

          {/* backup in content */}
          <div className="set-backup-con set-content-position flex">

            {/* icon div in backup */}
            <div className="set-backup setting-icon-div flex">
              <img src={backup} className='set-backup-icon'/>

            </div>
            <span>Backup</span>
          </div>

          {/* storage in content */}
          <div className="set-storage-con set-content-position flex">

            {/* icon div in storage */}
            <div className="set-storage setting-icon-div flex">
              <img src={storage} className='set-storage-icon'/>

            </div>
            <span>storage</span>
          </div>

          {/* about us in content */}
          <div className="set-about-con set-content-position flex">

            {/* icobn div in about us */}
            <div className="set-aboutus setting-icon-div flex">
              <img src={aboutus} className='set-aboutus-icon'/>
            
            </div> 
            <span>About us</span>
          </div>
        </div>

      </section>



      <section className="section2-setting flex">
        <div  className="back-setting flex" onClick={() => setShow(false)}>
          <i className='fa-solid fa-chevron-right'></i>
        </div>
      </section>
      
    </div>
  )
}

export default SettComp
