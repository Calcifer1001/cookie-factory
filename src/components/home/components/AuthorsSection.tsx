import "../assets/common.css";
import styled from 'styled-components';
import { Authors } from '../../../common/resource';

import Author from "./Author";

const AuthorsSection = (props: Record<string, any>) => {
        return (
            <div className="max-width">
                    <div className="flex-row grid-authors">
                        {Authors.basicData.map(author => (
                            <Author name={author.Name} text={author.Description} src={author.src}/>
                        ))}
                    </div>
            </div>
        );
};

export default AuthorsSection;