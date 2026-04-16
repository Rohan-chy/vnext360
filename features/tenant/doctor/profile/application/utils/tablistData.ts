import { User, Phone, Settings } from 'lucide-react';
import {
  Briefcase,
  BookOpen,
  ClipboardCheck,
  GraduationCap,
  FileText,
  Users,
  UserCheck,
  CreditCard,
} from 'lucide-react';

export const profileTabs = [
  {
    title: 'Basic Info',
    value: 'basic',
    icon: User,
  },
  {
    title: 'Contact',
    value: 'contact',
    icon: Phone,
  },
  {
    title: 'Account',
    value: 'account',
    icon: Settings,
  },
];

export const doctorVerificationTabs = [
  {
    title: 'Basic Info',
    value: 'basic',
    icon: User,
  },
  {
    title: 'Profession',
    value: 'profession',
    icon: Briefcase,
  },
  {
    title: 'Education',
    value: 'education',
    icon: BookOpen,
  },
  {
    title: 'Experience',
    value: 'experience',
    icon: ClipboardCheck,
  },
  {
    title: 'Training',
    value: 'training',
    icon: GraduationCap,
  },
  {
    title: 'Research',
    value: 'research',
    icon: FileText,
  },
  {
    title: 'Nominee',
    value: 'nominee',
    icon: Users,
  },
  {
    title: 'Relative',
    value: 'relative',
    icon: UserCheck,
  },
  {
    title: 'Bank',
    value: 'bank',
    icon: CreditCard,
  },
];
