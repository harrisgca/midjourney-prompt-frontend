import { memo, useEffect, useState } from 'react';
import { FileWithExtra } from '@global/types/File.types';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import FileCopyIcon from '@mui/icons-material/FileCopy';

const getImageComponent = (file: FileWithExtra) => {
  if (file.type.match(/image/)) return <img style={{ maxWidth: '10rem' }} src={file.preview} />;
  if (file.type.match(/pdf/))
    return (
      <div className="text-center">
        <PictureAsPdfIcon sx={{ fontSize: '4rem' }} />
      </div>
    );
  return (
    <div className="text-center">
      <FileCopyIcon sx={{ fontSize: '4rem' }} />
    </div>
  );
};

const UploaderThumbnails = ({ files, className }: { files: FileWithExtra[]; className?: string }) => {
  console.log('files', files);
  const [dataUrls, setDataUrls] = useState<string[]>([]);
  useEffect(() => {
    // Any time files change save the data url so we can revoke it when component dismounts
    setDataUrls([...dataUrls, ...files.map(f => f.preview)]);
  }, [files]);

  useEffect(() => {
    return () => {
      dataUrls.forEach(url => URL.revokeObjectURL(url));
    };
  }, []);

  return (
    <div style={{ display: 'flex', marginTop: '2rem' }} className={className}>
      {files.map(file => {
        const ImageComponent = () => getImageComponent(file);
        return (
          <div key={file.name} style={{ maxWidth: '10rem', marginRight: '1rem' }}>
            <ImageComponent />
            <p style={{ wordWrap: 'break-word' }} className="text-center">
              {file.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default memo(UploaderThumbnails);
