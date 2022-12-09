import React from 'react'

const Hero =(props)=>{     //they are read only properties
    //  console.log(props)
    //return <h1>Hi, my name is Tony Stark a.k.a. Iron Man</h1>
    return <div>
    <h1>Hi, my name is {props.name} a.k.a. {props.heroName}</h1>   {/*called using props from app.js*/}
    <img src={props.img}/>
    </div>
//return React.createElement('div',null, React.createElement('h1',null,'Hello'))
//return <div> <h1>Hello from Hero</h1> </div>
}

export default Hero