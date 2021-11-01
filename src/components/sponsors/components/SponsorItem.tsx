import styled from 'styled-components';

const SponsorItem = (props: Record<string, any>) => {
    return(
        <div>
            <SponsorStyle src={props.src} alt={props.alt} />
        </div>
    );
}

const SponsorStyle = styled.img`
    width: 30px;
    height: 30px;
    margin: 15px;
`

export default SponsorItem;