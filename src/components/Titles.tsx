import { useEffect } from 'react'

export function MainPageTitle() {
  return (
    <>
      {useEffect(() => {
          document.title = 'TRFM-Main'
      })}
    </>
  );
}

export default MainPageTitle