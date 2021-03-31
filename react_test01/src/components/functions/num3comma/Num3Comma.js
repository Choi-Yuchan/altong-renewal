function Num3Comma(props){
    const number = props.num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return number;
}
export default Num3Comma;