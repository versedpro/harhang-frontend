import { useState } from 'react';
import styles from './CardInfos.module.css';
import TextInput from '../Input/TextInput';
import TextArea from '../Input/TextArea';
import Toggle from '../Input/Toggle';
import { Button } from '../Button';

export default function CardInformation({ setStep }: { setStep: any }) {
  const [name, setName] = useState<string>('');
  const [creator, setCreator] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [copy, setCopy] = useState<string>('');
  const [isPublic, setIsPublic] = useState<boolean>(true);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between py-8">
        <TextInput title="Name" onChange={(e) => setName(e.target.value)} />
        <TextInput title="Artist" onChange={(e) => setCreator(e.target.value)} />
      </div>
      <div className="w-full">
        <TextArea title="Bio" onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className="flex flex-col md:flex-row py-8">
        <TextInput title="Copies" onChange={(e) => setCopy(e.target.value)} />
        <div className="ml-16">
          <Toggle title="Public" checked={isPublic} setValue={setIsPublic} />
        </div>
      </div>
      <div className="mb-8 float-right">
        <Button title="Create" onClick={setStep} />
      </div>
    </div>
  );
}
