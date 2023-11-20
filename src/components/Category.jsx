import { FaPizzaSlice, FaHamburger, } from 'react-icons/fa';
import { GiNoodles, GiDumplingBao, GiCabbage, GiTacos, GiChickenLeg } from 'react-icons/gi';
import {BiSushi} from 'react-icons/bi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Category() {
  return (
    <div class="container">
      <SLink to={'/cuisine/Italian'} class="btn btn-primary btn-category justify-content-center align-items-center">
        <div class="w-100 h-100 d-flex justify-content-center align-items-center">
          <div class="d-block" align="center">
            <FaPizzaSlice />
            <h4>Italian</h4>
          </div>
        </div>
      </SLink>

      <SLink to={'/cuisine/American'} class="btn btn-primary btn-category justify-content-center align-items-center">
        <div class="w-100 h-100 d-flex justify-content-center align-items-center">
          <div class="d-block" align="center">
            <FaHamburger />
            <h4>American</h4>
          </div>
        </div>
      </SLink>

      <SLink to={'/cuisine/Thai'} class="btn btn-primary btn-category justify-content-center align-items-center">
        <div class="w-100 h-100 d-flex justify-content-center align-items-center">
          <div class="d-block" align="center">
            <GiDumplingBao />
            <h4>Thai</h4>
          </div>
        </div>
      </SLink>

      <SLink to={'/cuisine/Japanese'} class="btn btn-primary btn-category justify-content-center align-items-center">
        <div class="w-100 h-100 d-flex justify-content-center align-items-center">
          <div class="d-block" align="center">
            <BiSushi />
            <h4>Japanese</h4>
          </div>
        </div>
      </SLink>

      <SLink to={'/cuisine/Chinese'} class="btn btn-primary btn-category justify-content-center align-items-center">
        <div class="w-100 h-100 d-flex justify-content-center align-items-center">
          <div class="d-block" align="center">
            <GiNoodles />
            <h4>Chinese</h4>
          </div>
        </div>
      </SLink>

      <SLink to={'/cuisine/Korean'} class="btn btn-primary btn-category justify-content-center align-items-center">
        <div class="w-100 h-100 d-flex justify-content-center align-items-center">
          <div class="d-block" align="center">
            <GiCabbage />
            <h4>Korean</h4>
          </div>
        </div>
      </SLink>

      <SLink to={'/cuisine/Mexican'} class="btn btn-primary btn-category justify-content-center align-items-center">
        <div class="w-100 h-100 d-flex justify-content-center align-items-center">
          <div class="d-block" align="center">
            <GiTacos />
            <h4>Mexican</h4>
          </div>
        </div>
      </SLink>

      <SLink to={'/cuisine/Indian'} class="btn btn-primary btn-category justify-content-center align-items-center">
        <div class="w-100 h-100 d-flex justify-content-center align-items-center">
          <div class="d-block" align="center">
           <GiChickenLeg />
           <h4>Indian</h4>
           </div>
        </div>
      </SLink>
    </div>
  )
}

const SLink = styled(NavLink)`
  display: inline-block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 7rem;
  height: 7rem;
  cursor: pointer;
  transform: scale(0.8);

  h4{
    color: white;
    font-size: 0.8rem;    
  }
  svg{
    color: white;
    font-size: 2.5rem;
  }
  &.active{
    background: linear-gradient(to right, #f27121, #e94057);
    svg{
      color: white;
    }
    h4{
      color: white;
    }
  }
`;

export default Category