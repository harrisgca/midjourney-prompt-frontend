import { memo, useEffect, useState } from 'react';
import { FileWithExtra } from '@global/types/File.types';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import Lightbox from 'react-image-lightbox';

const isImage = file => file.type.match(/image/);
const isPdf = file => file.type.match(/pdf/);

type ImageComponentProps = {
  file: FileWithExtra;
  onClick?: (e) => void;
};
const ImageComponent = ({ file, onClick }: ImageComponentProps) => {
  if (isImage(file)) return <img onClick={onClick} style={{ maxWidth: '10rem' }} src={file.preview} />;
  if (isPdf(file))
    return (
      <div className="text-center" onClick={onClick}>
        <PictureAsPdfIcon sx={{ fontSize: '4rem' }} />
      </div>
    );
  return (
    <div className="text-center" onClick={onClick}>
      <FileCopyIcon sx={{ fontSize: '4rem' }} />
    </div>
  );
};

const UploaderThumbnails = ({ files = [], className }: { files: FileWithExtra[]; className?: string }) => {
  console.info('files', files);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [dataUrls, setDataUrls] = useState<string[]>([]);

  const handleImageClick = (file: FileWithExtra, index: number) => (e: Event) => {
    console.info('what is e?', e);
    setPhotoIndex(index);
    isImage(file) ? setIsLightboxOpen(true) : window.open(file.preview);
  };

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
      {files.map((file, i) => {
        // const ImageComponent = options => getImageComponent(file, options);
        return (
          <div key={file.name} style={{ maxWidth: '10rem', marginRight: '1rem' }}>
            <ImageComponent onClick={handleImageClick(file, i)} file={file} />
            <p style={{ wordWrap: 'break-word' }} className="text-center">
              {file.name}
            </p>
          </div>
        );
      })}
      {isLightboxOpen && (
        <Lightbox
          mainSrc={files[photoIndex]?.preview}
          mainSrcThumbnail={files[photoIndex]?.preview}
          nextSrc={files[(photoIndex + 1) % files.length]?.preview}
          prevSrc={files[(photoIndex + files.length - 1) % files.length]?.preview}
          onCloseRequest={() => setIsLightboxOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + 1) % files.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % files.length)}
          onImageLoad={() => {
            // Hack to make image load properly with React.StrictMode double rendering.
            // See https://github.com/frontend-collective/react-image-lightbox/issues/589#issuecomment-1159723673
            window.dispatchEvent(new Event('resize'));
          }}
        />
      )}
    </div>
  );
};

export default memo(UploaderThumbnails);
