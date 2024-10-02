import Device from "../components/device";

const Devices = () => {
  const devices = [
    {
      image: "./images/devices/tv.svg",
      brand: "LG",
      model: "Living room TV",
      type: "switch",
    },
    {
      image: "./images/devices/ac.svg",
      brand: "Sharp",
      model: "Bedroom A.C",
      type: "switch",
    },
    {
      image: "./images/devices/bulb1.svg",
      brand: "Philips",
      model: "Ali bedroom",
      type: "switch",
    },
    {
      image: "./images/devices/oven.svg",
      brand: "ELBA",
      model: "Oven",
      type: "switch",
    },
    {
      image: "./images/devices/speaker.svg",
      brand: "JBL",
      model: "Outdoor Sound",
      type: "switch",
    },
    {
      image: "./images/devices/vacuum.svg",
      brand: "Toshiba",
      model: "Vacuum",
      type: "switch",
    },
    {
      image: "./images/devices/Lock.svg",
      brand: "Wyze",
      model: "Main door",
      type: "lock",
    },
    {
      image: "./images/devices/bulb2.svg",
      brand: "Philips",
      model: "Living room",
      type: "dimming",
    },
    {
      image: "./images/devices/camera.svg",
      brand: "Imou",
      model: "Kids room Cam",
      type: "switch",
    },
  ];

  return (
    <section className="flex justify-center items-center mt-0 md:mt-10">
      <div className="screen-layout">
        <div className="flex justify-start md:justify-center items-center gap-2 mt-0 md:mt-7 mb-3 md:mb-14">
          <h2 className="text-third text-[26px] md:text-5xl font-semibold">
            Control all your
          </h2>
          <span className="text-gr text-[26px] md:text-5xl font-bold font-Poppins mt-2 md:mt-4">
            DEVICES!
          </span>
        </div>

        <section className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-0">
          <div className="w-full md:w-1/2 space-y-4 md:space-y-10 text-firstMuted">
            <h3 className="text-xl md:text-[40px] lg:text-[44px] font-medium md:leading-tight md:tracking-wider">
              Interact with your <br /> entire smart home from
              <br className="hidden md:block" /> one app.
            </h3>
            <p className="md:text-lg font-medium leading-normal mt-3 md:mt-0">
              Enjoy free setup for our system, And get
              <br />
              everything connected with one app.
              <br />
              thanks to our Ecosystem who make <br />
              you able to control all your devices as <br /> simple as that.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-3 gap-3 lg:gap-5 px-0 xl:pl-24 pb-10">
              {devices.map((device) => (
                <Device
                  image={device.image}
                  brand={device.brand}
                  model={device.model}
                  type={device.type}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Devices;
