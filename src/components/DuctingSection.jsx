import { useEffect, useRef } from 'react';
import { PenTool, Fan, ShieldCheck, Wrench } from 'lucide-react';

const whatsappUrl = 'https://api.whatsapp.com/send/?phone=918712322475&text=Hi%2C%20I%20need%20ducting%20service%20details.&type=phone_number&app_absent=0';

const ductingFeatures = [
  {
    icon: PenTool,
    title: 'Air Duct Installation, Design & Layout Planning',
    desc: 'Bespoke ductwork design tailored to your space for maximum airflow efficiency.'
  },
  {
    icon: Fan,
    title: 'Exhaust Duct Installation & Maintenance',
    desc: 'Expert routing and extraction setups for commercial and industrial exhaust systems.'
  },
  {
    icon: Wrench,
    title: 'Fabrication & Installation of AC Ducts',
    desc: 'Custom fabrication using high-grade materials for durability and minimal leakage.'
  },
  {
    icon: ShieldCheck,
    title: 'Diffuser, Grill, and Damper Installation',
    desc: 'Precision fitting of terminal components to ensure balanced and quiet air distribution.'
  }
];

export default function DuctingSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, { threshold: 0.1 });

    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  return (
    <section className="bg-[#fcfdfd] font-sans w-full pt-12 pb-6 sm:pt-16 sm:pb-10 overflow-hidden border-b border-gray-100">
      <div
        ref={containerRef}
        className="mx-auto max-w-300 px-6 lg:px-8 opacity-0 translate-y-8 transition-all duration-700 ease-out"
      >
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-40 items-center justify-between">

          {/* Left Side */}
          <div className="lg:w-[45%]">
            <div className="inline-block border-t-[3px] border-[#154769] pt-3 mb-5">
              <span className="text-[13px] font-bold tracking-[0.15em] text-gray-500 uppercase">
                Premium HVAC Solutions
              </span>
            </div>
            <h2 className="text-4xl md:text-[2.75rem] text-[#103754] mb-6 font-medium leading-[1.15] tracking-tight">
              Ducting Contractors in <span className="text-[#154769] font-serif">Hyderabad</span>
            </h2>
            <p className="text-gray-500 mb-10 leading-relaxed text-[15px] max-w-lg">
              At Hyderabad AC Services, we specialize in custom ducting solutions for HVAC systems—designed for efficiency, durability, and noise-free airflow. Whether you're setting up a Centralized AC System, Ventilation System, Commercial Exhaust Setup, or industrial exhaust, we deliver precision and performance.
            </p>

            {/* Features moved to left side below text */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-6 mb-12">
              {ductingFeatures.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full border border-[#b8ccda] flex items-center justify-center text-[#154769] bg-white shadow-sm">
                      <Icon size={18} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-[0.95rem] font-bold text-gray-800 mb-1 leading-tight">
                        {feature.title}
                      </h4>
                      <p className="text-gray-500 text-[12px] leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#154769] text-white text-[14px] font-bold tracking-wider rounded border border-[#154769] shadow-sm hover:bg-transparent hover:text-[#154769] hover:shadow-none transition-all"
            >
              CONTACT US
            </a>
          </div>


          {/* Right Side - Staggered Grid (Image 2 style) */}
          <div className="lg:w-[55%] w-full relative sm:pl-6">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-6 relative">
                
                {/* Horizontal Divider Line */}
                <div className="hidden sm:block absolute top-[50%] left-0 right-0 border-t border-gray-100 z-0"></div>

                {ductingFeatures.map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <div 
                      key={i} 
                      className={`flex items-start gap-4 relative z-10 bg-[#fcfdfd] ${
                        i < 2 ? 'sm:pb-8' : 'sm:pt-8'
                      }`}
                    >
                      {/* Circular Thin-bordered Icon */}
                      <div className="shrink-0 w-12 h-12 rounded-full border border-[#b8ccda] flex items-center justify-center text-[#154769] bg-white shadow-sm mt-1">
                        <Icon size={20} strokeWidth={1.8} />
                      </div>
                      <div className="pt-1">
                        <h4 className="text-[1.05rem] font-bold text-gray-800 mb-2 leading-tight">
                          {feature.title}
                        </h4>
                        <p className="text-gray-500 text-[13px] leading-[1.6]">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  )
                })}

             </div>
          </div>

        </div>
        
        {/* Full Width Image Below the features, since we replaced the image space with the features block */}
        <div className="mt-24 rounded-2xl overflow-hidden shadow-2xl border border-gray-100/50">
          <img 
            src="/DUCTING%20CONTRACTORS.jpg" 
            alt="DUCTING CONTRACTORS" 
            className="w-full h-auto max-h-125 object-cover object-center"
          />
        </div>
        
      </div>
    </section>
  );
}
