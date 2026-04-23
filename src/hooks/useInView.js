import { useInView as useInViewRIO } from 'react-intersection-observer'

export default function useInView(options = {}) {
  return useInViewRIO({ triggerOnce: true, threshold: 0.12, ...options })
}
