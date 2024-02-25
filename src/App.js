import Pages from "./pages/Pages";
import Category from "./components/Category";
import {Link, BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { GiBurningBook } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <br/>

      <div className="main-nav w-100 p-lg-4 p-md-2 p-sm-0 pt-2">
        <div className="row">
          <div className="col-lg-8">
            <GiBurningBook className="display-3 mb-4 mx-2" align="center" />
            <Logo to={'/'}>foodfolio</Logo>
          </div>

          <div className="col-lg-4">
            <Search />
          </div>
        </div>

      <div className="container-fluid mt-4" align="center">
        <Category />
      </div>
      <br/>

      <Pages />
      </div>
      </BrowserRouter>
      <br/><br/>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: 400;
  font-family: 'Kdam Thmor Pro';
`;

export default App;
