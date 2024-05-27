import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import './RotateingText.css'

export const JobTitleAnimatedText = () => {
    useEffect(() => {
        const words = document.querySelectorAll('.word') as NodeListOf<HTMLElement>
        words.forEach((word) => {
            const letters = word.textContent!.split('')
            word.textContent = ''
            letters.forEach((letter) => {
                const span = document.createElement('span')
                span.textContent = letter
                span.className = 'letter'
                word.append(span)
            })
        })

        let currentWordIndex = 0
        const maxWordIndex = words.length - 1
        words[currentWordIndex].style.opacity = '1'

        const rotateText = () => {
            const currentWord = words[currentWordIndex]
            const nextWord =
                currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1]

            Array.from(currentWord.children).forEach((letter, i) => {
                setTimeout(() => {
                    letter.className = 'letter out'
                }, i * 80)
            })

            nextWord.style.opacity = '1'
            Array.from(nextWord.children).forEach((letter, i) => {
                letter.className = 'letter behind'
                setTimeout(() => {
                    letter.className = 'letter in'
                }, 340 + i * 80)
            })

            currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1
        }

        rotateText()
        const interval = setInterval(rotateText, 4000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <Link to="/">Daniel Batanov </Link>
            </h1>
            <div className="rotating-text ml-20 mt-3 inline-flex gap-[136px]">
                <p>
                    <span className="word text-yellow-300">JavaScript</span>
                    <span className="word text-sky-500 ">TypeScript</span>
                    <span className="word text-purple-500">ReactJS</span>
                    <span className="word text-green-400">Front-end</span>
                </p>
                <p>Developer</p>
            </div>
            <p className="mt-4 max-w-xs leading-normal">
                I build responsive animated products and digital experiences for the web.
            </p>
        </div>
    )
}
