 

// const ExperienceFuture = () => {
  

//   const slides = [
//     {
//       title: 'An immersive way to experience the future',
//       description: 'Enjoy a seamless experience with your home, Covered by our sensor.',
//       image: 'https://via.placeholder.com/800x400',  
//       buttons: ['Voice', 'Touch', 'Motion'],
//       highlightedButton: 2
//     },
//     {
//       title: 'Feel smart with every touch',
//       description: 'Adjust brightness level and choose light colors that suit your mood.',
//       image: 'https://via.placeholder.com/800x400',  
//       buttons: ['Voice', 'Touch', 'Motion'],
//       highlightedButton: 1
//     },
//     {
//       title: 'Activate your preferred mode',
//       description: 'Need your coffee ready and curtains open at sunrise? Just say Good Morning.',
//       image: 'https://via.placeholder.com/800x400',  
//       buttons: ['Voice', 'Touch', 'Motion'],
//       highlightedButton: 0
//     }
//   ];

//   return (
//     <div className="relative w-full h-auto bg-yellow-50 py-12 border border-red-500">
//       {/* Carousel Content */}
//       <div className="relative w-full h-full overflow-hidden">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className="opacity-100 relative inset-0 flex flex-col items-center w-full h-full p-8 md:flex-row"
//           >
            
//             <div className="w-full md:w-1/2 text-center md:text-left md:pr-8">
//               <h2 className="text-4xl font-bold text-gray-800 mb-4">
//                 {slide.title.split(' ').slice(0, -2).join(' ')}{' '}
//                 <span className="text-orange-500">{slide.title.split(' ').slice(-2).join(' ')}</span>
//               </h2>

              
//               <div className="flex justify-center md:justify-start space-x-4 mb-4">
//                 {slide.buttons.map((buttonText, i) => (
//                   <button
//                     key={i}
//                     className={`px-4 py-2 rounded-full text-gray-600 ${
//                       i === slide.highlightedButton
//                         ? 'bg-gray-200 text-orange-500'
//                         : 'bg-gray-100'
//                     }`}
//                   >
//                     {buttonText}
//                   </button>
//                 ))}
//               </div>

              
//               <p className="text-lg text-gray-500 mb-8">{slide.description}</p>
//             </div>

           
//             <div className="w-full md:w-1/2 flex justify-center items-center">
//               <img
//                 src={slide.image}
//                 alt={slide.title}
//                 className="w-3/4 h-auto object-cover rounded-lg border border-blue-500"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ExperienceFuture;






import { useState } from 'react';

const ExperienceFuture = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Default to Motion

  const slides = [
    
   
    {
      title: 'Activate your preferred mode',
      description: 'Need your coffee ready and curtains open at sunrise? Just say Good Morning.', 
      image: './images/home-assistant-img.png',
    } ,
    {
      title: 'Feel smart with every touch',
      description: 'Adjust brightness level and choose light colors that suit your mood.',
      image: './images/touch assistant.png', // Replace with the actual image
    },
    {
      title: 'A magical new way to interact',
      description: 'Enjoy a seamless experience with your home, Covered by our sensor ',
      image: './images/motion assistant.png', 
    }
    
  ];

  const handleButtonClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-auto  bg-white my-[89px] ">
      {/* Static Caption with Title and Buttons */}
      <div className="flex flex-col justify-center items-center ">
        {/* <h2 className="text-4xl font-bold text-gray-800">
          An immersive way to experience{' '}
          <span className="text-orange-500">the future</span>
        </h2> */}
<div className="   lg:w-[1225px]       text-center font-Poppins font-semibold text-[30px] leading-[45px]  lg:text-[70px] lg:leading-[100px] text-gray-800">
  An immersive way to experience{' '}
  <span className="bg-gradient-to-r from-[#fba980] to-[#f7cb6b] bg-clip-text text-transparent" >the future</span>
