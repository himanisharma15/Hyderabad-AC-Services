
import React from 'react';
import { PhoneIcon, MailIcon, ArrowLocationIcon } from './ContactIcons';
import './BranchesSection.css';

const BranchesSection = () => {
  const branches = [
    {
      id: 1,
      icon: PhoneIcon,
      title: 'Phone',
      details: [
        { label: 'Toll-Free:', value: '+91 8712322475' },
        { label: 'Fax:', value: '+91 8712322475' }
      ],
      link: 'tel:+918712322475',
      color: 'phone',
    },
    {
      id: 2,
      icon: MailIcon,
      title: 'Email',
      details: [
        { label: '', value: 'info@hyderabadacservices.com' },
        { label: '', value: 'support@hyderabadacservices.com' }
      ],
      link: 'mailto:info@hyderabadacservices.com',
      color: 'email',
    },
    {
      id: 3,
      icon: ArrowLocationIcon,
      title: 'Address',
      details: [
        { label: '', value: 'Hyderabad,' },
        { label: '', value: 'India' }
      ],
      link: 'https://www.google.com/maps/search/Hyderabad,+India/@17.3850,78.4867,13z',
      color: 'address',
    },
  ];

  return (
    <section className="branches-section">
      <div className="branches-container">
        <div className="branches-header">
          <h2 className="branches-title">Reach Out, We're Ready</h2>
          <p className="branches-subtitle">
            Multiple ways to connect with our support team
          </p>
        </div>

        <div className="branches-grid">
          {branches.map((branch) => {
            const Icon = branch.icon;
            return (
              <a
                key={branch.id}
                href={branch.link}
                className={`branch-card branch-card--${branch.color}`}
                target={branch.color === 'address' ? '_blank' : undefined}
                rel={branch.color === 'address' ? 'noopener noreferrer' : undefined}
              >
                <div className="branch-icon-wrapper">
                  <Icon size={40} className="branch-icon" />
                </div>
                <h3 className="branch-title">{branch.title}</h3>
                <div className="branch-details">
                  {branch.details.map((detail, idx) => (
                    <p key={idx} className="branch-detail-line">
                      {detail.label && <span className="branch-detail-label">{detail.label}</span>}
                      <span className="branch-detail-value">{detail.value}</span>
                    </p>
                  ))}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;
