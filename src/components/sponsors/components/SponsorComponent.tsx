import { Sponsors } from '../../../common/resource';
import SponsorItem from "./SponsorItem";

const SponsorComponent = (props: Record<string, any>) => {
    return (
        <div>
            {Sponsors.sponsors.map(sponsor => (
                <SponsorItem src={sponsor.src} alt='logo.png'/>
            ))}
        </div>
    )
}

export default SponsorComponent;