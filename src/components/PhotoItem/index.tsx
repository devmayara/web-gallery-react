import * as C from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

type Props = {
    url: string;
    name: string;
    onDelete: () => void;
}

export const PhotoItem = ({ url, name, onDelete }: Props) => {
    return (
        <C.Container>
            <C.Trash onClick={onDelete}>
                <FontAwesomeIcon icon={faTrash} />
            </C.Trash>
            <img src={url} alt={name} />
            <span>{name}</span>
        </C.Container>
    );
}
