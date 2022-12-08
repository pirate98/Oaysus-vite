import { createContext } from "react";
import { useDrop } from "react-dnd";

interface DndContext {
  isOver: boolean;
  type: string;
  extraDropTypes: string[];
}

export const DndContext = createContext<DndContext>({} as DndContext);

interface Props {
  children?: React.ReactNode;
  type: string;
  extraDropTypes?: string[];
}

export function DropZoneDetectionProvider({
  children,
  type,
  extraDropTypes = [],
}: Props) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: [type, ...extraDropTypes],
    collect: (monitor) => {
      // console.log(monitor);
      return {
        isOver: !!monitor.isOver(),
      };
    },
  }));

  return (
    <DndContext.Provider value={{ isOver, type, extraDropTypes }}>
      <div ref={drop}>{children}</div>
    </DndContext.Provider>
  );
}
