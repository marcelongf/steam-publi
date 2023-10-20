import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import './index.css'

export default function Google() {
  const navigate = useNavigate();

  useEffect(() => {
    const input = document.getElementById('input-google');
    input.addEventListener('keyup', (e) => {
      e.preventDefault();
      if(e.keyCode === 13){
        navigate('/steam')
      }
    })
  }, [navigate])

  return (
    <div className='google-container'>
      <img className='google-logo' src="/google-logo.png" />
      <input className='input-text' id='input-google' />
    </div>
  )
}