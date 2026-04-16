import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Stethoscope,
  Users,
  CalendarClock,
  FileText,
  ShieldCheck,
} from 'lucide-react';
import Navbar from './Navbar';

export default function DoctorLandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* ================= NAVBAR ================= */}
      {/* <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Stethoscope className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">Nep-Care</span>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Join as Doctor</Link>
            </Button>
          </div>
        </div>
      </header> */}
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
          Manage patients. Grow your practice.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
          Nep-Care helps doctors manage appointments, consult patients online,
          and maintain digital medical records all in one secure platform.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/register">Register as Doctor</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<Users className="h-6 w-6 text-primary" />}
            title="Patient Management"
            description="View, manage, and track patient histories in one place."
          />
          <FeatureCard
            icon={<CalendarClock className="h-6 w-6 text-primary" />}
            title="Smart Scheduling"
            description="Manage appointments and availability efficiently."
          />
          <FeatureCard
            icon={<Stethoscope className="h-6 w-6 text-primary" />}
            title="Online Consultation"
            description="Consult patients remotely via secure digital tools."
          />
          <FeatureCard
            icon={<FileText className="h-6 w-6 text-primary" />}
            title="Digital Records"
            description="Maintain structured and secure medical records."
          />
        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold">
            Built for Healthcare Professionals
          </h2>

          <div className="mt-8 flex flex-col items-center justify-center gap-6 md:flex-row">
            <TrustItem text="HIPAA-ready Data Handling" />
            <TrustItem text="Secure Doctor Authentication" />
            <TrustItem text="Privacy-first Infrastructure" />
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-center text-2xl font-semibold">How It Works</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <StepCard
            step="1"
            title="Register & Verify"
            description="Create your doctor profile and complete verification."
          />
          <StepCard
            step="2"
            title="Set Availability"
            description="Define your schedule and consultation preferences."
          />
          <StepCard
            step="3"
            title="Consult Patients"
            description="Start seeing patients online or in-person."
          />
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nep-Care. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
        {icon}
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function TrustItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <ShieldCheck className="h-5 w-5 text-primary" />
      <span>{text}</span>
    </div>
  );
}

function StepCard({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardContent className="p-6 text-center">
        <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
          {step}
        </div>
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
