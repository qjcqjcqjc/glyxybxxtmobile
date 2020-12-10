export default {
  // 报修单图片地址
  // bxdimg: 'http://yiban.gxun.edu.cn/bx/bxdimg/',
  // 服务器图标路径
  icons: 'http://yiban.glmc.edu.cn/icons/',
  // 易班授权重定向页面 后台定死，无需修改
  redirect: 'http://yiban.glmc.edu.cn/bx/index.jsp',
  // 报修单详情二维码地址 bid=报修单号  <已不用，使用申报详情页同一模板>
  qrcodePath: '/qrcode', // qrcodeUrl: 'http://yiban.glmc.edu.cn/glmcbx/#/qrcode?bid=',
  // 申报人报修页面路径
  declarePath: '/declare',
  // 该二维码下的申报记录页面路径
  declareEidRecordPath: '/declare-eid-record/:id',
  // 申报记录页面路径
  declareRecordPath: '/declare-record/:id',
  // 申报详情页面路径
  declareDetailsPath: '/declare-details/:id',
  // 接单人页面路径
  receiverRecordPath: '/receiver-record',
  // 接单人申报详情页面路径
  receiverDetailsPath: '/receiver-details/:id',
  // 审核员页面路径
  checkerRecordPath: '/checker-record',
  // 审核员申报详情页面路径
  checkerDetailsPath: '/checker-details/:id',
  // 接单人在职状态描述 value对应接口的state  tag为<el-tag>样式
  states: [
    { text: '在职', value: 1, tag: 'success' },
    { text: '休假', value: 2, tag: 'danger' },
    { text: '离职', value: 3, tag: 'info' }
  ],
  // 工单进度
  progress: [
    { text: '未派单', value: 0, tag: 'danger' },
    { text: '已派单', value: 1, tag: 'primary' },
    { text: '已维修', value: 2, tag: 'success' },
    { text: '撤销单', value: 3, tag: 'info' }
  ],
  // 手机端 审核员的审核状态 tag为<van-tag>样式
  shState: [
    { text: '未审核', value: 0, tag: '' },
    { text: '审核通过', value: 1, tag: 'success' },
    { text: '审核不通过', value: 2, tag: 'danger' },
  ],
  // 校区
  campus: [
    { text: '临桂校区', value: 0 },
    { text: '东城校区', value: 1 }
  ],
  // 区域
  area: ['公共区', '办公区', '生活区', '学习区'],
  // 报修类别
  repairCategory: ['房间灯', '洗手台灯', '厕所灯', '阳台灯', '房间门锁', '厕所门锁', '阳台门锁', '水龙头', '厕所冲水阀', '天花板', '下水道', '热水问题', '风扇', '空调', '插座', '凳子', '桌子', '床', '窗帘', '开关', '其它'],
  // 服务评价文字表述
  evaluate: ['极差', '失望', '一般', '满意', '很满意'],
  // 分页的信息
  paging: {
    currentPage: 1,
    pagesizes: [10, 20, 30, 50, 70, 90],
    pagesize: 50
  }
}
