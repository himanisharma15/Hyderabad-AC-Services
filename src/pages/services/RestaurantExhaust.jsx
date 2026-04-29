import ServiceDetailPage from './ServiceDetailPage'

const serviceData = {
  id: 'restaurant-exhaust',
  title: 'Restaurant Exhaust Installation',
  description: 'Commercial-grade exhaust systems for kitchens with compliant ventilation flow and professional installation.',
  image: 'https://images.pexels.com/photos/3873428/pexels-photo-3873428.jpeg?auto=compress&cs=tinysrgb&w=600',
  features: [
    'CFM requirement calculation',
    'Professional duct design',
    'High-capacity exhaust units',
    'Makeup air system installation',
    'Fire suppression compatibility',
    'Code compliance certification',
  ],
  detailedDescription: `Proper restaurant exhaust is critical for health, safety, and compliance. Our commercial-grade exhaust systems are engineered to handle high heat and grease loads while maintaining proper ventilation throughout the kitchen.

We calculate exact CFM requirements, design efficient ductwork, install makeup air systems, and ensure everything meets local building codes and health regulations. Our team has years of experience with restaurants, hotels, and commercial kitchens.

From small kitchens to large commercial operations, we provide professional exhaust solutions that keep your kitchen safe and compliant.`,
  benefits: [
    {
      title: 'Health Compliance',
      desc: 'Meet all health department requirements.',
    },
    {
      title: 'Safety Standards',
      desc: 'Compliant with fire and ventilation codes.',
    },
    {
      title: 'Efficient Extraction',
      desc: 'No heat or smoke buildup in kitchen.',
    },
    {
      title: 'Odor Control',
      desc: 'Proper ventilation eliminates kitchen odors.',
    },
    {
      title: 'Equipment Protection',
      desc: 'Reduces grease accumulation on equipment.',
    },
    {
      title: 'Professional Installation',
      desc: 'Expert design and installation for optimal performance.',
    },
  ],
}

export default function RestaurantExhaustPageDetail() {
  return <ServiceDetailPage service={serviceData} />
}
