function Num3Comma(props){
    if(isNaN(parseInt(String(props.num),10)) === true) return props.num;
    const number = String(props.num);

    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export default Num3Comma;