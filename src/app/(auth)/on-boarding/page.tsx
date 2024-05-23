"use client"

import { trpc } from "@/trpc/client";
import React, { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import StepOne from '@/components/onBoarding/StepOne';
import StepTwo from '@/components/onBoarding/StepTwo';
import { useRouter, useSearchParams } from 'next/navigation'

const onBoarding = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  const progressValue = (step / totalSteps) * 100;
  
  const getUser = trpc.useMutation(['getUser']);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUser.mutate({}, {
      onSuccess: (user) => {
        console.log("les données du user depuis le côté client sont : ", user);
        setLoading(false);
      },
      onError: (error) => {
        console.error("Erreur lors de la récupération des données utilisateur : ", error);
        setLoading(false);
      }
    });
  }, []);

  
    const handleNext = () => {
      if (step < totalSteps) {
        setStep(current => current + 1);
      }
    };
  
    const handleBack = () => {
      if (step > 1) {
        setStep(current => current - 1);
      }
    };

     if (isLoading) {
    return <div>Chargement...</div>;
}

if (isError || !user) {
    return <div>Erreur lors du chargement des données utilisateur.</div>;
}

    return (
        <>
            <div className='container relative flex pt-20 flex-col items-center justify-center lg:px-0'>
                <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
                    <div className='flex flex-col items-center space-y-2 text-center'>
                        <div className="container mx-auto p-4">
                            {step === 1 && <StepOne onNext={handleNext} />}
                            {step === 2 && <StepTwo onNext={handleNext} onBack={handleBack} />}
                      </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default onBoarding
