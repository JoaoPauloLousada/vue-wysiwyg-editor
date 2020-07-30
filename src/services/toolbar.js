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