
export const filterLists = state => {
  return state.lists
    ? state.lists
    : []
}
export const banner = state => {
  return state.banner
    ? state.banner
    : {}
}
export const totals = state => {
  return state.total
    ? state.total
    : 0
}
export const visible = state => {
  return state.visible
    ? state.visible
    : false
}

export const shown = state => {
  return state.shown
    ? state.shown
    : false
}

export const menulist = state => {
  return state.menulist
    ? state.menulist
    : []
}
