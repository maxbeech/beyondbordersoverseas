'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactUsRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/contact');
  }, [router]);
  
  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-lg text-gray-600">Redirecting to contact page...</p>
    </div>
  );
} 