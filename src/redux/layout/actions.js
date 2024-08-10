export const SET_HEADER_VISIBLE = "layout/SET_HEADER_VISIBLE";
export const SET_FOOTER_VISIBLE = "layout/SET_FOOTER_VISIBLE";

export const setHeaderVisible = (isVisible) => ({
  type: SET_HEADER_VISIBLE,
  payload: isVisible,
});

export const setFooterVisible = (isVisible) => ({
  type: SET_FOOTER_VISIBLE,
  payload: isVisible,
});
