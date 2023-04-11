import { useEffect } from 'react'

export default function usePageTitle(title: string) {
    const BASE_TITLE = 'Match Point'

    useEffect(() => {
        document.title =`${BASE_TITLE} ${title && `- ${title}`}`;
    }, [])
}