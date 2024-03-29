import { Photo } from "../types/Photo";
import { storage } from "../libs/firebase";
import { ref, listAll, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { v4 as createId } from "uuid";

export const insert = async (file: File) => {
    if (['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
        let randomName = createId();
        let newFile = ref(storage, `images/${randomName}`);

        let upload = await uploadBytes(newFile, file);
        let photoUrl = await getDownloadURL(upload.ref);
        
        return {
            name: upload.ref.name,
            url: photoUrl
        } as Photo;
    } else {
        return new Error('Tipo de arquivo não permitido!');
    }
}

export const getAll = async () => {
    let list: Photo[] = [];

    const imagesFolder = ref(storage, "images");
    const photoList = await listAll(imagesFolder);

    for (let i in photoList.items) {
        let photoURL = await getDownloadURL(photoList.items[i]);

        list.push({
            name: photoList.items[i].name,
            url: photoURL
        })
    }

    return list;
}

export const remove = async (photoId: string) => {
  const imageRef = ref(storage, `images/${photoId}`);

  try {
    await deleteObject(imageRef);
    return true;
  } catch (error) {
    return new Error("Erro ao excluir a imagem:" + error);
  }
}
