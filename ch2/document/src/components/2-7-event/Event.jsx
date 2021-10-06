export default function Event() {
  const handleButtonClick = (e) => {
    console.log("handleButtonClick");
    return false;
  };
  const handleButtonClickCapture = (e) => {
    console.dir(e);
    // e.preventDefault();
    console.log("handleButtonClickCapture");
  };
  const handleButtonClickCapture2 = () => {
    console.log("handleButtonClickCapture2");
  };

  const handleButtonClickBubble = () => {
    console.log("handleButtonClickBubble");
  };

  return (
    <div onClickCapture={handleButtonClickCapture2}>
      <div
        onClickCapture={handleButtonClickCapture}
        onClick={handleButtonClickBubble}
      >
        <button onClick={handleButtonClick}> Button</button>
      </div>
    </div>
  );
}
