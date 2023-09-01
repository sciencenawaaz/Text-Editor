import React from 'react'

const ToolBar = (props) => {
    function handleBold() {
        
    }

    function handleItalic() {
        
    }

    function handleH1() {
        const selectedText = window.getSelection().toString();
        console.log(selectedText);
    }

  return (
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
  )
}

export default ToolBar