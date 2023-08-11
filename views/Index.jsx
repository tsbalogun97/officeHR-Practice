import React from 'react'

function Index(props) {
  return (
    <div>
      <h1>student</h1>{props.students.map((ele)=>{
        return(
          <p>{ele.name}</p>
        )
      })}
    </div>
  )
}

export default Index