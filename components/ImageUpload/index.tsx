import { useEffect, useState } from 'react';
import Image from 'next/image';
import mapOptions from '../../utils/bingmaps/mapOptions';
import styles from './ImageUpload.module.css';
import uploadImg from '../../public/image/Img-Upload-Default.png';

export default function ImageUpload({ setCard, card }: { setCard: any; card: any }) {
  const [imgSrc, setImgSrc] = useState<any>(null);

  const upload = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    console.log(file);
    reader.addEventListener('load', (e) => {
      setImgSrc(e.target?.result);
      console.log(e.target?.result);
      let ncard = { ...card, image: file };
      setCard(ncard);
    });
    reader.readAsDataURL(file);
  };

  return (
    <div className="mx-auto pt-40 w-full">
      <div className={styles.title}>Upload your image</div>
      {!imgSrc ? (
        <>
          <label htmlFor="file" className={styles.label}>
            <Image src={uploadImg} alt="upload your card image" width={369} height={656} layout="fixed" />
          </label>
          <input type="file" name="file" id="file" className={styles.file} onChange={(e) => upload(e)} />
        </>
      ) : (
        <>
          <div className={styles.editContainer}>
            <div className={styles.editBackground}></div>
            <div className={styles.editBox}></div>
            <div className={styles.editBackground}></div>
            <Image src={imgSrc} alt="edit" layout="fill" className={styles.img} />
          </div>
        </>
      )}
    </div>
  );
}
