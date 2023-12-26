
import styled from 'styled-components';
export const ImageDetails = styled.img`
width: 100%;
display:flex;
opacity: 0.5;
height:371px;
opacity: 0.5; 

`;

export const ImageIcon = styled.img`
width: 26px;
margin-right: 11px;
`;

export const ImageIconStar = styled.img`
width: 15%;
height: 76px;


`;

export const ImagePoster = styled.img`
width: 41%;
height: 97%;


`;

export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: flex-start;
flex-direction: column;
align-items: center;

`;

export const Descriptiontext = styled.div`
background: #262626;
color: white;
padding: 20px 20px 20px 60px;
font-size: 16px;
text-align: start;
width: 65%;
height: auto;
`;

export const ImgAndText = styled.div`
background:#262626;
color:white;
font-size:16px;
height:auto;
display: flex;
justify-content: center;
flex-direction: column;
align-items: flex-end;
padding-right: 36px;

`;
export const TextTitle = styled.div`
color: white;
text-align: start;
width: 100%;
font-size: 40px;

`
    ;

export const TextSubTitle = styled.div`
color: white;
width: 100%;
font-size: 20px;
text-align: start;
margin-top: 5px;

`
    ;

export const PosterContent = styled.div`
height: 276px;
width:70%;
color: white;
display: flex;
justify-content: center;
flex-direction: column;
align-items: flex-start;
z-index:1;
position:absolute;
top:30%;
left: 8%;

`
    ;


export const PosterTexts = styled.div`
height: 320px;
color: white;
display: flex;
justify-content: center;
flex-direction: column;
align-items: flex-start;
z-index:2;
position:absolute;
top:12%;
left: 40%;

`
    ;
export const TxtTypeMovie = styled.div`
color: gray;
padding: 5px 5px;
font-size: 12px;
height: 31px;
background-color:white;
border: none;
border-radius: 30px;
display: flex;
justify-content: center;
flex-direction: column;
column-count: 2;
z-index: 1;
margin-top:20px;
margin-right: 6px;

`;

export const OrderTxtTypeMovie = styled.div`

display: flex;
justify-content: center;
flex-direction: row;
column-count: 2;
z-index: 1;


`;


export const Containertext = styled.div`

display:flex;
flex-direction: row;
align-items: center;
margin-right:20px;
justify-content: space-between;
  
`;

export const IconText = styled.div`

display:flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
cursor:pointer;
`;
export const ButtonStyle = styled.button`
padding: 10px 20px;
font-size: 16px;
background-color:#f93f3f;
color: white;
border: none;
border-radius: 13px;
cursor: pointer;
transition: background-color 0.3s ease;

&:hover {
  background-color:#f48686;
}

`;
export const AlingContentFavorite = styled.div`
width:60%;
display:flex;
flex-direction: row;
justify-content: space-between;
margin-bottom:20px;
`;