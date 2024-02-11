import { useState, useEffect, FormEvent } from 'react';
import * as C from './App.styles';
import * as Photos from './services/photos';
import { Photo } from './types/Photo';
import { PhotoItem } from './components/PhotoItem';

const App = () => {
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      setPhotos(await Photos.getAll());
      setLoading(false);
    }
    getPhotos();
  }, []);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get('image') as File;

    if (file && file.size > 0) {
      setUploading(true);
      let result = await Photos.insert(file);
      setUploading(false);

      if (result instanceof Error) {
        alert(`${result.name} - ${result.message}`);
      } else {
        setKey((prevKey) => prevKey + 1);
        let newPhotoList = [...photos];
        newPhotoList.push(result);
        setPhotos(newPhotoList);
      }
    }
  }

  const handleDelete = async (photoId: string) => {
    const shouldDelete = window.confirm("Tem certeza de que deseja excluir esta foto?");
  
    if (shouldDelete) {
      const deletionSuccessful = await Photos.remove(photoId);
  
      if (deletionSuccessful) {
        let updatedPhotos = photos.filter((photo) => photo.name !== photoId);
        setPhotos(updatedPhotos);
      } else {
        alert("Erro ao excluir a imagem. Por favor, tente novamente.");
      }
    }
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>📸 Galeria de fotos</C.Header>

        {/* Area de upload */}
        <C.UploadForm method="POST" onSubmit={handleFormSubmit}>
          <input key={key} type="file" name="image" />
          <input type="submit" value="Enviar" />
          {uploading && "Enviando..."}
        </C.UploadForm>

        {/* Lista de imagens */}
        {loading && 
          <C.ScreenWarning>
            <div className="emoji">✨</div>
            <div>Carregando...</div>
          </C.ScreenWarning>
        }

        {!loading && photos.length > 0 &&
          <C.PhotoList>
            {photos.map((item, index) => (
            <PhotoItem key={index} url={item.url} name={item.name} onDelete={() => handleDelete(item.name)} />
      ))}
          </C.PhotoList>
        }

        {!loading && photos.length === 0 &&
          <C.ScreenWarning>
            <div className="emoji">😔</div>
            <div>Não há fotos cadastradas.</div>
          </C.ScreenWarning>
        }
      </C.Area>
    </C.Container>
  );
}

export default App;
