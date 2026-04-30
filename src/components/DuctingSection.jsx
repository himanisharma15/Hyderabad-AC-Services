import React, { useEffect, useRef } from 'react';
import { PenTool, Fan, ShieldCheck, Wrench } from 'lucide-react';

const whatsappUrl = 'https://wa.me/918712322475?text=Hi%2C%20I%20need%20ducting%20service%20details.';

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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, { threshold: 0.1 });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-[#fcfdfd] font-sans w-full py-24 sm:py-32 overflow-hidden border-b border-gray-100">
      <div 
        ref={containerRef}
        className="mx-auto max-w-[1200px] px-6 lg:px-8 opacity-0 translate-y-8 transition-all duration-700 ease-out"
      >
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          
          {/* Left Side */}
          <div className="lg:w-[45%]">
            <div className="inline-block border-t-[3px] border-blue-600 pt-3 mb-5">
              <span className="text-[13px] font-bold tracking-[0.15em] text-gray-500 uppercase">
                Premium HVAC Solutions
              </span>
            </div>
            <h2 className="text-4xl md:text-[2.75rem] text-gray-900 mb-6 font-medium leading-[1.15] tracking-tight">
              Ducting Contractors in <span className="text-blue-600 font-serif">Hyderabad</span>
            </h2>
            <p className="text-gray-500 mb-10 leading-relaxed text-[15px] max-w-lg">
              At Hyderabad AC Services, we specialize in custom ducting solutions for HVAC systems—designed for efficiency, durability, and noise-free airflow. Whether you're setting up a Centralized AC System, Ventilation System, Commercial Exhaust Setup, or industrial exhaust, we deliver precision and performance.
            </p>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white text-[14px] font-bold tracking-wider rounded border border-blue-600 shadow-sm hover:bg-transparent hover:text-blue-600 hover:shadow-none transition-all"
            >
              CONTACT US
            </a>
          </div>

          {/* Right Side - Premium Infographic Timeline (4 items) */}
          <div className="lg:w-[55%] w-full relative">
            <div className="scrap-services-shell w-full">
              <div className="scrap-services-path" aria-hidden="true" style={{ height: '448px' }}>
                <svg
                  viewBox="0 0 300 500"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ display: 'block', width: '100%', height: '100%', overflow: 'visible' }}
                >
                  <defs>
                    <linearGradient id="arcGradDuct" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#0f172a" />
                    </linearGradient>
                  </defs>
                  
                  <path
                    d="M 298 20 A 240 240 0 0 0 298 428"
                    fill="none"
                    stroke="url(#arcGradDuct)"
                    strokeWidth="38"
                    strokeLinecap="round"
                    opacity="0.25"
                  />
                  
                  {[60, 172, 284, 396].map((cy, i) => (
                    <g key={i}>
                      <circle cx="210" cy={cy} r="12" fill="#ffffff" stroke="#2563eb" strokeWidth="2" />
                      <circle cx="210" cy={cy} r="5"  fill="#2563eb" />
                    </g>
                  ))}
                </svg>
              </div>

              <div className="scrap-services-timeline flex flex-col gap-6 py-2">
                {ductingFeatures.map((feature, idx) => (
                  <div className="scrap-offer-card ducting-infographic-card" key={idx}>
                    <div className="scrap-offer-meta flex items-center flex-1">
                      <span className="scrap-step-badge">{String(idx + 1).padStart(2, '0')}</span>
                      <div className="scrap-offer-copy ml-4">
                        <h4 className="text-white text-sm font-bold uppercase">{feature.title}</h4>
                        <p className="text-white/80 text-[11px] leading-4">{feature.desc}</p>
                      </div>
                    </div>
                    <div className="offer-icon w-10 h-10 rounded-lg bg-white/10 text-white flex items-center justify-center">
                      <feature.icon size={20} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
        
        {/* Full Width Image Below the features, since we replaced the image space with the features block */}
        <div className="mt-24 rounded-2xl overflow-hidden shadow-2xl border border-gray-100/50">
          <img 
            src="/DUCTING%20CONTRACTORS.jpg" 
            alt="DUCTING CONTRACTORS" 
            className="w-full h-auto max-h-[500px] object-cover object-center"
          />
        </div>
        
      </div>
    </section>
  );
}
