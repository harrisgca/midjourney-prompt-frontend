import { FileWithExtra } from '@global/types/File.types';

const UploaderThumbnails = ({ images }: { images: FileWithExtra[] }) => {
  return (
    <div style={{ display: 'flex' }}>
      {images.map(file => (
        <div key={file.name} style={{ maxWidth: '10rem' }}>
          <div>
            <img
              style={{ maxWidth: '10rem' }}
              src={file.preview}
              // Revoke data uri after image is loaded
              onLoad={() => {
                URL.revokeObjectURL(file.preview);
              }}
            />
            <p>{file.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UploaderThumbnails;
