export const handleClick = (event, type, action) => {
  action({ type }) 
  event.target.blur()
}

export const ToolbarTypes = {
  TEXT_COLOR: 'TEXT_COLOR',
  BG_COLOR: 'BG_COLOR',
  HYPERLINK: 'HYPERLINK',
  BOLD: 'BOLD',
  ITALIC: 'ITALIC',
  STRIKETHROUGH: 'STRIKETHROUGH',
  UNDERLINE: 'UNDERLINE',
  ALIGN_LEFT: 'ALIGN_LEFT',
  ALIGN_CENTER: 'ALIGN_CENTER',
  ALIGN_RIGHT: 'ALIGN_RIGHT',
  ALIGN_JUSTIFY: 'ALIGN_JUSTIFY',
}

export const commandTypes = {
  [ToolbarTypes.BOLD]: 'bold',
  [ToolbarTypes.ITALIC]: 'italic',
  [ToolbarTypes.STRIKETHROUGH]: 'strikeThrough',
  [ToolbarTypes.UNDERLINE]: 'underline',
  [ToolbarTypes.ALIGN_CENTER]: 'justifyCenter',
  [ToolbarTypes.ALIGN_LEFT]: 'justifyLeft',
  [ToolbarTypes.ALIGN_RIGHT]: 'justifyRight',
  [ToolbarTypes.ALIGN_JUSTIFY]: 'justifyFull',
}

export const getDocumentCommand = (action) => commandTypes[action];

export const execDocumentCommand = (action) => {
  console.log('getDocumentCommand',getDocumentCommand(action))
  document.execCommand(getDocumentCommand(action))
}