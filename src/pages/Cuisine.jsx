import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'

function Cuisine() {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const changeBg = (name) => {
        document.body.style.backgroundImage = "url('/assets/" + name + ".png')";
    };

    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
        const recipes = await data.json();

        changeBg(name);
        setCuisine(recipes.results);
    };

    useEffect(() => {
        getCuisine(params.type)
        console.log(params.type);
    }, [params.type]);
    return (
        <Grid
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {cuisine.map((item) => {
                return (
                    <Card key={item.id}>
                        <Link to={'/recipe/' + item.id}>
                            <img src={item.image} alt='' />
                            <h4>{item.title}</h4>
                        </Link>
                    </Card>
                )
            })}
        </Grid>
    )
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, min-max(20rem, 1fr));
    grid-template-rows: 1fr 1fr 1fr; 
    gap: 3rem;
`;

const Card = styled.div`
    img{
        display: block;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
        border-radius: 2rem;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }
`;

export default Cuisine
