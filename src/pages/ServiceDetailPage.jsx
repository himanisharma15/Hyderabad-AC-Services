import { useParams, Navigate } from 'react-router-dom';
import ServiceLayout from '../components/ServiceLayout';
import { serviceDetails } from '../data/serviceDetails';

export default function ServiceDetailPage({ onBookNow }) {
  const { slug } = useParams();
  
  // Get data for this specific service slug
  const data = serviceDetails[slug];

  if (!data) {
    // If slug not found in our data, redirect to services home
    return <Navigate to="/services" replace />;
  }

  return <ServiceLayout data={data} onBookNow={onBookNow} />;
}
