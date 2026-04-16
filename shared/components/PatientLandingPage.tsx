import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ShieldCheck,
  Stethoscope,
  CalendarCheck,
  Pill,
  MapPin,
} from 'lucide-react';
import Navbar from './Navbar';

export default function PatientLandingPage() {
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
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </div>
      </header> */}
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
          Book doctor appointments instantly
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
          Consult verified doctors, manage your medical records, and track your
          health all in one secure platform.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/register">Register as Patient</Link>
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
            icon={<CalendarCheck className="h-6 w-6 text-primary" />}
            title="Book Appointments"
            description="Schedule appointments with doctors and hospitals in seconds."
          />
          <FeatureCard
            icon={<Stethoscope className="h-6 w-6 text-primary" />}
            title="Online Consultation"
            description="Consult doctors remotely through secure digital channels."
          />
          <FeatureCard
            icon={<Pill className="h-6 w-6 text-primary" />}
            title="Medicine Reminders"
            description="Never miss a dose with smart medicine reminders."
          />
          <FeatureCard
            icon={<MapPin className="h-6 w-6 text-primary" />}
            title="Nearby Hospitals"
            description="Find trusted hospitals and clinics near your location."
          />
        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold">
            Trusted Healthcare Platform
          </h2>

          <div className="mt-8 flex flex-col items-center justify-center gap-6 md:flex-row">
            <TrustItem text="Verified Doctors & Hospitals" />
            <TrustItem text="Secure & Encrypted Medical Data" />
            <TrustItem text="Privacy-first Architecture" />
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-center text-2xl font-semibold">How It Works</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <StepCard
            step="1"
            title="Register"
            description="Create your patient account in under a minute."
          />
          <StepCard
            step="2"
            title="Find Care"
            description="Search doctors, hospitals, and specialties."
          />
          <StepCard
            step="3"
            title="Consult or Visit"
            description="Book appointments or consult online."
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
