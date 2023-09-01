import React,{useState} from 'react'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'

const sections = [
  {key : "1"},
  {key : "2"},
  {key : "3"},
  {key : "4"},
  {key : "5"}
];


const QuillTextEditor = () => {
    
    const modules = {
      toolbar: [
        ["bold", "italic", "underline" , "color" , "align" ,"direction" ,"blockquote"],
        [{"list": "ordered"}, {"list": "bullet"}, {"indent": "-1"}, {"indent": "+1"}],
        ["link","image" ,"video", "formula" ],
        ["clean"]
        [{"header":"1"},{"header":"2"}, { "font": []}],
        
      ],
    };

  
  return (
    <>
    {
      sections.map((section) => {

        return <div key={section.key} className=' flex flex-col content-around pb-24 mx-auto min-h-screen lg: max-h-96 md:h-1/6 md:mb-12 lg:mb-20 lg:w-1/3'>
          <div className='h-full lg:h-full' >
            <p  className='text-xl border rounded-t m-0 overflow-hidden truncate bg-slate-100'>Section {section.key} </p>
            <ReactQuill
            className=' h-full lg:h-full'
            key={section.key}
            modules={modules}
            theme='snow'
            />
          </div>
        </div>

      })
      
    }
    </>  
    
    
    
  )
}

export default QuillTextEditor