import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

export default function PortfolioLightbox({ open, onClose, index, slides }) {
  return (
    <Lightbox
      open={open}
      close={onClose}
      index={index}
      slides={slides}
      styles={{
        container: { backgroundColor: 'rgba(136, 19, 55, 0.92)' },
      }}
    />
  )
}
