'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Icons } from '@/shared/icons';

const genderMap: Record<number, string> = {
  0: 'Male',
  1: 'Female',
  2: 'Other',
};

export default function DoctorProfileCard({ profile = {} }: any) {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const fullName =
    [profile?.title, profile?.firstName, profile?.middleName, profile?.lastName]
      .filter(Boolean)
      .join(' ')
      .trim() || '—';

  const imageUrl =
    profile.imageBaseAddress && profile.imagePath
      ? `http://${profile.imageBaseAddress}${profile.imagePath}`
      : '';

  return (
    <>
      <div className="rounded-2xl overflow-hidden shadow-lg border border-[var(--border)] bg-[var(--card)] text-[var(--card-foreground)]">
        {/* Header Section */}
        <div className="p-6 bg-[var(--primary)] text-[var(--primary-foreground)]">
          <div className="flex flex-col md:flex-row items-center gap-5">
            {/* Avatar */}
            <div className="relative">
              <Avatar className="h-24 w-24 border-4 border-[var(--card)] shadow-md">
                {imageUrl ? <AvatarImage src={imageUrl} /> : null}

                <AvatarFallback delayMs={0} className="text-black text-xl">
                  {(profile?.firstName?.charAt(0) || '?').toUpperCase()}
                </AvatarFallback>
              </Avatar>

              {/* View Image */}
              {imageUrl && (
                <button
                  onClick={() => setPreviewImage(imageUrl)}
                  className="absolute bottom-0 right-0 border  p-1 rounded-full shadow  transition-colors"
                >
                  <Icons.Maximize2 size={14} />
                </button>
              )}
            </div>

            {/* Name + Specialization */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold">{fullName}</h2>

              <p className="text-sm opacity-90 mt-1">
                {profile.categoryName}
                {profile.subCategoryName && ` • ${profile.subCategoryName}`}
              </p>

              {profile.councilRegistrationNumber && (
                <p className="text-sm opacity-90 mt-1">
                  NMC • {profile.councilRegistrationNumber}
                </p>
              )}

              {/* Verification */}
              <div className="mt-3">
                <Badge
                  className={`px-3 py-1 text-sm rounded-full flex items-center gap-1 text-[8px] ${
                    profile.isVerified
                      ? 'bg-[var(--card)] text-primary'
                      : 'bg-[var(--card)] text-[var(--destructive)]'
                  }`}
                >
                  {profile.isVerified ? (
                    <Icons.CheckCircle size={14} />
                  ) : (
                    <Icons.AlertCircle size={14} />
                  )}
                  {profile.isVerified
                    ? 'Vnext360 Verified Profile'
                    : 'Unverified'}
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Body Section */}
        <div className="p-6 space-y-3">
          {/* Section Title */}
          <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
            Personal Information
          </h3>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <InfoItem
              icon={<Icons.User />}
              label="Gender"
              value={genderMap[profile.gender] || '—'}
            />

            <InfoItem
              icon={<Icons.Calendar />}
              label="Date of Birth"
              value={
                profile.dateOfBirth
                  ? new Date(profile.dateOfBirth).toLocaleDateString()
                  : '—'
              }
            />

            <InfoItem
              icon={<Icons.Calendar />}
              label="DOB (NP)"
              value={profile.dateOfBirthNp || '—'}
            />

            <InfoItem
              icon={<Icons.Phone />}
              label="Contact"
              value={`${profile.countryCode || ''} ${profile.contactNumber || ''}`}
            />

            <InfoItem
              icon={<Icons.Mail />}
              label="Email"
              value={profile.email || '—'}
            />
          </div>
          {profile?.briefBio && (
            <div className="space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                About Doctor
              </h3>

              <p className="text-sm text-[var(--foreground)] leading-relaxed">
                {profile.briefBio}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Image Modal */}
      <Dialog open={!!previewImage} onOpenChange={() => setPreviewImage(null)}>
        <DialogContent className="max-w-4xl p-0">
          <DialogTitle className="sr-only">Image Preview</DialogTitle>
          {previewImage && (
            <img
              src={previewImage}
              alt="Doctor Full-size"
              className="w-full max-h-[80vh] object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

/* 🔹 Reusable Info Item */
function InfoItem({ icon, label, value }: any) {
  return (
    <div className="flex items-start gap-3 px-3 py-1 rounded-lg bg-[var(--card)] hover:bg-[var(--secondary)] transition-colors border border-[var(--border)]">
      <div className="text-[var(--muted-foreground)]">{icon}</div>
      <div>
        <p className="text-xs text-[var(--muted-foreground)]">{label}</p>
        <p className="text-sm font-medium text-[var(--foreground)]">{value}</p>
      </div>
    </div>
  );
}
