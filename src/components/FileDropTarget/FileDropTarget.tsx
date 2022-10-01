import { useRef, useState } from 'react';
import { FileDrop } from 'react-file-drop';
import { FileWithExtra } from '@global/types/File.types';
import UploaderThumbnails from '@components/UploaderThumbnails';
import styles from './fileDropTarget.module.scss';

const FileDropTarget = () => {
  const [files, setFiles] = useState<FileWithExtra[]>([]);
  const fileInputRef = useRef<{ click: () => void }>(null);
  const onFileInputChange = (event: Event) => {
    // @ts-expect-error because
    const { files }: { files: { [key: string]: File } } = event.target;
    console.log('files?', files);
    // do something with your files...
    const fileArray = Object.values(files);
    console.log('fileArray', fileArray);
    if (fileArray.length) {
      setFiles(
        fileArray.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    }
  };
  const onTargetClick = () => {
    // @ts-expect-error because
    fileInputRef.current.click();
  };
  return (
    <>
      <div style={{ border: '1px solid black', width: 600, color: 'white', padding: 20, marginTop: '2rem', position: 'relative', cursor: 'pointer' }}>
        <FileDrop
          onFrameDragEnter={event => console.log('onFrameDragEnter', event)}
          onFrameDragLeave={event => console.log('onFrameDragLeave', event)}
          onFrameDrop={event => console.log('onFrameDrop', event)}
          onDragOver={event => console.log('onDragOver', event)}
          onDragLeave={event => console.log('onDragLeave', event)}
          onDrop={(files, event) => console.log('onDrop!', files, event)}
          targetClassName={styles.targetClassName}
          draggingOverTargetClassName={styles.draggingOverTargetClassName}
          draggingOverFrameClassName={styles.draggingOverFrameClassName}
          onTargetClick={onTargetClick}
        >
          Drop some files here! react-file-drop
        </FileDrop>
        {/* @ts-expect-error because */}
        <input onChange={onFileInputChange} ref={fileInputRef} type="file" className={styles.input} multiple />
      </div>
      <UploaderThumbnails images={files} />
    </>
  );
};

export default FileDropTarget;
