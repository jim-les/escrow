import { useEffect, useState } from "react";
interface writer{
    text:string,
    delay:number,
    
}
const Typewriter = ({ text,delay }:writer) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [infinite,setInfinite]=useState(true)
  
    // Typing logic goes here
    useEffect(() => {
        let timeout:ReturnType<typeof setTimeout>;
    
        if (currentIndex <= text.length) {
          timeout = setTimeout(() => {
            setCurrentText(prevText => prevText + text[currentIndex]);
            setCurrentIndex(prevIndex => prevIndex + 1);
          }, delay);
    
        } else if (infinite) { // ADD THIS CHECK
          setCurrentIndex(0);
          setCurrentText('');
        }
    
        return () => clearTimeout(timeout);
      }, [currentIndex, delay, infinite, text]);
  
    return <span className="text-blue-500 overflowx-auto">{currentText}</span>;
  };
  
  export default Typewriter;