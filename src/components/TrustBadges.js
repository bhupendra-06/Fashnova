import { FaWallet, FaMotorcycle } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { GiRibbonMedal, GiIndiaGate } from "react-icons/gi";
import { MdOutlineFlag } from "react-icons/md";

const TrustBadges = () => {
  const features = [
    {
      icon: <FaWallet className="text-3xl md:text-5xl lg:text-6xl" aria-label="Secure Payments" />,
      title: "Secure Payments",
    },
    {
      icon: <GiRibbonMedal className="text-3xl md:text-5xl lg:text-6xl" />,

      title: "Assured Quality",
    },
    {
      icon: <GiIndiaGate className="text-3xl md:text-5xl lg:text-6xl" />,
      title: "Made In India",
    },
    {
      icon: <TbTruckDelivery className="text-3xl md:text-5xl lg:text-6xl" />,
      title: "Timely Delivery",
    },
  ];

  return (
    <div className="bg-gray-200 py-8 md:py-12 sm:px-4">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 cursor-pointer transition-transform duration-200 hover:scale-105"
          >
            <div className="text-black" title={feature.title}>
              {feature.icon}
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-black">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBadges;
