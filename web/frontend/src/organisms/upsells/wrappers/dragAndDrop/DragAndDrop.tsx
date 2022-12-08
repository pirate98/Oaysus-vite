import {
  ConnectDragSource,
  ConnectDropTarget,
  useDrag,
  useDrop,
} from "react-dnd";

const upsellsRow = "upsellsRow";

interface Props {
  children: (drag: ConnectDragSource, drop: ConnectDropTarget) => JSX.Element;
  id: number;
  onDrop: () => void;
}

export function DragAndDrop({ children, id, onDrop }: Props) {
  const [collected, drag, dragPreview] = useDrag(() => ({
    type: upsellsRow,
    item: { id },
  }));

  const [collectedProps, drop] = useDrop(() => ({
    accept: upsellsRow,
    drop: (item, monitor) => {
      onDrop(item, id);
    },
  }));

  return children(drag, drop);
}
