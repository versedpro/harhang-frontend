import React, { useEffect, useMemo, useState } from 'react';
import { Process } from '../Process';
import styles from './CreatingProcess.module.css';

export enum CreatingCardStates {
  PROCESSING,
  SUCCESS,
  FAILED
}

export function CreatingProcess({ setStep }: any) {
  const [ipfsInfo, setIpfsInfo] = useState<any>(null);
  const [nftInfo, setNftInfo] = useState<any>(null);
  const [harfangInfo, setHarfangInfo] = useState<any>(null);

  useEffect(() => {
    // Here, call methods(APIs) to upload assets and create nft
    const uploadToIpfs = async () => {
      // const respone = await uploadCardToIpfs(card);
      console.log('upload card to IPFS');
      setIpfsInfo({
        result: true,
        response: 'cid'
      });
    };
    uploadToIpfs();

    const createNFT = async () => {
      // const reponse = await createNft();
      console.log('Create an NFT on marketplace');
      setNftInfo({
        result: true,
        response: 'link'
      });
    };
    createNFT();

    const addToHarfang = async () => {
      // const response = await addtoharfang();
      console.log('add harfang a card');
      setHarfangInfo({
        result: true,
        response: 'info'
      });
    };
    addToHarfang();
  }, []);

  useEffect(() => {
    if (harfangInfo && harfangInfo.result) setStep();
  }, [harfangInfo, setStep]);

  const ipfsState: CreatingCardStates = useMemo(() => {
    return ipfsInfo && ipfsInfo.result ? CreatingCardStates.SUCCESS : CreatingCardStates.FAILED;
  }, [ipfsInfo]);

  const nftState: CreatingCardStates = useMemo(() => {
    return nftInfo && nftInfo.result ? CreatingCardStates.SUCCESS : CreatingCardStates.FAILED;
  }, [nftInfo]);

  const harfangState: CreatingCardStates = useMemo(() => {
    return harfangInfo && harfangInfo.result ? CreatingCardStates.SUCCESS : CreatingCardStates.FAILED;
  }, [harfangInfo]);

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col justify-center mx-auto">
        <div className={styles.subtitle}>Uploading to IPFS</div>
        <div className="w-[200px] h-[200px] mx-auto my-6">
          <Process state={ipfsState} />
        </div>
        <div className={styles.subtitle}>Creating NFT</div>
        <div className="w-[200px] h-[200px] mx-auto my-6">
          <Process state={nftState} />
        </div>
        <div className={styles.subtitle}>Adding to Harfang</div>
        <div className="w-[200px] h-[200px] mx-auto my-6">
          <Process state={harfangState} />
        </div>
      </div>
    </div>
  );
}
