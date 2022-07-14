import { PropsWithChildren, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { CreatingCardStates } from '../CreatingProcess';

interface ProcessProps {
  state: number;
}

export default function Process({ state = CreatingCardStates.PROCESSING }: ProcessProps) {
  return (
    <div>
      {state === CreatingCardStates.PROCESSING && <Skeleton circle height="200px" className="bg-primary-100" />}
      <div style={{ display: state === CreatingCardStates.PROCESSING ? 'none' : undefined }}>
        {state === CreatingCardStates.SUCCESS ? (
          <div className="w-[200px] h-[200px] rounded-full bg-success-300"></div>
        ) : (
          <div className="w-[200px] h-[200px] rounded-full bg-error-300"></div>
        )}
      </div>
    </div>
  );
}
