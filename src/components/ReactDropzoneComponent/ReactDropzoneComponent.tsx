import { useState, useRef } from 'react';
import cn from 'classnames';
import { useDropzone } from 'react-dropzone';
import useOutsideClick from '@hooks/useOutsideClick';
import { FileWithExtra } from '@global/types/File.types';
import UploaderThumbnails from '@components/UploaderThumbnails';
import styles from './reactDropzoneComponent.module.scss';

function ReactDropzoneComponent() {
  /* Hooks */
  const [isClickActive, setIsClickActive] = useState(false);
  const [files, setFiles] = useState<FileWithExtra[]>([]);
  const wrapperRef = useRef(null);

  /* Methods */
  const onDrop = (acceptedFiles: any[]) => {
    // Do something with the files
    console.log('acceptedFiles', acceptedFiles);
    if (acceptedFiles) {
      setIsClickActive(false);
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    }
  };
  const handleContainerClick = () => {
    setIsClickActive(true);
    open();
  };
  const handleUpload = async () => {
    console.log('upload files');
    for (let index = 0; index < files.length; index++) {
      const element = files[index];
      const body = new FormData();
      body.append('image', element);

      try {
        const uploadResponse = await fetch('https://httpbin.org/post', {
          method: 'POST',
          body,
        });
        const glenn = await uploadResponse.json();
        console.log('uploadResponse', uploadResponse);
        console.log('glenn', glenn, glenn?.files?.image);
        window.open(glenn?.files?.image)?.focus();
      } catch (error) {
        console.log('error? -> ', error);
      }
    }
  };

  const handleClickOutside = () => (isClickActive ? setIsClickActive(false) : null);
  useOutsideClick(wrapperRef, handleClickOutside);

  /* Lib stuff */
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({ onDrop });
  const rootProps = getRootProps();
  const inputProps = getInputProps();

  /* Styles */
  const containerProps = cn(styles.container, {
    [styles.active]: isDragActive || isClickActive,
  });

  return (
    <div ref={wrapperRef}>
      <div {...rootProps} className={containerProps} onClick={handleContainerClick}>
        <input {...inputProps} />
        {isDragActive ? <p>Drop the files here ...</p> : <p>Drag and drop some files here, or click to select files</p>}
      </div>
      <UploaderThumbnails files={files} />
      <button type="button" onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
}

export default ReactDropzoneComponent;
