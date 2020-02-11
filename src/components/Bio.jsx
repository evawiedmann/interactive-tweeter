import React from 'react';

function Bio(){
  let bioSquare= {
    height: '500',
    width:  '400',
    marginTop: '50px',
    border: "1px solid lightgray",
  }
  let text = {
    color: "gray",
    padding: '50px',
    fontSize: '18px'
  }
  return(
    <div style={bioSquare}>
      <div style={text}>
      <p><span >Nunc gravida mi non neque consectetur, non molestie magna congue. Aenean eget accumsan tortor. Phasellus eu convallis magna.<p> Nulla id leo sed nunc ullamcorper tristique a ac magna. Ut ut semper nisi. Duis mollis ante a tortor auctor tristique.</p> Ut commodo, nulla ac porta gravida, justo enim bibendum tortor, quis venenatis elit dolor sed ipsum. Pellentesque felis felis, ornare a aliquam eu, maximus id ante. Morbi et venenatis urna, eu euismod sapien.</span></p>
    </div>
    </div>
  );
}
export default Bio;
