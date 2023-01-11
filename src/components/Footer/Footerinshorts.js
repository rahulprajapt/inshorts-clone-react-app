import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
     <span className='name'>
      inshorts clone made by -Rahul Prajapat
      <a href='https://www.linkedin.com/feed/' target="_blank">
         
      </a>
     </span>
     <hr style={{width:"90%"}}/>
     <div className='iconContainer'>
      <a href='https://www.instagram.com/accounts/login/'>
        <InstagramIcon />
      </a>
      <a href='https://www.instagram.com/accounts/login/'>
        <InstagramIcon />
      </a>
      <a href='https://www.instagram.com/accounts/login/'>
        <InstagramIcon />
      </a>
     </div>
    </div>
  )
}

export default Footer;