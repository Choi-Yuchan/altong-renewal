import styled from 'styled-components';
import React, {useState} from 'react';

const NaviAClick = (e, href) => {
    if( href === "" ){
        e.preventDefault();
    }
}

function NaviItem(props) {
    const [showPlus, setShowPlus] = useState("0deg");
    if(props.mini != null){
        return (
            <NaviItemLiMiniLi showPlus={showPlus==="0deg"} onClick={() =>{

            setShowPlus(showPlus=="0deg" ? "90deg" : "0deg" );
             }}>
                <NaviAMini showPlus={showPlus} href={props.href} onClick={(e)=>{
                    NaviAClick(e, props.href);
                }}>
                    <NaviB img={props.img}></NaviB>
                    <span>{props.val}</span>
                    <NaviAlramI show={props.i===true}>{props.i===true?props.count:""}</NaviAlramI>
                </NaviAMini>
                <ul>
                    {props.mini["ko"].map((list)=>{
                        return <MiniLi>
                            <MiniLiA key={props.key} href={list.href}>· {list.val}</MiniLiA>
                        </MiniLi>
                    })}
                </ul>
            </NaviItemLiMiniLi>
        );
    }
    if(props.bar){
        return(
        <SearchName>
            <NaviSearch>
                <NaviS img={props.img}></NaviS>
                <span>{props.val}</span>
            </NaviSearch>
            <SearchForm>
                <SearchInput placeholder="닉네임을 입력해주세요"></SearchInput>
            </SearchForm>
        </SearchName>
        );
    }
    return (
        <NaviItemLi>
            <NaviA href={props.href} onClick={(e)=>{
                NaviAClick(e, props.href);
            }}>
                <NaviB img={props.img}></NaviB>
                <span>{props.val}</span>
                <NaviAlramI show={props.i===true}>{props.i===true?props.count:""}</NaviAlramI>
            </NaviA>
        </NaviItemLi>
    );
  }
  
  export default NaviItem;

const SearchForm = styled.form`
    text-align:center;
`;
const SearchInput = styled.input`
    width: 85%;
    padding:10px;
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

const NaviItemLiMiniLi = styled(NaviItemLi)`
    height: ${props => props.showPlus? "42px" : "371px" };
    overflow: hidden;
`;
const NaviA = styled.a`
    display: block;
    height: 100%;
    border-top: 1px solid #efefef;
    padding-left: 10px;
    position: relative;
    text-decoration: none;
    color: #333;
`;
const SearchName = styled(NaviItemLi)`
    height:100%;
`;

const NaviSearch = styled(NaviA)`

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
const NaviB = styled.div`
    background: url(${props => props.img}) no-repeat center 9px;
    background-size: 22px;
    width: 42px;
    height: 100%;
    float: left;
    margin-right: 10px;
`;
const NaviS = styled(NaviB)`
    height: 42px;
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

