import ServicesSection from './ServicesSection';
import ProcessSection from './ProcessSection';
import styles from './ServicesPage.module.css';

export default function ServicesPage({ onBookNow }) {
  return (
    <main className={styles.page}>
      <ServicesSection onBookNow={onBookNow} />
      <ProcessSection />
    </main>
  );
}
