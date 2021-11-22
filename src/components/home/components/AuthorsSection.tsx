import "../assets/common.css";
import styled from 'styled-components';
import { Authors } from '../../../common/resource';

import Author from "./Author";

const AuthorsSection = (props: Record<string, any>) => {
        return (
            <div>
                <div>
                    <div className="flex-row">
                        {Authors.basicData.map(author => (
                            <Author name={author.Name} text={author.Description} src={author.src}/>
                        ))}
                    </div>
                </div>
            </div>
        );
};

export default AuthorsSection;