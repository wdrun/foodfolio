import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";


function Recipe() {
  let params = useParams();
  const [Details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const detailData = await data.json();
    setDetails(detailData);
    console.log(data);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <div align="center">
      <div class="card card-body border border-2 rounded border-primary mb-4 p-4 col-lg-9" align="left">
        <div class="container-fluid" align="center">
          <img src={Details.image} class="rounded" />
          <h2>{Details.title}</h2>
          <hr/>
        </div>

        <div class="row">
          <div class="col-6">
            <Button className={activeTab === 'instructions' ? 'active-tab' : ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
          </div>          

          <div class="col-6">
            <Button className={activeTab === 'ingredients' ? 'active-tab' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
          </div>          
        </div>

        {activeTab === 'instructions' && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: Details.summary }}></p>
            <p dangerouslySetInnerHTML={{ __html: Details.instructions }}></p>
          </div>
        )}
        {activeTab === 'ingredients' && (
          <ul> {Details.extendedIngredients.map((ingredient) =>
            <li key={ingredient.id}>{ingredient.original}</li>)}
          </ul>
        )}
    </div>
    </div>
  )
}

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  width: 100%;
`;

export default Recipe
