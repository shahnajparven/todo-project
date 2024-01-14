
import AddTaskFrom from "@/AddTaskFrom";
import TodoItem from "../components/ServerComponents";
import AddTodoFrom from "./AddTodoFrom";
import From from "./AddTodoFrom";

export default function Home() {
  return (
    <div className="homePage">
     
     <AddTodoFrom/>
     
     <div style={{paddingTop:'2rem'}}>
    <TodoItem title='Sample Title' description="Sample Description Lorem " id="sampleId" completed={true}/>
      </div>
    </div>
  )
}
