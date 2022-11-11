import { useEffect } from 'react'

export function TitleInjector({ title }: { title: string }) {
  return (
    <>
      {useEffect(() => {
        document.title = title
      })}
    </>
  );
}