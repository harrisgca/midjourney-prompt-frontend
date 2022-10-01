import { useRef } from 'react';
import { FileDrop } from 'react-file-drop';
import styles from './fileDropTarget.module.scss';

const FileDropTarget = () => {
  const fileInputRef = useRef<{ click: () => void }>(null);
  const onFileInputChange = (event: Event) => {
    // @ts-expect-error because
    const { files } = event.target;
    console.log('files?', files);
    // do something with your files...
  };
  const onTargetClick = () => {
    // @ts-expect-error because
    fileInputRef.current.click();
  };
  return (
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
  );
};

export default FileDropTarget;
