import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

const Container = styled.span`
    color: #feda4a;
`;

const StarScore = ({ score }) => {
    if(score < 1) {
        return (
            <Container>
                <FontAwesomeIcon icon={faStarHalf} />
            </Container>
        )
    } else if(score < 2) {
        return (
            <Container>
                <FontAwesomeIcon icon={faStar} />
            </Container>
        )
    } else if(score < 3) {
        return (
            <Container>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalf} />
            </Container>
        )
    } else if(score < 4) {
        return (
            <Container>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </Container>
        )
    } else if(score < 5) {
        return (
            <Container>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalf} />
            </Container>
        )
    } else if(score < 6) {
        return (
            <Container>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </Container>
        )
    } else if(score < 7) {
        return (
            <Container>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalf} />
            </Container>
        )
    } else if(score < 8) {
        return (
            <Container>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </Container>
        )
    } else if(score < 9) {
        return (
            <Container>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalf} />
            </Container>
        )
    } else {
        return (
            <Container>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </Container>
        )
    }
}

export default StarScore;


