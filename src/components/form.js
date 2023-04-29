import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function TextControlsExample() {

  const[textAreaText, setTextAreaText] = useState("");

  // FOR TEXT AREA INPUTS 
  const textAreaOnChanage = (event) => {
    setTextAreaText(event.target.value);
  }

  // EVENT HANDLAERS  
  const ConvertToUpperCase = (event) => {
    let upperCaseText = textAreaText.toUpperCase();
    setTextAreaText(upperCaseText);
  }
  const ConvertToLowerCase = (event) => {
    let lowerCaseText = textAreaText.toLowerCase();
    setTextAreaText(lowerCaseText);
  }
  const ClearText = (event) => {
    setTextAreaText("");
  }

  return (
    <div className="container my-5">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Enter the text below: </Form.Label>
          <Form.Control onChange={textAreaOnChanage} value={textAreaText} as="textarea" rows={8} />
        </Form.Group>
      </Form>

      <div className="btns">
        <Button variant="primary mx-2" onClick={ConvertToUpperCase}>Convert To Upper Case</Button>
        <Button variant="primary mx-2" onClick={ConvertToLowerCase}>Convert To Lower Case</Button>
        <Button variant="primary mx-2" onClick={ClearText}>ClearText</Button>
      </div>
    </div >
  );
}

export default TextControlsExample;