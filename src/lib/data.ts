import { Shield, Cloud, ServerCog, Network } from 'lucide-react';
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
    id: '3',
    slug: 'cloud-services',
    title: 'Cloud Services',
    shortDescription: 'Leverage the power of the cloud for scalability, flexibility, and innovation.',
    longDescription:
      'Embrace the future with QPCTech’s Cloud Services. We help you migrate, manage, and optimize your cloud infrastructure, whether you prefer public, private, or hybrid cloud environments. Our expertise covers cloud strategy, infrastructure as a service (IaaS), platform as a service (PaaS), and software as a service (SaaS). Achieve greater agility, scalability, and cost-effectiveness with our tailored cloud solutions.',
    benefits: [
      'Seamless migration to the cloud',
      'Scalable resources on demand',
      'Improved collaboration and accessibility',
      'Cost savings on hardware and maintenance',
      'Robust disaster recovery and business continuity',
    ],
    pricing: {
      model: 'Pay-as-you-go & Reserved Instances',
      details: 'Costs depend on cloud provider (AWS, Azure, Google Cloud) and usage. We provide cost optimization services.',
    },
    Icon: Cloud,
    imageId: 'cloudServices',
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
];
