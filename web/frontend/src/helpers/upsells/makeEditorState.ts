export const makeEditorState = (
  text: string
): string => `{"root":{"children":[{"children":\
[{"detail":0,"format":0,"mode":"normal","style":"","text":"${text}","type":"text","version":1}],\
"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],\
"direction":null,"format":"","indent":0,"type":"root","version":1}}`;
