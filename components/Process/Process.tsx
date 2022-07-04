import { PropsWithChildren, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './Process.module.css';
import { CreatingCardStates } from '../CreatingProcess';

interface ProcessProps {
  state: number;
}

export default function Process({ state = CreatingCardStates.PROCESSING }: ProcessProps) {
  return (
    <div>
      {state === CreatingCardStates.PROCESSING && <Skeleton circle height="200px" className={styles.circleSkeleton} />}
      <div style={{ display: state === CreatingCardStates.PROCESSING ? 'none' : undefined }}>
        {state === CreatingCardStates.SUCCESS ? (
          <div className={styles.success}></div>
        ) : (
          <div className={styles.failed}></div>
        )}
      </div>
    </div>
  );
}
