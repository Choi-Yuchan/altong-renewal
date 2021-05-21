import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const langNaviItem = {
    ko:{
        placeholder: "닉네임을 입력해주세요",
        alt: "검색 아이콘",
    }
}
const NaviAClick = (e, href) => {
    if( href === "" ){
        e.preventDefault();
    }
}

const eventHandler = e => {
    e.preventDefault();
    e.stopPropagation();
}
//click, key properties는 필요할 때 받아오도록 입력해야함.
function NaviItem({img, href, val, count, i, mini, bar, sound}) {
    const placeholder = langNaviItem.ko.placeholder;
    const altText = langNaviItem.ko.alt;

    const [showPlus, setShowPlus] = useState("0deg");
    const [toggle, setToggle] = useState(false);
    const [keyToggle, setKeyToggle] = useState(false);
    const [searchID, setSearchID] = useState("");
    const [disabled, setDisabled] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchID(value);
    };

    const handleSubmit = async (e) => {
        setDisabled(true);
        e.preventDefault();
        await new Promise((r) => setTimeout(r, 1000));
        //Backend에서 user page에 대한 정보를 받아와서 href에 넣어주면 됨.
        if(searchID){
            window.location.href="/";
        }

        setDisabled(false);
    };

    // async
    const URL_NAVI_TEXT = '';
    const [naviText, setNaviText] = useState(null);

    useEffect(() => {
        const fetchText = async () => {
            try{
                setNaviText(null);

                const response = await axios.get(URL_NAVI_TEXT);
                setNaviText(response.data);
            } catch(err) {
                console.log(err);
            }
        };

        fetchText();
    },[])

    if(mini != null){
        return (
            <NaviItemLiMiniLi showPlus={showPlus === "0deg"} onClick={() =>{
            setShowPlus(showPlus == "0deg" ? "90deg" : "0deg" );
             }}>
                <NaviAMini showPlus={showPlus} href={href} onClick={(e)=>{
                    NaviAClick(e, href);
                }}>
                    <NaviB img={img}></NaviB>
                    <span>{val}</span>
                    <NaviAlramI show={i===true}>{i===true?count:""}</NaviAlramI>
                </NaviAMini>
                <ul>
                    {mini["ko"].map((list)=>{
                    return (
                    <MiniLi key={list.id}>
                        <MiniLiA href={list.href}>· {list.val}</MiniLiA>
                    </MiniLi>)
                    })}
                </ul>
            </NaviItemLiMiniLi>
        );
    }
    if(bar){
        return(
        <SearchName showInput={toggle} onClick={() => {setToggle(!toggle)}}>
            <NaviSearch>
                <NaviS img={img}></NaviS>
                <span>{val}</span>
            </NaviSearch>
            <SearchForm showInput={toggle} onClick={()=>{setToggle(!toggle)}} onSubmit={handleSubmit}>
                <SearchInput type="text" placeholder={placeholder} onClick={eventHandler} value={searchID} onChange={handleChange}/>
                <SearchBtn type="submit" disabled={disabled}>
                    <SearchIco src="/Common/images/icon_search.png" alt={altText}></SearchIco>
                </SearchBtn>
            </SearchForm>
        </SearchName>
        );
    }
    if(sound){
        return(
            // Key sound On/Off 기능 추가 예정
            <NaviItemLi>
                <NaviA onClick = {() => {setKeyToggle(!keyToggle)}}>
                    <IconBox>
                        <NaviKey img={img}></NaviKey>
                        {keyToggle ? 
                        <KeySoundOn></KeySoundOn>
                        : <KeySoundOff></KeySoundOff>}
                    </IconBox>
                    {keyToggle ? 
                    <span>{sound}</span> 
                    : <span>{val}</span>
                    }
                </NaviA>
            </NaviItemLi>
        )
    }
    return (
        <NaviItemLi>
            <NaviA href={href} onClick={(e)=>{
                NaviAClick(e, href);
            }}>
                <NaviB img={img}></NaviB>
                <span>{val}</span>
                <NaviAlramI show={i===true}>{i===true?count:""}</NaviAlramI>
            </NaviA>
        </NaviItemLi>
    );
  }
  
