import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import noPoster from "Assets/noPosterSmall.png";
import Helmet from "react-helmet";
import StarScore from "Components/StarScore";
import ImbdLogo from "../../Assets/imbd.png";


const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    padding: 50px;
`;

const Backdrop =styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    filter: blur(2px);
    opacity: 0.5;
    z-index: 0;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
`;

const Cover = styled.div`
    width: 30%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    border-radius: 5px;
`;

const Data = styled.div`
    width: 65%;
    margin-left: 30px
`;

const Title = styled.h3`
    font-size: 32px;
`;

const ItemContainer =styled.div`
    margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
    margin: 0 10px;
`;

const Overview = styled.p`
    font-size: 16px;
    opacity: 0.7;
    line-height: 1.5;
    width: 70%;
`;

const Video = styled.iframe`
    width: 825px;
    height: 500px;
`;

const Imbd = styled.a`
    display: inline-block;
    height: 21px;
    width: 42px;
    background: url(${ImbdLogo});
    background-size: cover;
    border-radius: 4px;
    background-position: center center;
    vertical-align: -4px;
`;


const DetailPresenter = ({ result, loading, error }) => 
    loading ? ( 
        <>
            <Helmet>
                <title>Loading | MoviePlanet</title>
            </Helmet>
            <Loader />
        </> ) : (
        <Container>
            <Helmet>
                <title>{result.original_title ? result.original_title : result.original_name} | MoviePlanet</title>
            </Helmet>
            <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
            <Content>
                <Cover bgImage={result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : noPoster}/>
                <Data>
                    <Title>{result.original_title ? result.original_title : result.original_name}</Title>
                    <ItemContainer>
                        <Item>{result.release_date ? result.release_date.substring(0, 4) : result.first_air_date.substring(0, 4)}</Item>
                        <Divider>&#07;</Divider>
                        <Item>{result.runtime ? result.runtime : result.episode_run_time } min</Item>
                        <Divider>&#07;</Divider>
                        <Item>{result.genres && 
                            result.genres.map((genre, index) => index === result.genres.length - 1 ? genre.name : `${genre.name} / `)} 
                        </Item>
                        <Divider>&#07;</Divider>
                        <StarScore score={result.vote_average} /> 
                        {result.original_title ? (
                            <><Divider>&#07;</Divider> 
                            <Imbd href={`https://www.imdb.com/title/${result.imdb_id}`} target={"_blank"}/></>) : 
                            (<></>)}
                    </ItemContainer>
                    <Overview>{result.overview}</Overview>
                    <ItemContainer>
                        {result.videos.results[0] === undefined ? (<></>) :(
                        <Video src={`https://www.youtube.com/embed/${result.videos.results[0].key}`} ></Video>)  }   
                    </ItemContainer>
                </Data>
            </Content>
        </Container>
    );


DetailPresenter.propTypes = {
    result: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
};

export default DetailPresenter;