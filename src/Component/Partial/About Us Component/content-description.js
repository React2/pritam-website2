import React from 'react'

const ContentDescription = (props) => {
  console.log("propsContentDescription", props);
  return (
    <div className='About_Us-Content'>
        <h5>{props?.title}</h5>
        <p> {props?.desc} </p>
    </div>
  )
}

export default ContentDescription