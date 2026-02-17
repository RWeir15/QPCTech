import {
  Shield,
  ServerCog,
  Network,
  Phone,
  ScreenShare,
  Camera,
  Printer,
  Users,
} from 'lucide-react';
import type { Service } from '@/lib/types';

export const services: Service[] = [
  {
    id: '1',
    slug: 'managed-it-systems',
    title: 'Managed IT Services',
    shortDescription: 'Proactive IT management and support to keep your business running smoothly.',
    longDescription:
      'Our Managed IT Services provide comprehensive, proactive support for your entire IT infrastructure. We handle everything from network monitoring and maintenance to help desk support and strategic IT planning. By outsourcing your IT management to QPCTech, you can reduce costs, improve efficiency, and focus on your core business goals while we ensure your technology is reliable, secure, and up-to-date.',
    benefits: [
      '24/7 monitoring and support',
      'Predictable monthly costs',
      'Increased operational efficiency',
      'Enhanced network security',
      'Access to expert IT professionals',
    ],
    pricing: {
      model: 'Subscription-based',
      details: 'Tiered plans available based on company size and needs. Contact us for a custom quote.',
    },
    Icon: ServerCog,
    imageId: 'managedIt',
  },
  {
    id: '2',
    slug: 'cybersecurity',
    title: 'Cybersecurity Solutions',
    shortDescription: 'Protect your digital assets with our advanced cybersecurity services.',
    longDescription:
      'In today’s digital landscape, robust cybersecurity is non-negotiable. QPCTech offers multi-layered security solutions to protect your business from evolving threats. Our services include threat intelligence, vulnerability assessments, penetration testing, security awareness training, and incident response. We tailor our strategies to your specific risk profile, ensuring comprehensive protection for your data, applications, and network.',
    benefits: [
      'Protection against malware and ransomware',
      'Data breach prevention',
      'Regulatory compliance (e.g., GDPR, HIPAA)',
      'Employee security training',
      '24/7 security operations center (SOC)',
    ],
    pricing: {
      model: 'Service-based',
      details: 'Pricing varies based on the scope of services. We offer packages and a-la-carte options.',
    },
    Icon: Shield,
    imageId: 'cybersecurity',
  },
  {
    id: '4',
    slug: 'network-infrastructure',
    title: 'Network Infrastructure',
    shortDescription: 'Design, implementation, and management of robust and reliable networks.',
    longDescription:
      'A strong network is the backbone of your business operations. QPCTech specializes in designing, implementing, and managing secure, high-performance network infrastructures. From local area networks (LAN) to wide area networks (WAN) and Wi-Fi solutions, we ensure your connectivity is fast, reliable, and secure. Our services include network design, hardware procurement, installation, and ongoing management.',
    benefits: [
      'High-speed, reliable connectivity',
      'Secure network architecture',
      'Scalable to support business growth',
      'Professional installation and configuration',
      'Ongoing network performance monitoring',
    ],
    pricing: {
      model: 'Project-based & Managed Services',
      details: 'One-time project fees for design and installation, with optional monthly management plans.',
    },
    Icon: Network,
    imageId: 'networkInfrastructure',
  },
  {
    id: '5',
    slug: 'phone-systems',
    title: 'Phone Systems',
    shortDescription: 'Modern, reliable business phone systems.',
    longDescription:
      'Upgrade your business communication with our advanced VoIP phone systems. We offer scalable and feature-rich solutions that provide crystal-clear call quality and seamless integration with your existing workflows. From small offices to large enterprises, we have a phone system to fit your needs.',
    benefits: [
      'Cost-effective calling plans',
      'Advanced features like auto-attendant and voicemail-to-email',
      'Scalable to grow with your business',
      'Reliable and high-quality voice calls',
      'Easy to manage and configure',
    ],
    pricing: {
      model: 'Per-user subscription',
      details: 'Affordable monthly plans that include hardware, support, and calling minutes.',
    },
    Icon: Phone,
    imageId: 'phoneSystems',
  },
  {
    id: '6',
    slug: 'remote-support',
    title: 'Remote Support',
    shortDescription: 'Fast and secure remote assistance for your team.',
    longDescription:
      'Get immediate IT support when you need it most. Our remote support services allow our technicians to securely connect to your systems and resolve issues quickly, minimizing downtime and maximizing productivity. Whether it\'s a software glitch or a configuration issue, we\'re here to help.',
    benefits: [
      'Instant support from our expert technicians',
      'Secure and encrypted remote connections',
      'Reduced downtime and faster issue resolution',
      'Support for a wide range of devices and software',
      'No need for on-site visits for many common issues',
    ],
    pricing: {
      model: 'Included with Managed IT',
      details: 'Remote support is a core component of our managed IT service plans.',
    },
    Icon: ScreenShare,
    imageId: 'remoteSupport',
  },
  {
    id: '7',
    slug: 'physical-security',
    title: 'Physical Security',
    shortDescription: 'Protect your premises with our security solutions.',
    longDescription:
      'Secure your business premises with our comprehensive physical security solutions. We design and install advanced surveillance camera systems, access control systems, and alarm systems to protect your assets and ensure the safety of your employees. Our solutions are tailored to your specific security needs.',
    benefits: [
      'High-definition video surveillance',
      'Controlled access to sensitive areas',
      '24/7 monitoring and alerts',
      'Deterrent against theft and vandalism',
      'Peace of mind knowing your property is protected',
    ],
    pricing: {
      model: 'Project-based',
      details: 'Custom quotes based on the scope of the installation and required hardware.',
    },
    Icon: Camera,
    imageId: 'physicalSecurity',
  },
  {
    id: '8',
    slug: 'printing-and-scanning',
    title: 'Printing & Scanning',
    shortDescription: 'Managed printing and scanning services.',
    longDescription:
      'Streamline your document workflows with our managed printing and scanning services. We provide reliable, high-quality multifunction devices and manage their supplies, maintenance, and support. Reduce your printing costs and improve efficiency with our tailored solutions.',
    benefits: [
      'Cost savings on toner and supplies',
      'Proactive maintenance to reduce downtime',
      'Secure printing and scanning features',
      'Detailed usage reporting and analytics',
      'Environmentally friendly printing options',
    ],
    pricing: {
      model: 'Per-page or subscription',
      details: 'Flexible pricing models to fit your printing volume and budget.',
    },
    Icon: Printer,
    imageId: 'printingScanning',
  },
  {
    id: '9',
    slug: 'community-work',
    title: 'Community Work',
    shortDescription: 'Our commitment to supporting the local community.',
    longDescription:
      'At QPCTech, we believe in giving back to the community that has supported us. We are proud to be involved in various local initiatives and partnerships that aim to make a positive impact. Learn more about our community involvement and how we are working to make a difference.',
    benefits: [
      'Supporting local non-profits and charities',
      'Volunteering our time and expertise',
      'Sponsoring community events',
      'Promoting technology education',
      'Fostering a culture of giving back',
    ],
    pricing: {
      model: 'Not Applicable',
      details: 'Our community work is a core part of our mission, not a paid service.',
    },
    Icon: Users,
    imageId: 'communityWork',
  },
];