</div>




        {/* Button Group */}
        {/* <div className="flex justify-center space-x-4 mt-4">
          {['Voice', 'Touch', 'Motion'].map((buttonText, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-gray-600 ${
                currentIndex === index ? 'bg-gray-200 text-orange-500' : 'bg-gray-100'
              }`}
              onClick={() => handleButtonClick(index)}
            >
              {buttonText}
            </button>
          ))}
        </div> */}
 <div className="mt-[24px]   flex items-center justify-between px-2   w-[295px] h-[40px] lg:w-[370px] lg:h-[60px] bg-[#F1F5F9] border  border-[#E2E8F0] rounded-[30px] shadow-[0_8px_16px_rgba(0,0,0,0.08)] ">
  {['Voice', 'Touch', 'Motion'].map((buttonText, index) => (
    <button
      key={index}
      className={`text-center font-poppins px-[12px] py-[4px] font-medium text-[16px] lg:text-[24px] leading-[24px] lg:leading-[36px] rounded-full transition-colors ${
        currentIndex === index
          ? 'bg-white' // White background
          : 'bg-[#F1F5F9] text-[#64748B]' // Gray background for inactive buttons
      }`}
      onClick={() => handleButtonClick(index)}
    >
      <span className={`${
        currentIndex === index
          ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#fba980] to-[#f7cb6b]'
          : 'text-[#64748B]'
      }`}>
        {buttonText}
      </span>
    </button>
  ))}
</div>


        {/* <div className=" flex items-center justify-between px-[4px]  w-[295px] h-[40px] lg:w-[370px] lg:h-[60px] bg-[#F1F5F9] border border-[#E2E8F0] rounded-[30px]   shadow-[0_8px_16px_rgba(0,0,0,0.08)] gap-[40px]">
  {['Voice', 'Touch', 'Motion'].map((buttonText, index) => (
       <button
      key={index}
      className={` px-[2px] py-[2px]   text-center font-poppins font-medium text-[16px] lg:text-[24px] leading-[24px] lg:leading-[36px] ${
        currentIndex === index ? 'bg-white bg-clip-text text-transparent bg-gradient-to-r from-[#fba980] to-[#f7cb6b] ' : 'text-[#64748B]'
      } rounded-full transition-colors`}
      onClick={() => handleButtonClick(index)}
    >
      {buttonText}
    </button>
  ))}
</div> */}
      </div>

 


      {/* Carousel Content */}
      <div className="relative w-full h-auto overflow-hidden bg-[#F8FAFC] mt-[40px] ">
        <div className="transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {/* Slides container with transition */}
          <div className="flex">
            {slides.map((slide, index) => (
              <div key={index} className="flex-shrink-0  flex items-center justify-center w-full h-auto p-4 py-5 lg:h-[451px]">
                {/* Slide */}
                <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row items-center justify-evenly w-full h-auto ">
                  {/* Text Section */}
                  <div className="lg:w-[384px] flex flex-col justify-start items-center gap-4    ">
                    <p className="text-center lg:text-left font-Poppins font-semibold text-[22px] leading-[33px] lg:text-[32px] lg:leading-[48px] text-[#64748B] ">{slide.title}</p>
                    <p className=" text-center lg:text-left font-Poppins  font-normal lg:font-semibold text-[18px] lg:text-[24px] leading-[27px] lg:leading-[36px] text-[#64748B]">{slide.description}</p>

                  </div>

                  {/* Image Section */}
                  <div className=" flex flex-col justify-center items-center lg:justify-start lg:items-start gap-[15px] lg:gap-[10px]">
                  {/* Conditionally render the bot image for the "Voice" button */}
                  {currentIndex === 0 && (
                     <div className="flex justify-center items-center bg-white rounded-[16px] pt-[4px] pr-[12px] pb-[4px] pl-[12px]   w-auto  gap-[17px] ">
                         <img
                        src="./images/bot-img.png"
                        alt="Bot Image"
                        className="w-[40px] h-[40px] lg:w-[56px] lg:h-[56px] object-cover rounded-lg"
                      />
                      <div className="font-Poppins font-medium text-[18px] lg:text-[28px] leading-[27px] lg:leading-[42px] text-[#64748B]  ">Hey siri, Good Morning...</div>
                     </div>
                    
                    
                  )}
                  <div >
                        <div  className={`  ${
                        currentIndex > 0 ? 'py-[40px] lg:py-0' : ''
                      }`}>
                                <img
                              src={slide.image}
                              alt={slide.title}
                              // className="h-auto lg:max-w-[384px]  lg:max-h-[327px] object-cover rounded-lg"
                              className={`object-cover rounded-lg ${
                                currentIndex > 0 ? 'w-[300px] h-[300px]   ' : 'h-auto lg:max-w-[384px] lg:max-h-[327px]'
                              }`}
                            />
                        </div>
                 
                  </div>
                  
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceFuture;