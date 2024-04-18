"use client";
import { Button } from 'semantic-ui-react';

const Navigation = (props) => {
  return (
    <div style={{marginTop: '15px'}}>
      {props?.handlePrevious && 
        <Button secondary content='Prev' icon='left arrow' labelPosition='left' floated='left' onClick={props.handlePrevious}/>
      }
      {props?.handleNext && 
        <Button primary content='Next' icon='right arrow' labelPosition='right' floated='right' onClick={props.handleNext}/>
      }
      {props?.handleSubmit && 
        <Button positive content='Submit' icon='check' labelPosition='right' floated='right' onClick={props.handleSubmit}/>
      }
    </div>
    
  );
};

export default Navigation;