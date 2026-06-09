import React from 'react'
import '../style/footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='site-footer'>
      <div className='footer-content'>
        <h2>App</h2>
        <p>Building clean and modern web experiences with MERN.</p>
      </div>
      <p className='footer-copy'>Copyright {year} App. All rights reserved.</p>
    </footer>
  )
}
