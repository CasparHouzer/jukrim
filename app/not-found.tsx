'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import Navigation from "./components/Navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Sofortige Weiterleitung zur Startseite
    router.push('/');
  }, [router]);

  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      <Navigation />
      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-[#3676BA] mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3676BA] mb-6">
            Seite nicht gefunden
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Die von Ihnen gesuchte Seite konnte leider nicht gefunden werden. Sie werden zur Startseite weitergeleitet...
          </p>
          <Link
            href="/"
            className="inline-flex items-center bg-[#3676BA] text-white px-6 py-3 rounded-lg hover:bg-[#2a5a8f] font-semibold transition-colors"
          >
            Jetzt zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}

