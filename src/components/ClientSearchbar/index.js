import React from 'react';

import { ClientSearchbarStyled } from './styles';

export default function ClientSearchbar() {
    return (
        <>
            <ClientSearchbarStyled>
                <div className="input-group">
                <input type="text" placeholder="  Search client " className="search-text" />
                <span className="input-group-append">
                    <button type="button" className="search-button"> Search</button>
                </span>
                </div>
            </ClientSearchbarStyled>
        </>
    )
}