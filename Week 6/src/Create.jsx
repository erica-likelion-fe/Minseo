export const Create = ({inputIndex,inputContent,setInput, IndexAdd}) => {

    
    
    return (
        
        <div style ={{width: '300px', heigh: '600px', textAlign:'center', marginTop:'50px', border: '1px green solid'}}>
            <input
                style = {{width:'200px', height:'20px', margin:'10px'}}
                value = {inputIndex}
                onChange = {(e) => setInput(e.target.value)}
                placeholder = "제목을 입력하세요"/>
            <br/>
            <input
                style = {{width:'200px', height:'100px', marginBottom: '10px'}}
                value = {inputContent}
                placeholder = "내용을 입력하세요"/>
            <br/>
            <button onClick={IndexAdd}
                    style = {{height:'20px',width:'210px',margin: '10px'}}>Submit</button>
        </div>
    )
} 