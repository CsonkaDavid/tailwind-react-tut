import { useEffect } from 'react'

export function TitleComponent({ title }: { title: string }) {
  return (
    <>
      {useEffect(() => {
        document.title = title
      })}
    </>
  );
}