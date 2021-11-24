import styled from 'styled-components';

const SponsorItem = (props: Record<string, any>) => {
    return(
        <div>
            <a href={props.sponsor.href} target='_blank' rel="noreferrer">
                <SponsorStyle src={props.sponsor.src} alt={props.sponsor.alt}/>
            </a>
        </div>
    );
}

const SponsorStyle = styled.img`
    width: 100px;
    height: 100px;
    margin: 15px;
`

export default SponsorItem;