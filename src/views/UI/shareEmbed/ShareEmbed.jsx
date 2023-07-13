import useWindowSizeReport from '@/hooks/useWindowSizeReport'
import Preview from '@/assets/IMG/preview.jpg'
import './shareEmbed.scss'

export default function ShareEmbed({ website }) {
  const screenWidth = useWindowSizeReport();

  return (
    <>
      {(screenWidth > 500) ? (
        <DesktopShareEmbed website={website} />
      ) : (
        <MobileShareEmbed website={website} />
      )}
    </>
  )
}

const DesktopShareEmbed = ({ website }) => {
  const { title, desc, image, url } = website[0];

  return (
    <a href={'https://' + url} target="_blank" className="share-desktop-embed">
      <img src={Preview} alt="Nice" />
      <span className="share-desktop-embed__text">
        <h5>Website title Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente mollitia ullam, corporis, vitae nisi saepe optio, earum natus eligendi sequi adipisci aliquid totam. Fugit ut voluptatum soluta quas temporibus aut?</h5>
        <p>Whtih this wisdite yout can create and fillfil allthe dhfs Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi deleniti suscipit qui ea fugit, in doloribus, reprehenderit iste</p>
        <span href={'https://' + url}>www.{url}</span>
      </span>
    </a>
  )
}

const MobileShareEmbed = ({ website }) => {
  const { title, desc, image, url } = website[0];

  return (
    <a href={'https://' + url} target="_blank" className="share-mobile-embed">
      <img src={Preview} alt="Nice" />
      <span className="share-mobile-embed__text">
        <h5>Website title Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente mollitia ullam, corporis, vitae nisi saepe optio, earum natus eligendi sequi adipisci aliquid totam. Fugit ut voluptatum soluta quas temporibus aut?</h5>
        <p>Whtih this wisdite yout can create and fillfil allthe dhfs Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi deleniti suscipit qui ea fugit, in doloribus, reprehenderit iste</p>
        <span href={'https://' + url}>www.{url}</span>
      </span>
    </a>
  )
}