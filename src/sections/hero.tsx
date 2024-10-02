import Navbar from "../components/navbar";

const Hero = () => {
  return (
    <section className="w-full h-fit lg:h-[85vh] xl:h-fit bg-gradient clip-bottom-curve">
      <Navbar />
      <div className="flex justify-center">
        <div className="screen-layout flex flex-col justify-center items-center gap-10 px-4 mt-10 md:mt-10 pb-10 md:pb-6">
          <div className="w-40">
            <img src="./images/logo.png" alt="" />
          </div>

          <div className="text-lg md:text-[24px] lg:text-[26px] xl:text-[28px] xl:leading-relaxed text text-center pb-0 xl:pb-10">
            <p className="hidden sm:block leading-relaxed">
              The only smart home system that lets you control,
              <br />
              Automate, and Monitor your entire home. Interact with
              <br />
              your voice, motion, and touch. powered by our hardware.
              <br />
              with a never-seen-before experience.
            </p>

            <p className="block sm:hidden pb-24 leading-relaxed">
              The only smart home system that lets you control, Automate, and
              Monitor your entire home. Interact with your voice, motion, and
              touch. powered by our hardware. with a never-seen-before
              experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
