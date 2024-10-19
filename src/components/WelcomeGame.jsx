'use client';
import { useEffect } from 'react';
import Image from 'next/image';

const WelcomeGame = () => {
  useEffect(() => {
    const footElements = Array.from(document.querySelectorAll(".foot-animation"));
    const siriusIcon = document.querySelector(".sirius-icon"); // Select the Sirius icon
    const Stay = document.querySelector(".StayCurious");
   
    let currentIndex = 0;

    const animateFeet = () => {
      // Reset all foot elements
      footElements.forEach(element => element.classList.remove("in-view"));

      // Show elements one by one with a delay
      footElements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add("in-view");

         

        }, index * 500); // 500ms delay between each element
      });

      // After all elements have been shown, start hiding them
      footElements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.remove("in-view");
        }, (index + footElements.length) * 500); // Delay to hide after all have been shown
      });

      // Trigger shake animation for Sirius icon after foot animation ends
      setTimeout(() => {
        if (siriusIcon) {
            Stay.classList.add("in-view");
          siriusIcon.classList.add("shake");
          siriusIcon.classList.add("sprinkle");
          // Remove the shake class after animation ends to allow it to be retriggered
          setTimeout(() => {
            Stay.classList.remove("in-view");
            siriusIcon.classList.remove("shake");
            siriusIcon.classList.remove("sprinkle");
          }, 5000); // Match the duration of the shake animation
        }
      },4600); // Trigger shake after the last foot element hides

      // Repeat the animation every X seconds (adjust the timeout based on your element count)
      setTimeout(animateFeet, footElements.length * 1000); // Animation repeats after all elements animate
    };

    animateFeet(); // Start the animation loop

  }, []);

  return (
    <>
  

      <div className="grid-item item4 flex justify-start items-center gap-[40px]">
        <Image className="ml-[1000px]  absolute md:ml-[22%] lg:ml-[25%] md:mb-[42%] lg:mb-[18%] rotate-[210deg] foot-animation" src={'/onefoot.svg'} width={30} height={30} alt="Foot 4" />
        <Image className="ml-[1000px] absolute md:ml-[12%] lg:ml-[20%] md:mb-[30%] lg:mb-[10%] rotate-[210deg] lg:rotate-[260deg] scale-x-[-1] foot-animation" src={'/onefoot.svg'} width={30} height={30} alt="Foot 5" />
        <Image className="ml-[1000px]  absolute md:ml-[15%] md:mb-[12%] rotate-[240deg] foot-animation" src={'/onefoot.svg'} width={30} height={30} alt="Foot 6" />
        <div className='hidden md:block  flex-col overflow-visible h-[230px] w-[250px]  justify-center items-center'>
    <Image alt="Sirius icon" src={'Sir-icon.svg'} width={230} height={230} className="hidden md:block sirius-icon" />
    <p className='text-gradient StayCurious text-black opacity-60 text-[38px] font-bold '>Stay Curious</p>
        
        </div>
        <div className="flex flex-col gap-[10px]">
          <h2 className="text-[38px] md:text-[58px] font-[700] text-[#121212] leading-[56.88px] text-center md:text-start flex flex-row justify-start items-center gap-3">What is <Image src={'SIRIUS.svg'} height={150} width={210}></Image> ?</h2>
          <p className="text-[20px] font-[400] text-[#000000] text-opacity-60 leading-[28.13px] text-center md:text-start">
            Siruis is a science club located in Amizour Bejaia formed by a bunch of students to help others learn about hardware.
          </p>
        </div>
      </div>
    </>
  );
};

export default WelcomeGame;
