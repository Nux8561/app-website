import type { Metadata } from 'next';
import PricingBase from '@/components/ui/pricing-base';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Transparente Preise für IntroGroup Sales Intelligence. Wählen Sie den Plan, der zu Ihrem Business passt.',
};

export default function PricingPage() {
  return <PricingBase />;
}