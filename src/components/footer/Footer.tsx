import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
  const { usuario, handleLogout } = useContext(AuthContext)

  let footerComponent

  let data = new Date().getFullYear()

  if (usuario.token !== '') {
    footerComponent = (
      <>
        <div className="flex justify-center bg-indigo-900 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Blog pessoal | Copyright: Richardson Furlan </p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
              <a href="https://www.linkedin.com/in/richardsonfurlan/" target='_blank'><LinkedinLogo size={48} weight='bold' /></a>
              <a href="https://www.instagram.com/rickcolodedeus/" target='_blank'><InstagramLogo size={48} weight='bold' /></a>
              <a href="https://web.facebook.com/richardson.furlan" target='_blank'><FacebookLogo size={48} weight='bold' /></a>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {footerComponent}
    </>
  )
}

export default Footer