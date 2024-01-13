import From from "./AddTodoFrom";
import TodoItem from "../components/ServerComponents";

export default function Home() {
  return (
    <div className="homePage">
     <From/>
     <div style={{paddingTop:'2rem'}}>
    <TodoItem title='Sample Title' description="Sample Description Lorem " id="sampleId" completed={true}/>
      </div>
    </div>
  )
}
