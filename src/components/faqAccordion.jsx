/* eslint-disable react/prop-types */
import {useState} from "react";
const Accordion = (props) => {
    const [data, setData] = useState(props.datas);
    
    const handleToggleActive = () => {
        let activeNew = data.active === 1 ? 0 : 1;
        setData({...data, active : activeNew});
    }

    return (
        <div className={`w-full md:w-[700px] h-[80px] py-5 duration-500 group ${data.active === 1 ? 'is-active mb-6' : ''}`}>
            <div className="flex items-center cursor-pointer" onClick={handleToggleActive}>
                <div className="w-full group-[.is-active]">
                  <h1 className="font-primary font-medium text-[#222222] text-[16px] md:text-[18px] leading-[22px] md:leading-normal max-w-[290px] md:max-w-full">{data.question}</h1>
                </div>
                <div className="rotate-0 duration-500 group-[.is-active]:rotate-[180deg]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M22.6667 13.3333L16 20L9.33334 13.3333" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
            </div>
            <div className="overflow-hidden duration-500 max-h-0 group-[.is-active]:max-h-[100px] mt-3">
                <p className="font-primary font-normal text-[#4b4949] text-[14px]">{data.answer}</p>
            </div>
        </div>
      
    );
}
export default Accordion;