import React from 'react'

function New() {
  return (
    <div>
      <h1>New Student</h1>
      <form action='/' method="POST">
        Name:<input type="name" name="name"/>
        <br/>
        Grade:<input type="number" name="grade"/>
        <br/>
        Cool?<input type="checkbox" name="cool"/>
        <br/>
        <input type="submit" value="submit"/>
      </form>
    </div>
  )
}

export default New