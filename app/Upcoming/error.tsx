'use client'

import ErrorPage from "@/Lib/Global Components/ErrorPage";
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    
    console.error(error)
  }, [error])
 
  return (
    <>
      <ErrorPage/>
    </>
  );
}
