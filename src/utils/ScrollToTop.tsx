import { useEffect, useState } from 'react'

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    const handleScroll = () => {
        setIsVisible(window.scrollY > 400)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        window.location.hash = ''
    }

    const scrollButtonClasses =
        'fixed bottom-8 right-8 hover:bg-teal-400/10 shadow rounded-full bg-slate-700 text-white font-bold py-0 px-4 lg:px-6 lg:py-2 md:px-6 md:py-2  hover:opacity-75'
    const scrollButtonIconClasses =
        'h-14 w-6 lg:h-12 md:h-12 transition-duration-300 hover:h-7 hover:teal-400 svg:hover:text-teal-400'

    return (
        isVisible && (
            <button onClick={scrollToTop} className={scrollButtonClasses}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="scroll-to-top-svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    className={scrollButtonIconClasses}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7m0 0l7 7m-7-7v18"
                    />
                </svg>
            </button>
        )
    )
}
