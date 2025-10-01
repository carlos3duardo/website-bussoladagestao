'use client';

import Lottie from 'lottie-react';

import errorIcon from '@/assets/lotties/network-error.json';

export function Error() {
  return (
    <div className="flex flex-col items-center gap-4">
      <figure className="mx-auto mt-8 h-24 w-24">
        <Lottie animationData={errorIcon} />
      </figure>
      <p>Inscrição não encontrada ou sem permissão para visualização.</p>
    </div>
  );
}
