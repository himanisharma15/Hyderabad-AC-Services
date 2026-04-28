import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './BlogPage.css';

const posts = [
  {
    title: 'Benefits of Copper Pipe Pre-Installation',
    description:
      'Installing copper pipes in advance ensures correct measurement, proper insulation, and faster AC installation later.',
    category: 'Installation',
    date: 'Blog 1',
    image: '/blogimage1.jpg',
    content: `
      <h2>Benefits of Copper Pipe Pre-Installation for Air Conditioners</h2>
      <p>Installing a new air conditioner is more than just placing the indoor and outdoor units—it requires proper planning, especially when it comes to AC copper pipe installation. Copper pipes are the lifeline of your AC, carrying refrigerant between units to ensure smooth and efficient cooling.</p>
      <p>One of the smartest steps you can take before purchasing and installing an AC is opting for an Air Conditioner copper pipe pre-installation. This ensures that your system runs efficiently from day one and prevents costly issues in the future.</p>

      <h3>What is Copper Pipe Pre-Installation?</h3>
      <p>Copper pipe pre-installation involves setting up the copper piping network in advance, even before the air conditioning unit is installed. This allows for:</p>
      <ul>
        <li>Proper measurement and placement of pipes</li>
        <li>Correct insulation to avoid sweating</li>
        <li>Easy installation of the AC unit later</li>
        <li>Reduced chances of installation errors</li>
      </ul>

      <h3>Benefits of Copper Pipe Pre-Installation</h3>
      <h4>Prevents AC Gas Leakage</h4>
      <p>Improper or rushed installation is one of the biggest causes of AC gas leakage. Pre-installation ensures copper pipes are fitted and insulated correctly, reducing leakage risks.</p>

      <h4>Saves Time During AC Installation</h4>
      <p>With pipes already in place, installing the air conditioner becomes faster and more hassle-free. This is especially beneficial for new homes, offices, or commercial spaces.</p>

      <h4>Enhances Cooling Efficiency</h4>
      <p>Correctly installed AC copper pipes allow refrigerant to flow smoothly, ensuring your AC delivers maximum cooling performance without extra strain on the compressor.</p>

      <h4>Longer Lifespan of AC Unit</h4>
      <p>When copper pipes are properly fitted and insulated during pre-installation, your Air Conditioner experiences fewer breakdowns and lasts longer.</p>

      <h4>Better Aesthetics &amp; Planning</h4>
      <p>Pre-installed copper pipes can be neatly concealed in walls or ceilings, enhancing the overall appearance of your space and eliminating the unsightly presence of exposed pipes.</p>

      <h4>Cost-Effective in the Long Run</h4>
      <p>Though it requires an initial investment, pre-installation saves money by preventing repeated AC repair costs, AC gas refills, and energy wastage.</p>

      <h3>Ideal for New Homes &amp; Commercial Projects</h3>
      <p>If you’re constructing a new home, office, or commercial space, copper pipe pre-installation for ACs is the best choice. It ensures proper planning, neat fittings, and long-term efficiency.</p>

      <h3>Final Thoughts</h3>
      <p>Copper pipe pre-installation is a smart investment for anyone planning to install air conditioners. It improves cooling efficiency, prevents gas leakage, reduces repair costs, and extends the lifespan of your AC. At Hyderabad AC Services, we provide expert AC copper pipe pre-installation services in Hyderabad, ensuring flawless fittings and long-term performance for all types of air conditioners.</p>
      <p><strong>Call us today to plan your AC installation the right way!</strong></p>
    `,
  },
  {
    title: 'Preventing AC Gas Leakage',
    description:
      'Proper repair and maintenance help prevent refrigerant leakage and keep your AC cooling at full performance.',
    category: 'Repair',
    date: 'Blog 2',
    image: '/blogimage2.jpg',
    content: `
      <h2>How to Avoid AC Gas Leakage with Proper AC Repair</h2>
      <p>Air conditioners have become a necessity in homes, offices, and commercial spaces, especially in hot cities like Hyderabad. But one of the most common and frustrating issues AC owners face is AC gas leakage. Not only does it reduce cooling efficiency, but it also increases electricity bills and can damage your system in the long run.</p>
      <p>The good news? With timely AC repair and maintenance, you can easily prevent gas leaks and keep your air conditioner running smoothly.</p>

      <h3>What Causes AC Gas Leakage?</h3>
      <h4>1. Poor Installation</h4>
      <p>Improper fitting of AC copper pipes, loose connections, or a lack of proper sealing often leads to gas leaks in newly installed ACs.</p>

      <h4>2. Wear &amp; Tear of Copper Pipes</h4>
      <p>Over time, AC copper pipes may develop cracks or holes, especially if not insulated properly, leading to refrigerant leaks.</p>

      <h4>3. Corrosion</h4>
      <p>Moisture and pollutants can corrode the coils and pipes, causing AC gas leakage.</p>

      <h4>4. Lack of Maintenance</h4>
      <p>Ignoring regular AC servicing results in clogged filters and dirty coils, which put extra strain on the unit and increase the chances of leaks.</p>

      <h3>Signs of AC Gas Leakage</h3>
      <ul>
        <li>Reduced cooling despite normal settings</li>
        <li>Hissing or bubbling sounds from the unit</li>
        <li>Ice formation on copper pipes or coils</li>
        <li>Higher electricity bills without increased usage</li>
        <li>Foul or unusual smell from the AC</li>
      </ul>
      <p>If you notice any of these signs, it’s time to call for professional AC repair immediately.</p>

      <h3>How Proper AC Repair Helps Prevent Gas Leaks</h3>
      <h4>Correct Installation</h4>
      <p>Certified technicians ensure proper AC fitting, sealing, and insulation of AC copper pipes during installation, minimizing leakage risks.</p>

      <h4>Regular Maintenance</h4>
      <p>Routine AC servicing includes checking refrigerant levels, cleaning coils, and inspecting for early signs of wear and tear.</p>

      <h4>Pipe Insulation &amp; Replacement</h4>
      <p>Properly insulated copper pipes last longer. If damaged, AC technicians replace them with high-quality pipes to prevent leaks.</p>

      <h4>Leak Detection &amp; Rectification</h4>
      <p>Modern AC repair services use advanced leak detection methods to spot even the smallest leaks and fix them before they worsen.</p>

      <h4>Timely AC Gas Refilling</h4>
      <p>If refrigerant levels are low, technicians refill the gas correctly while ensuring no leakage points remain.</p>

      <h3>Final Thoughts</h3>
      <p>AC gas leakage is a preventable problem if you take the right steps. By ensuring professional AC installation, regular AC servicing, and timely AC repairs, you can keep your system leak-free and efficient for years. At Hyderabad AC Services, we specialize in AC gas leak rectification, AC repair, and maintenance services in Hyderabad. Our trained AC technicians in Hyderabad use advanced tools and high-quality materials to ensure long-lasting performance.</p>
      <p><strong>Call us today to schedule your AC service and keep your cooling system running at its best!</strong></p>
    `,
  },
  {
    title: 'Importance of Proper AC Installation',
    description:
      'Proper AC installation improves comfort, energy efficiency, and the overall lifespan of your cooling system.',
    category: 'Installation',
    date: 'Blog 3',
    image: '/blogimage3.jpg',
    content: `
      <h2>The Importance of Proper AC Installation: Comfort, Efficiency &amp; Long-Term Savings</h2>
      <p>When investing in a new air conditioner, most people focus on brand, features, and price. But one factor often overlooked is just as critical—proper AC installation. Even the most advanced air conditioning unit will underperform if not installed correctly. Poor installation not only reduces efficiency but also shortens the lifespan of your AC.</p>
      <p>In this blog, we’ll explore why professional AC installation matters, the risks of improper setup, and how you can benefit from expert services.</p>

      <h3>Why Proper AC Installation is Crucial</h3>
      <h4>Ensures Maximum Cooling Efficiency</h4>
      <p>Air conditioners are designed to cool spaces of specific sizes. Incorrect installation, such as incorrect placement of the indoor or outdoor unit, can lead to uneven cooling and reduced comfort.</p>

      <h4>Prevents Frequent Breakdowns</h4>
      <p>Improper installation often leads to issues like AC gas leaks, drainage problems, or wiring faults. These result in repeated breakdowns and costly repairs. Professional installation minimizes these risks.</p>

      <h4>Energy Efficiency &amp; Lower Bills</h4>
      <p>An Air conditioner that isn’t installed properly has to work harder to maintain the desired temperature, leading to higher electricity bills. Proper alignment, secure sealing, and correct connections ensure energy efficiency.</p>

      <h4>Longer Lifespan of Your Air Conditioner</h4>
      <p>Just like regular maintenance, correct installation directly affects the durability of your air conditioning unit. When everything is fitted properly, the system undergoes less strain and lasts longer.</p>

      <h4>Better Indoor Air Quality</h4>
      <p>Improper installation can cause dust, humidity, and pollutants to leak indoors. With an expert AC setup, your AC filters work efficiently, ensuring clean and healthy air circulation.</p>

      <h3>What Does Proper AC Installation Involve?</h3>
      <p>Professional AC installation typically includes:</p>
      <ul>
        <li>Correct positioning of indoor &amp; outdoor units</li>
        <li>Secure mounting and alignment</li>
        <li>Proper refrigerant (gas) connections</li>
        <li>Gas leak testing and insulation of copper pipes</li>
        <li>Correct wiring and electrical safety checks</li>
        <li>Testing for cooling performance and airflow</li>
      </ul>

      <h3>Final Thoughts</h3>
      <p>Your AC is a long-term investment in comfort and convenience. Proper installation is the foundation of efficient performance, safety, and savings. Don’t compromise by choosing unqualified AC technicians—opt for experienced HVAC professionals who understand the technicalities of AC installation. At Hyderabad AC Services, we specialize in expert AC installation in Hyderabad, ensuring your unit delivers peak performance and durability.</p>
      <p><strong>Contact us today for professional AC installation and enjoy hassle-free cooling all year round!</strong></p>
    `,
  },
  {
    title: 'Importance of Regular AC Service',
    description:
      'Regular servicing improves performance, reduces repair cost, and increases AC lifespan.',
    category: 'Maintenance',
    date: 'Blog 4',
    image: '/blogimage4.jpg',
    content: `
      <h2>The Importance of Regular AC Service: Stay Cool, Save More</h2>
      <p>Air conditioners have become an essential part of modern living, especially in cities like Hyderabad, where summers can be extremely harsh. While most people invest in high-quality air conditioners, many forget one critical factor—regular AC service. Just like any other machine, your AC needs proper care and maintenance to function efficiently.</p>
      <p>In this blog, we’ll cover why regular AC servicing is crucial, its benefits, and how it can save you money in the long run.</p>

      <h3>Why Regular AC Service Matters</h3>
      <h4>Improved Cooling Performance</h4>
      <p>Over time, dust, dirt, and debris accumulate in AC filters and coils, reducing cooling efficiency. Regular service ensures that your AC delivers optimal cooling without overworking.</p>

      <h4>Energy Efficiency &amp; Lower Bills</h4>
      <p>A well-maintained air conditioner consumes less electricity. Dirty filters and clogged ducts force the unit to work harder, leading to higher energy consumption. With timely servicing, you can save significantly on your electricity bills.</p>

      <h4>Prolongs AC Lifespan</h4>
      <p>Ignoring minor issues today can lead to expensive AC repairs or even premature replacement of your AC. Routine maintenance keeps your system in good condition and extends its lifespan.</p>

      <h4>Better Indoor Air Quality</h4>
      <p>AC filters trap dust, allergens, and pollutants. If not cleaned regularly, these particles circulate in your home, affecting air quality. Regular servicing ensures cleaner, healthier air indoors.</p>

      <h4>Prevents Unexpected Breakdowns</h4>
      <p>The last thing you want is your AC breaking down on a hot summer day. Scheduled maintenance detects and resolves small problems before they turn into costly AC repairs.</p>

      <h3>What Does an AC Service Include?</h3>
      <ul>
        <li>Cleaning or replacing air filters</li>
        <li>Checking refrigerant levels (gas top-up if required)</li>
        <li>Inspecting condenser &amp; evaporator coils</li>
        <li>Ensuring proper thermostat function</li>
        <li>Checking electrical components &amp; connections</li>
        <li>Overall performance testing</li>
      </ul>

      <h3>Final Thoughts</h3>
      <p>Regular AC servicing is not an expense—it’s an investment in comfort, efficiency, and health. Whether you own a split AC, a window AC, or a centralized air conditioning system, scheduling timely maintenance ensures peace of mind all year round. If you’re looking for professional AC service in Hyderabad, Hyderabad AC Services provides expert technicians, fast response, and reliable service for all types of air conditioners.</p>
      <p><strong>Contact us today to book your AC service and keep your home cool and comfortable!</strong></p>
    `,
  },
]

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(null);

  const modalMotion = {
    hidden: { opacity: 0, scale: 0.92, y: 24 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.96, y: 18 },
  };

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Blog - Hyderabad AC Services'
  }, [])

  useEffect(() => {
    if (!selectedPost) {
      document.body.style.overflow = '';
      return undefined;
    }

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedPost(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPost]);

  const BlogCard = ({ post }) => (
    <motion.article
      className="blog-card"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className="blog-card__image-wrap">
        <img src={post.image} alt={post.title} className="blog-card__image" />
      </div>

      <div className="blog-card__content">
        <p className="blog-card__meta">
          <span className="blog-card__category">{post.category}</span>
          <span className="blog-card__dot">•</span>
          <span className="blog-card__date">{post.date}</span>
        </p>
        <h3>{post.title}</h3>
        <p className="blog-card__description">{post.description}</p>
        <button type="button" className="blog-card__readmore" onClick={() => setSelectedPost(post)}>
          Read More
        </button>
      </div>
    </motion.article>
  );

  const modalMarkup = (
    <AnimatePresence>
      {selectedPost ? (
        <motion.div
          className="blog-modal-overlay"
          onClick={() => setSelectedPost(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="blog-modal"
            onClick={(event) => event.stopPropagation()}
            variants={modalMotion}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            <button type="button" className="blog-modal__close" onClick={() => setSelectedPost(null)}>
              ✕
            </button>
            <img src={selectedPost.image} alt={selectedPost.title} className="blog-modal__image" />
            <p className="blog-modal__date">
              {selectedPost.category} • {selectedPost.date}
            </p>
            <h3>{selectedPost.title}</h3>
            <div className="blog-modal__content" dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );

  return (
    <div className="blog-page">
      <main className="blog-page__main">
        <section className="blog-hero" aria-labelledby="blog-hero-title">
          <div className="blog-hero__overlay" />
          <div className="blog-hero__card">
            <h1 id="blog-hero-title">Get Started With Professional HVAC Care</h1>
            <p>
              Reliable installation, servicing, and repair solutions to keep your cooling systems
              efficient and dependable.
            </p>
            <a href="/services" className="blog-hero__cta">Request Services</a>
          </div>
        </section>

        <section className="blog-section">
          <span className="blog-section__pill">Blog</span>
          <h2>Stay Informed With Our HVAC Blog</h2>
          <p>
            Latest tips, guides, and maintenance advice to keep your AC systems running at peak
            performance.
          </p>

          <div className="blog-grid">
            {posts.map((post) => (
              <BlogCard key={post.title} post={post} />
            ))}
          </div>
        </section>
      </main>
      {typeof document !== 'undefined' ? createPortal(modalMarkup, document.body) : null}
    </div>
  )
}
