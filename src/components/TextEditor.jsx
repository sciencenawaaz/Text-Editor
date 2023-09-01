import React, {useState} from 'react'

//IGNORE THESE  experimental components

const TextEditor = () => {
  const [Text, setText] = useState("")

  function handleTextChange(e) {
    console.log(e.target.value);
    setText(e.target.value);
  }

  function handleBold() {
        
  }

  function handleItalic() {
      
  }

  function handleH1() {
    // const selection = window.getSelection()
    //   const selectedText = selection.toString();
    //   console.log(`this is : ${selection}`);
    //   console.log(selectedText);
      if(Text) {
        const newText = Text.replace(Text , `<h1>${Text}</h1>`)
        setText(newText);
      }
  }

  return (
    <>
      <div className={"flex flex-wrap justify-start gap-x-1 bg-blue-200 rounded-t-md p-1"}>
            <button 
            onClick={handleBold}
            className='px-2 py-1 text-white bg-blue-700 rounded' 
            >
                Bold
            </button>
            <button
            onClick={handleItalic}
             className='px-2 py-1 text-white bg-blue-700 rounded'
            >
                Italic
            </button>
            <button
            onClick={handleH1}
             className='px-2 py-1 text-white bg-blue-700 rounded'
            >
                H1
            </button>
    </div>
    <div 
      placeholder='Text Area' 
      className={"border rounded-b-md text-black w-full h-96 p-4 text-2xl"} 
      onChange={handleTextChange}
      dangerouslySetInnerHTML={{__html: Text}}
    ></div>
    </>

  )
}

export default TextEditor