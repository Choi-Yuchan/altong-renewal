function Num3Comma(props){
    if(!isNaN(props.num)) return props.num;
    const number = props.num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return number;
}
export default Num3Comma;