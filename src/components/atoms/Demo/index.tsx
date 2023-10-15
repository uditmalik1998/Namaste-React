import React from "react";

const Demo = (props:any) => {
  const {children = ""} = props;
  console.log(props);
      return (
        <>
        <h1>Demo</h1>
        {children}
        </>
      )
}

export default Demo;