import "./banner.css"
import styled, { css } from 'styled-components'
import {useState} from "react";
const Banner = () => {
    const mockData = ['React', 'Node', 'Mantine', 'Backend', 'Yazılım'];
    const [inputValue, setInputValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleSearch = () => {
        const results = mockData.filter(word => word.toLowerCase().includes(inputValue.toLowerCase()));
        setSearchResults(results);
    };


    return(
       <div className={"new_index"}>
            <TitleBanner className={"title"}>
                <div>
                    Hoş Geldiniz.
                </div>
                <div>
                    Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.
                </div>
                <BannerSearch className={"banner-search"}>
                    <input type="text" value={inputValue} onChange={handleInputChange} />
                    <button onClick={handleSearch}>Ara</button>
                </BannerSearch>
                <ul>
                    {searchResults.map((result, index) => (
                        <li key={index}>{result}</li>
                    ))}
                </ul>
            </TitleBanner>
       </div>
    )
}

const BannerSearch = styled.div`
    margin-top:50px;
  
    & input{
      width: 100%;
      height: 46px;
      line-height: 46px;
      font-size: 1.1em;
      color: rgba(0,0,0,.5);
      border: 0;
      border-radius: 30px;
      padding: 10px 20px;
    }
  
  
  & :focus-visible {
    outline: none;
  }

`

const TitleBanner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  color: #ffffff;
  padding: 0 60px;
  
  &>div:first-child {
    font-size: 3em;
    font-weight: 700;
    line-height: 1;
  }

  &>div:nth-child(2) {
    font-size: 2em;
    font-weight: 600;
    margin: 0;
  }
`


export default Banner