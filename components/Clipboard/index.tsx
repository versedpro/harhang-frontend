import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface ClipboardProps {
  children: React.ReactChild;
  text: string;
}

export default function Clipboard({ children, text }: ClipboardProps) {
  const [copied, setCopied] = useState<boolean>(false);

  return (
    <div className="relative flex flex-col items-center group">
      <CopyToClipboard text={text} onCopy={() => setCopied(true)}>
        {children}
      </CopyToClipboard>

      {copied ? (
        <div className="absolute -top-5 right-9 flex flex-col items-center hidden mb-6 group-hover:flex">
          <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-blue-600 shadow-lg rounded-md">
            Copied
          </span>
          <div className="w-3 h-3 -mt-2 rotate-45 bg-blue-600"></div>
        </div>
      ) : null}
    </div>
  );
}
