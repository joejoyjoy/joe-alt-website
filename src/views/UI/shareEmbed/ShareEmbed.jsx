import useWindowSizeReport from '@/hooks/useWindowSizeReport'
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
    <a href={'https://' + url + '/?lang=en'} target="_blank" className="share-desktop-embed">
      <img src={image} alt={title} />
      <span className="share-desktop-embed__text">
        <h5>{title}</h5>
        <p>{desc}</p>
        <span>www.{url}</span>
      </span>
    </a>
  )
}

const MobileShareEmbed = ({ website }) => {
  const { title, desc, image, url } = website[0];

  return (
    <a href={'https://' + url + '/?lang=en'} target="_blank" className="share-mobile-embed">
      <img src={image} alt={title} />
      <span className="share-mobile-embed__text">
        <h5>{title}</h5>
        <p>{desc}</p>
        <span>www.{url}</span>
      </span>
    </a>
  )
}