const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  config: state => state.app.config,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,

  bxdCount: state => state.bxd.bxdCount,
  blist: state => state.sbr.blist,
  jblist: state => state.jdr.jblist,
  sblist: state => state.shy.sblist
}
export default getters
