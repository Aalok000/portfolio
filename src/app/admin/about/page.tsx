import { getPortfolioData } from '@/lib/data';
import AdminAboutForm from './AdminAboutForm';

export default async function AdminAboutPage() {
  const portfolioData = await getPortfolioData();

  if (!portfolioData?.about) {
    return <div>Could not load "About" data. Please check your data source.</div>;
  }
  
  return <AdminAboutForm data={portfolioData.about} />;
}
