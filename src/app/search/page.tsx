// app/search/page.tsx
'use client'

import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import SearchResultPage from '@/page/search-resultt-page'
import Loading from '@/component/Loading'

// Bọc phần tử cần sử dụng useSearchParams() bằng Suspense
export default function SearchPage() {
  return (
    <Suspense fallback={<Loading/>}>
      <SearchPageContent />
    </Suspense>
  )
}

function SearchPageContent() {
  const searchParams = useSearchParams()
  const query = searchParams?.get('q')?.trim()

  if (!query) {
    notFound() 
  }

  return <SearchResultPage title={query} />
}
