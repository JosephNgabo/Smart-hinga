import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <div>
      <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 xl:flex-row ">
        <div className="hero-map" />

        {/* Left text */}

        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
          <Image
            src="/camp.svg"
            alt="camp"
            width={50}
            height={50}
            className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
          />
          <h1 className="bold-52 lg:bold-50">
            {" "}
            Caltuvating through <br />
            Modern Agriculture{" "}
          </h1>
          <p className="regulaer mt-6 text-gray-30 xl:max-w-[520px] mb-6">
            readable English. Man desktop publishing packa ges an
            wereadableEnglish. <br />
            desktop publishing packages and w
          </p>
          <div className="flex flex-col w-full gap-3 sm:flex-row">
            <Button type="button" title="Choose crops" variant="btn_green" />

            <Button
              type="button"
              icon="/play.svg"
              title="How we work?"
              variant="btn_white_text"
            />
          </div>
        </div>

        <div className="relative flex flex-1 items-start border-2 border-green-500">
          <div className="relative z-20 w-[268px] flex flex-col gap-8 rounded-3xl px-7 py-8">
            {/* Location Input */}
            <input 
              type="text"
              placeholder="Your Location"
              className=" border-2 border-green-500 py-4 px-8 rounded-lg"
            />

            {/* Date Input */}
            <input
              type="date"
              placeholder="Choose Date"
              className=" border-2 border-green-500 py-4 px-8 rounded-lg"
            />

            {/* Weather Input */}
            <select className=" border-2 border-green-500 py-2 px-8 rounded-lg">
              <option value="" disabled selected>
                Choose Weather
              </option>
              <option value="sunny">Sunny</option>
              <option value="rainy">Rainy</option>
              <option value="cloudy">Cloudy</option>
            </select>
            <Button
              type="button"
              title="Search"
              variant="btn_green"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
