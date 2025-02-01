import { useLocation } from 'react-router-dom'

export const useCommon = () => {

    const location = useLocation()
    const currentLocation = location.pathname.split("/")[2]
    const isCurrentLocation = (path)=>{
      return location.pathname.includes(path)
    }

    const isCurrent = (path)=>{
      return location.pathname === path
    }

  return {
    isCurrent,
    currentLocation,
    isCurrentLocation,
  }
}
