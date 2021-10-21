import { func } from 'prop-types';
import React, { MouseEventHandler, useState } from 'react';
import styled from 'styled-components';
import { Minting } from '../../common/resource';

export default function CardList(props: any) {
    const { coso } = props;
    const [nearAmount, setNearAmount] = useState(500)
    const [nearStaked, setNearStaked] = useState(0)
    const [handleAmount, sethandleAmount] = useState(0)
    function handlePutClick(evt: any) {
        if (nearAmount > 0 && nearAmount >= handleAmount) {
            setNearAmount(nearAmount - handleAmount);
            setNearStaked(nearStaked + handleAmount);

            const input = document.getElementById('input-Amount');
            if (input) {
                input.innerText = '';
                input.innerHTML = '';
            }
        }
    }
    function handleRemoveClick(evt: any) {
        if (nearStaked > 0 && nearStaked >= handleAmount) {
            setNearAmount(nearAmount + handleAmount);
            setNearStaked(nearStaked - handleAmount);

            const input = document.getElementById('input-Amount');
            if (input) {
                input.innerText = '';
                input.innerHTML = '';
            }
        }
    }

    return (
        <>
            <Wrapper>
                <div>
                    <label>
                        Coso:
                    </label>
                    <input id="input-Amount" type="text" pattern="[0-9]*" value={handleAmount} onChange={(evt) => { sethandleAmount(Number(evt.currentTarget.value)) }} />
                </div>
                <div className='btn-row'>
                    <button type="submit" className='btn btn-success' onClick={handlePutClick}>Put near</button>
                    <button type="submit" className='btn btn-second' onClick={handleRemoveClick}>Remove near</button>
                </div>
                <tr className="border">
                    <td>
                        <>{Minting.CardList.PropUno}</>
                    </td>
                    <td>
                        <>{nearAmount}</>
                    </td>
                </tr>
                <tr>
                    <td>
                        <>{Minting.CardList.PropDos}</>
                    </td>
                    <td>
                        <>{nearStaked}</>
                    </td>
                </tr>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.table`
    margin: 150px auto;
    border: solid 3px;
    border-radius: 10px;
    .btn-max{
            margin-left: 10px;
        }
    

    .btn-row{
        margin-top: 5%;
        margin-left: 25%;
        .btn-second{
            margin-left: 10px;
        }
        button{
            padding: 1px;
        }
    }

    tr{
        background-color: white;
        text-align: left;
    }
    tr.border td{
        border-bottom: 2px dotted #ff000d;

    }
    td{
        padding: 20px;
    }
`
