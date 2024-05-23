import { SingleCarousel } from '../assets/SingleCarousel'
import data from '../data.json'

export const Certificates = () => {
    return (
        <div id="content" className="w-[80%]">
            <SingleCarousel certificates={data.certificates} />
        </div>
    )
}
