import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {

    const [Input, setInput] = useState("");
    const Navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        Navigate('/searched/' + Input);
    };

    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch></FaSearch>
                <input onChange={(e) => setInput(e.target.value)}
                    type="text"
                    value={Input}
                    class="w-100"
                />
            </div>
        </FormStyle>
    )
}

const FormStyle = styled.form`
    div{
        position: relative;
    }
    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 1rem;
        padding-left: 1.75em;
        border-radius: 1rem;
        outline: none;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`;

export default Search
