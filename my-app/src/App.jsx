import { useState } from 'react'
import './App.css'
import InputComponent from './components/input/input'
import { Card } from './components/card/card';
const FIGMA_COMPONENT_CONSTANT={
  "inputcomponent":InputComponent
}
function App() {
  const [name, setName] = useState('');
  const getComponent = (name) => {
    return FIGMA_COMPONENT_CONSTANT[name] || null;
  }


const data=[{
  title: "Card Title",
  description: "This is a sample card description.",
  image: "https://via.placeholder.com/150",
  date: "2023-10-01",
  icon: "https://via.placeholder.com/50",
  tags: ["tag1", "tag2", "tag3"],
  commentsCount: 50,
  link: "https://example.com",
},
{
  title: "Card Title 1",
  description: "This is a sample card description 1.",
  image: "https://via.placeholder.com/150",
  date: "2024-10-01",
  icon: "https://via.placeholder.com/50",
  tags: ["tag1", "tag2", "tag3"],
  upvoteCount:200,
  commentsCount: 150,
  link: "https://example.com",
}
]

  return (
    <>
      <div>
        {/* <h1>Input Form</h1>
        <input type="text" placeholder="Enter Your Name" onChange={(e)=>setName(e.target.value)} />
        <InputComponent name={name}/>
        {getComponent(name) ? React.createElement(getComponent(name), { name }) : <p>Please enter a valid component name.</p>}
        */}
       {/* <Card data={data[0]}/> */}
       {
        data.map((item, index) => (
          <Card key={index} data={item}/>
        ))
       }
       </div>
    </>
  )
}

export default App
