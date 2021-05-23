import React from 'react'; 
import ControlsContainer from './app2control';
 
const titleStyle = {
   fontFamily: 'tahoma', 
   fontSize: '24px',
   textAlign: 'center'
}

 const Title = () => (
 <div style={titleStyle}> 
  Book Search 
 </div> 
);

 export const App = () => (
   <div>
     <Title />
     <hr/> 
     <ControlsContainer /> 
   </div> 
)