export default NaviItem;

const NaviItemLi = styled.li`
    height: 42px;
    font-size: 15px;
    font-weight: bold;
    line-height: 42px;
    position: relative;
    transition: all 0.3s;
    list-style: none;
    cursor:pointer;
`;
const NaviA = styled.a`
    display: block;
    height: 100%;
    border-top: 1px solid #efefef;
    padding-left: 10px;
    position: relative;
    text-decoration: none;
    color: #333;
    :last-child{
        border-bottom: 1px solid #efefef;
    }
`;
const NaviB = styled.div`
    background: url(${props => props.img}) no-repeat center 9px;
    background-size: 22px;
    width: 42px;
    height: 100%;
    float: left;
    margin-right: 10px;
`;
const NaviAlramI = styled.i`
    display: ${props => props.show ? "inline" : "none"};
    font-style: normal;
    font-size: 12px;
    padding: 2px 7px;
    background: #fd0031;
    color: #fff;
    border-radius: 20px;
    margin-left: 10px;
`;
const SearchName = styled(NaviItemLi)`
    height:100%;
`;
const NaviSearch = styled(NaviA)`
`;
const NaviS = styled(NaviB)`
    height: 42px;
`;
const SearchIco = styled.img`
    width:100%;
`;
const SearchBtn = styled.button`
    width:28px;
    cursor: pointer;
    background:transparent;
    border:none;
    position:absolute;
    top:15%;
    right:10%;
    transform:translate(-10%, 0);
`;

const SearchForm = styled.form`
    height:${props => props.showInput === false ? "0" : "52px"};
    position:relative;
    text-align:center;
    transform:${props => props.showInput === false ? "scaleY(0)" : "scaleY(1)"};
    transform-origin:top;
    transition: all 0.3s ease-in-out;
`;

const SearchInput = styled.input`
    width: 85%;
    padding:10px 15px;
    font-size:12px;
    border: 2px solid #fd0031;
    border-radius: 39px;
    outline:none;
`;
const MiniLi = styled.li`
  height: 41px;
  line-height: 41px;
  font-size: 15px;
  font-weight: bold;
  position: relative;
  transition: all 0.3s;
`;
const MiniLiA = styled.a`
  height: 42px;
  padding-left: 60px;
  font-size: 14px;
  color: #444;
  border: 0;
  background: #efefef;
  transition: all 0.3s;
  display: block;
  position: relative;
  text-decoration: none;
`;
const NaviItemLiMiniLi = styled(NaviItemLi)`
    height: ${props => props.showPlus? "42px" : "371px" };
    overflow: hidden;
`;
const NaviAMini = styled.a`
&{
    height: 42px;
    display: block;
    border-top: 1px solid #efefef;
    padding-left: 10px;
    position: relative;
    text-decoration: none;
    color: #333;
}
&:before{
    content: "";
    display: block;
    width: 15px;
    height: 2px;
    background: #333;
    position: absolute;
    top: 50%;
    right: 10px;
}
&:after {
    content: "";
    display: block;
    width: 15px;
    height: 2px;
    background: #333;
    position: absolute;
    top: 50%;
    right: 10px;
    transform-origin: center;
    transform: rotate(${props => props.showPlus});
    transition: all 0.3s;
}
`;

const NaviKey = styled(NaviB)`
    height: 26px;
    float:none;
    margin-right:0;
`;

const IconBox = styled.div`
    display:inline-flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-right:10px;
`;
const KeySoundOn = styled.i`
    display: block;
    position:relative;
    width: 14px;
    height: 8px;
    border: 1px solid #444;
    border-radius:6px;

    :after{
        content: "";
        display:block;
        width: 4px;
        height: 4px;
        background: #444;
        border-radius: 4px;
        position:absolute;
        top: 1px;
        left: 7px;
    }
`;

const KeySoundOff = styled(KeySoundOn)`
    ::after{
        left: 1px;
    }
`;
