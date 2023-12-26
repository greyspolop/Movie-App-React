'use client';
import React from 'react';
import { ContainerCard, ImageIcons, ShowTrailerContent } from './ImagesIconsStyles';
import { URL_ICON_FAVORITE, URL_ICON_SAVED, URL_ICON_SHARE } from './ConstUrlIcons';


//componente conos para card de busqueda de peliculas
const ImagesIcons = () => {

    let TEXT_LABEL = "WATCH TRAILER"

    return (

        <ContainerCard>
            < ShowTrailerContent>
                {TEXT_LABEL}
            </ShowTrailerContent>

            <ImageIcons src={`${URL_ICON_SAVED}`} alt=""></ImageIcons>
            <ImageIcons src={`${URL_ICON_FAVORITE}`} alt=""></ImageIcons>
            <ImageIcons src={`${URL_ICON_SHARE}`} alt=""></ImageIcons>

        </ContainerCard>
    );
};

export default ImagesIcons;
