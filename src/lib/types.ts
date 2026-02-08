import type { LucideIcon } from 'lucide-react';

export type Service = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  pricing: {
    model: string;
    details: string;
  };
  Icon: LucideIcon;
  imageId: string;
};
