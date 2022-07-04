import React, { useState } from 'react';
import Image from 'next/image';
import Cropper from 'react-cropper';
import { dataUrlToFile } from '../../utils/ImageEdit/convertToFile';
import 'cropperjs/dist/cropper.css';
import styles from './ImageUpload.module.css';
import uploadImg from '../../public/image/Img-Upload-Default.png';

export default function ImageUpload({ setCard, card }: { setCard: any; card: any }) {
  const [image, setImage] = useState<string>();
  const [cropData, setCropData] = useState('#');
  const [cropper, setCropper] = useState<any>();

  const onChange = (e: any) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as any);
    };
    reader.readAsDataURL(files[0]);
  };

  const handleUpload = async () => {
    if (typeof cropper !== 'undefined') {
      await setCropData(cropper.getCroppedCanvas().toDataURL());
    }
    /**
     * You can also use this async method in place of dataUrlToFile(url) method.
     * const file = await dataUrlToFileUsingFetch(url, 'output.png', 'image/png')
     */

    const file = dataUrlToFile(cropper.getCroppedCanvas().toDataURL(), 'output.png');

    console.log(`We have File "${file.name}", now we can upload it wherever we want!`);

    let ncard = { ...card, image: file };
    setCard(ncard);

    /**
     * Now that we have a File object, we can upload it to S3 (or anywhere else you want)
     *
     * const params = {
     *   Bucket: "BUCKET_NAME"
     *   Key: "randomId" + .png // You can use nanoid here if you want. This becomes the filename (or key) in S3.
     *   Body: file
     * }
     *
     * // Handle errors with try-catch block...
     * const data = await s3.upload(params)
     * console.log(`File uploaded successfully. ${data.Location}`);
     */
  };

  return (
    <div>
      <div className="mx-auto pt-40 w-full">
        <div className={styles.title}>Upload your image</div>
        {!image ? (
          <>
            <label htmlFor="file" className={styles.label}>
              <Image src={uploadImg} alt="upload your card image" width={369} height={656} layout="fixed" />
            </label>
            <input type="file" name="file" id="file" className={styles.file} onChange={onChange} />
          </>
        ) : (
          <div className={styles.editContainer}>
            <div style={{ width: '100%' }}>
              <Cropper
                style={{ height: 400, width: '100%' }}
                zoomTo={0.5}
                initialAspectRatio={140 / 243.54}
                preview=".img-preview"
                src={image}
                viewMode={1}
                minCropBoxHeight={10}
                minCropBoxWidth={10}
                background={false}
                responsive={true}
                autoCropArea={1}
                checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                onInitialized={(instance) => {
                  setCropper(instance);
                }}
                guides={true}
              />
            </div>
            {cropData && (
              <button className={styles.uploadButton} onClick={handleUpload}>
                Upload
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
