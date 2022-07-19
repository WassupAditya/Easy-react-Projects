import React from 'react'
import { useEffect } from 'react';
import './style.css'  

// get the local-storage-data 

    const getLocalData  = () => {
        const lists  = localStorage.getItem("myTodoList")

    if(lists){
        return JSON.parse(lists) // we will be getting the list as a list but we need it as an array that why we used json.parse to arrayfy it ; 
    }else{
        return ([]) ;
    }

}
const Todo = () => {
    const [InputData  , setInputData] = React.useState(''); 
    const [Items , SetItems] = React.useState(getLocalData()) ;
    const [IsEditItem , setIsEditItem] = React.useState ('') ; 
    const [toggleButton , settoggleButton] = React.useState(false) ; 
    
    // add the items function 
    const addItem = () => {
        if (!InputData) {
            alert("Please fill atleast one Item")
        }else if (InputData && toggleButton){
            SetItems(
                Items.map((currElem)=>{
                    if(currElem.id === IsEditItem){
                        return {...currElem , name :InputData}
                    }
                    return currElem
                })
            )
            setInputData([])
            setIsEditItem(null)
            settoggleButton(false)
        }
        else{
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name : InputData ,
            }
            SetItems([...Items, myNewInputData ]) ; 
            setInputData('') ;
        }
    }
    //edit the item
    const editItem  = (index) => {
        const item_todo_edited = Items.find((currElem)=>{
            return currElem.id === index ;
        })
        setInputData(item_todo_edited.name)
        setIsEditItem(index)
        settoggleButton(true)
    }
    // how to delete Item 
    const deleteItem = (index) => {
            const updatedItem  = Items.filter((currElem)=>{
                    return currElem.id !==  index;
            })
            SetItems(updatedItem) ; 
    }
    //remove all 

    const removeAll = () =>{
        SetItems([]);
    }

    // adding local storage 
    useEffect(() => {
      localStorage.setItem("myTodoList" , JSON.stringify(Items));
    }, [Items])
    // e6d18549cbcb3effa044983fea916842
    // api.openweathermap.org/data/2.5/weather?q=pune&appid=c20dc1e73ab81ea9114716412186fdcc



  return (
    <>
        <div className='main-div'>
            <div className="child-div">
                <figure>
                    <img src="./images/todo.png" alt="todo-logo" />
                    <figcaption>Add Your List Here &#128515; </figcaption>
                </figure>
                <div className="addItems">
                    <input type="text " placeholder= 'Type your Items Here'  className='form-control' value={ InputData} onChange = {(event)=> setInputData(event.target.value)} />
                    {toggleButton ? <i className="fa fa-edit add-btn" onClick={addItem}></i>: <i className="fa fa-plus add-btn" onClick={addItem}></i>}
                    
                </div>
                {/* show our items  */}


                <div className="showItems">
                    {
                        Items.map( (currElem)=>{
                            return(<div className="eachItem" key={currElem.id}>
                            <h3>{currElem.name}</h3>
                            <div className="todo-btn">
                            <i className="far fa-edit add-btn" onClick={()=>editItem(currElem.id)} ></i>
                            <i className="far fa-trash-alt add-btn" onClick={()=> deleteItem(currElem.id)}></i>
                            </div>
                        </div>)
                        })
                    }
                   
                </div>


                {/* remove all items  */}


                <div className="showItems">
                    <button className='btn effect04' data-sm-link-text = 'Remove All' onClick={removeAll}> <span>Check List</span> </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Todo ; 