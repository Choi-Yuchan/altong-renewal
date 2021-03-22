import BoxTop from '../boxTop/BoxTop'

function Box() {
  return (
    <div className="Box">
        {/* atm_top_wrap */}
        <BoxTop></BoxTop>
        
        <div className="overlay">
            Box
        </div>
    </div>
  );
}

export default Box;
