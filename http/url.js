var config = {
  BaseUrl: 'https://t2.toolmall.com'
};

export default {

  /**
   * 获取图形验证码
   */
  Captchaurl: config.BaseUrl + "/verify/captcha",

  /**
   * 校验图形验证码
   */
  Checkcodeurl: config.BaseUrl + "/verify/checkcode",

  /**
   * 登录链接
   */
  Loginurl: config.BaseUrl + "/merchant/back/users/login",

  /**
   * 微信绑定接口
   */
  weChatBindingUrl: config.BaseUrl + "/merchant/back/users/weChatBinding",

  /**
   * 退出登录链接
   */
  Logouturl: config.BaseUrl + "/merchant/back/users/userlogout",

  /**
   * 注册链接
   */
  Registurl: config.BaseUrl + "/merchant/back/users/register",

  // 用户注册，一步完成，信息简化
  SimpleRegistUrl: config.BaseUrl + "/merchant/back/users/userRegister",

  /**--
   * 发送短信验证码
   */
  SendMobileUrl: config.BaseUrl + "/verify/mobileVerifyCode",

  /**
   * 校验短信验证码
   */
  CheckMobileCodeUrl: config.BaseUrl + "/verify/validateMobileVerifyCode",

  /**
   * 查询用户信息接口
   */
  UserInfoUrl: config.BaseUrl + "/merchant/back/users/getUserInfo",

  /**
   * 修改用户手机号码
   */
  ModifyUserPhoneUrl: config.BaseUrl + "/merchant/back/users/modifyMobile",

  /**
   * 重置登录密码
   */
  ResetPwdUrl: config.BaseUrl + "/merchant/back/users/reset",

  /**
   * 忘记密码
   */
  FindPwdUrl: config.BaseUrl + "/verify/reset",

  /**
   * 注册时校验用户名是否存在
   */
  CheckUserNameUrl: config.BaseUrl + "/verify/checkUserByUserName",

  /**
   * 完善用户注册信息
   */
  PerfectUserInfoUrl: config.BaseUrl + "/merchant/back/users/completeRegister",

  /**
   * 获取用户账户信息
   */
  PersonCenter: config.BaseUrl + "/merchant/back/users/userPersonalCenter",

  /**
   * 获取用户权益信息
   */
  PersonDiscount: config.BaseUrl + "/merchant/back/userExtendInfo/queryMineService",

  /**
   * 获取登陆用户信息
   */
  GetLoginUserInfoUrl: config.BaseUrl + "/merchant/back/users/getLoginUserInfo",

  /**
   * 上传文件的服务器
   */
  UploadFileUrl: config.BaseUrl + "/verify/uploadBusinessLicense",

  /**
   * 校验手机号码是否存在
   */
  CheckMobileUrl: config.BaseUrl + "/verify/checkMobilePhoneNumber",

  /**
   * 注册步骤一： 输入了手机号、图片验证码、短信验证码、同意注册协议之后
   */
  registStepOne: config.BaseUrl + "/merchant/back/users/firstRegister",

  /**
   * 注册步骤二： 输入了用户名、密码之后
   */
  registStepTwo: config.BaseUrl + "/merchant/back/users/secondRegister",
  /**
   *  活动保存用户信息
   */
  saveUserNews: config.BaseUrl + "/verify/savePotentialCustomer",

  /**
   *  根据用户名查询用户信息
   */
  findByUserName: config.BaseUrl + "/merchant/back/users/findByUserName",

  /*
   * 更新用户注册信息
   * */
  updateRegister: config.BaseUrl + '/merchant/back/users/updateRegister',


  //----------------------------组织管理------------------------

  /**
   * 获取组织树-王斌
   */
  GetAllStructureUrl: config.BaseUrl + "/merchant/back/job/getAllStructure",

  /**
   * 获取组织树
   */
  GetallorgUrl: config.BaseUrl + "/merchant/back/org/getAllOrg",

  /**
   * 增加子公司
   */
  AddcompanyUrl: config.BaseUrl + "/merchant/back/org/addCompany",

  /**
   * 获取子公司列表
   */
  QueryCompanyList: config.BaseUrl + "/merchant/back/org/queryCompanyList",

  /**
   * 增加部门
   */
  AdddepartmentUrl: config.BaseUrl + "/merchant/back/dept/addDepartment",

  /**
   * 删除公司
   */
  DeleteorgUrl: config.BaseUrl + "/merchant/back/org/delete",

  /**
   * 删除部门
   */
  DeletedeptUrl: config.BaseUrl + "/merchant/back/dept/delete",

  /**
   * 根据公司id获取子公司列表
   */
  getCompanyListUrl: config.BaseUrl + "/merchant/back/org/queryCompanyList",

  //----------------------------岗位管理------------------------

  /**
   * 增加岗位
   */
  AddjobUrl: config.BaseUrl + "/merchant/back/job/addJob",

  /**
   * 删除岗位
   */
  DeletejobUrl: config.BaseUrl + "/merchant/back/job/delete",

  /**
   * 获取所有岗位
   */
  GetalljobUrl: config.BaseUrl + "/merchant/back/job/getAllJob",

  //----------------------------角色管理------------------------

  /**
   * 增加角色
   */
  AddroleUrl: config.BaseUrl + "/merchant/back/role/addRole",

  /**
   * 删除角色
   */
  DeleteroleUrl: config.BaseUrl + "/merchant/back/role/delete",

  /**
   * 获取所有角色
   */
  GetallroleUrl: config.BaseUrl + "/merchant/back/role/getAllRole",

  //----------------------------角色权限管理------------------------

  /**
   * 角色权限管理-权限编辑
   */
  SaveUserRoleAuthorityoUrl: config.BaseUrl + "/merchant/back/roleauthority/saveRoleAuthority",

  /**
   * 获取角色权限管理列表
   */
  GetUserRoleAuthorityListUrl: config.BaseUrl + "/merchant/back/roleauthority/getCompanyRoleVoList",

  /**
   * 角色权限管理-权限展示
   */
  ShowOneRoleAuthorityInfo: config.BaseUrl + "/merchant/back/roleauthority/getRoleAuthorityMenuButtons",

  /**
   * 角色权限管理-权限搜索
   */
  SearchRoleAuthority: config.BaseUrl + "/merchant/back/roleauthority/searchRoleAuthority",

  //----------------------------岗位角色管理（废弃)------------------------

  /**
   * 角色权限编辑
   */
  GetRoleAuthorityUrl: config.BaseUrl + "/merchant/back/positionrole/getRoleAuthority",

  /**
   * 获取所有该公司下所有角色
   */
  GetCompanyRolesUrl: config.BaseUrl + "/merchant/back/positionrole/getCompanyRoles",

  /**
   * 岗位角色管理列表
   */
  GetPositionListUrl: config.BaseUrl + "/merchant/back/positionrole/getPositionList",

  /**
   *岗位对应角色列表
   */
  GetPositionRoleListUrl: config.BaseUrl + "/merchant/back/positionrole/getPositionRoleList",

  /**
   * 角色权限编辑保存
   */
  SaveRoleAuthorityUrl: config.BaseUrl + "/merchant/back/positionrole/saveRoleAuthority",


  //----------------------------首页菜单数据------------------------
  /**
   * 获取首页菜单数据
   */
  getIndexMenus: config.BaseUrl + "/merchant/back/menus/getIndexMenus",

  /**
   * 获取首页友情链接
   */
  getFriendshipLinkList: config.BaseUrl + "/verify/getFriendshipLinkList",

  /**
   * 新增首页友情链接
   */
  saveFriendshipLink: config.BaseUrl + "/verify/saveFriendshipLink",

  /**
   * 新增首页默认搜索词
   */
  getDefaultKeyword: config.BaseUrl + "/merchant/back/default/getDefaultKeyword",

  //----------------------------用户权限------------------------
  /**
   * 用户权限—岗位编辑
   */
  EditUserPositionUrl: config.BaseUrl + "/merchant/back/userauthority/editUserPosition",

  /**
   * 获取用户权限列表
   */
  GetAllUserPositionUrl: config.BaseUrl + "/merchant/back/userauthority/getAllUserPosition",

  /**
   * 用户权限—岗位展示
   */
  GetOneUserAndPositionUrl: config.BaseUrl + "/merchant/back/userauthority/getOneUserAndPosition",

  /**
   * 用户权限—权限展示
   */
  GeteditUserAuthorityAdjustnUrl: config.BaseUrl + "/merchant/back/userauthority/editUserAuthorityAdjust",

  /**
   * 用户权限—搜索
   */
  SearchUserAuthority: config.BaseUrl + "/merchant/back/userauthority/searchUserAuthority",

  /**
   * 用户权限—权限跳转保存
   */
  SaveUserAuthorityAdjustUrl: config.BaseUrl + "/merchant/back/userauthority/saveUserAuthorityAdjust",

  //----------------------------用户管理------------------------

  /**
   * 获取这个用户的公司及其子公司
   */
  getCompanyListByUserIdUrl: config.BaseUrl + "/merchant/back/userManage/getCompanyListByUserId",

  /**
   * 获取这个公司的所有部门
   */
  getDeptListByCompanyIdUrl: config.BaseUrl + "/merchant/back/userManage/getDeptListByCompanyId",

  /**
   * 获取这个部门的所有岗位
   */
  getPositionListByDeptIdUrl: config.BaseUrl + "/merchant/back/userManage/getPositionListByDeptId",

  /**
   * 用户管理—新增用户
   */
  saveUserManageUrl: config.BaseUrl + "/merchant/back/userManage/save-user-manage",

  /**
   * 用户管理—编辑用户
   */
  updateUserManageUrl: config.BaseUrl + "/merchant/back/userManage/update-user-manage",

  /**
   * 用户权限-角色编辑-角色展示
   */
  getAllRoleUrl: config.BaseUrl + "/merchant/back/userManage/getAllRole",

  /**
   * 用户管理列表
   */
  getUserManageListUrl: config.BaseUrl + "/merchant/back/userManage/getUserManageList",

  /**
   * 用户管理列表查询兼模糊搜索查询
   */
  searchUserManageVoListUrl: config.BaseUrl + "/merchant/back/userManage/searchUserManageVoList",

  /**
   * 用户权限-权限调整-显示菜单按钮
   */
  getUserAuhtorityMenuButtonsUrl: config.BaseUrl + "/merchant/back/userManage/getUserAuthorityMenuButtons",

  /**
   * 用户权限-权限调整-显示菜单按钮
   */
  saveUserAuthorityUrl: config.BaseUrl + "/merchant/back/userManage/saveUserAuthority",

  /**
   * 用户管理—删除用户
   */
  deleteUserManageUrl: config.BaseUrl + "/merchant/back/userManage/delete-user-manage",

  //----------------------------发票管理------------------------

  /**
   * 获取发票信息
   */
  getInvoiceUrl: config.BaseUrl + "/merchant/back/invoice/getInvoice",

  /**
   * 保存发票信息
   */
  saveInvoiceUrl: config.BaseUrl + "/merchant/back/invoice/saveInvoice",

  /**
   * 订单开票
   */
  drawOrderInvoiceUrl: config.BaseUrl + "/merchant/back/invoice/drawOrderInvoice",

  /**
   * 对账单开票
   */
  checkOrderInvoice: config.BaseUrl + "/merchant/back/invoice/checkOrderInvoice",

  /**
   * 新增发票信息
   */
  updateInvoiceUrl: config.BaseUrl + "/merchant/back/invoice/updateInvoice",

  /**
   * 删除发票信息
   */
  deleteInvoiceUrl: config.BaseUrl + "/merchant/back/invoice/deleteInvoice",

  /**
   * 用户已申请的发票列表
   */
  appliedInvoice: config.BaseUrl + "/merchant/back/invoice/invoiceList",
  /**
   * 发票关联商品列表
   */
  reApplicationList: config.BaseUrl + "/merchant/back/invoice/invoiceProductList",

  /**
   * 查询发票邮寄物流信息
   */
  getInvoiceLogistic: config.BaseUrl + "/merchant/back/invoice/getLogistic",

  /**
   * 获取发票状态枚举
   */
  getInvoiceStatusEnum: config.BaseUrl + "/merchant/back/invoice/getInvoiceStatusEnum",

  /**
   * 获取发票类型枚举
   */
  getInvoiceTypeEnum: config.BaseUrl + "/merchant/back/invoice/getInvoiceTypeEnum",

  /**
   * 发票冲红、作废
   */
  abolishInvoice: config.BaseUrl + "/merchant/back/invoice/rush",

  /**
   * 发票冲红/作废申请反馈
   */
  abolishInvoiceFeedback: config.BaseUrl + "/merchant/back/invoice/feedBack",

  /**
   * 获取发票冲红反馈类型枚举
   */
  getInvoiceFeedBackTypeEnum: config.BaseUrl + "/merchant/back/invoice/getInvoiceFeedBackTypeEnum",

  /**
   * 发票签收
   */
  signedInvoice: config.BaseUrl + "/merchant/back/invoice/signedInvoice",

  //----------------------------商品转换管理------------------------
  /**
   * 删除公司商品记录
   */
  DeletecompanyProductUrl: config.BaseUrl + "/merchant/back/companyProduct/delete",

  /**
   * 查询公司商品列表
   */
  FindPageListUrl: config.BaseUrl + "/merchant/back/companyProduct/findPageList",

  /**
   * 批量导入商品模板
   */
  ImportExcelUrl: config.BaseUrl + "/merchant/back/companyProduct/importExcel",

  /**
   * 新增公司商品记录
   */
  SavecompanyProductUrl: config.BaseUrl + "/merchant/back/companyProduct/save",

  /**
   * 根据商品id或名称查询商品信息
   */
  QuerySelectListUrl: config.BaseUrl + "/merchant/demandorder/querySelectList",

  /**
   * 修改公司商品记录
   */
  UpdateCompanyProductUrl: config.BaseUrl + "/merchant/back/companyProduct/update",


  //----------------------------购物车管理------------------------
  /**
   * 获取购物车列表
   */
  GetCartListUrl: config.BaseUrl + "/merchant/back/cart/getCartList",

  /**
   * 购物车增加
   */
  AddCart: config.BaseUrl + "/merchant/back/cart/addCart",

  /**
   * 商品数量增减
   */
  DecreOrIncre: config.BaseUrl + "/merchant/back/cart/decreOrIncre",

  /**
   * 删除购物车
   */
  DelCart: config.BaseUrl + "/merchant/back/cart/delCart",


  //----------------------------采购单管理------------------------

  /**
   * 下单保存
   */
  proPlaceOrderurl: config.BaseUrl + "/merchant/purchaseorder/proPlaceOrder",

  /**
   * 获取下单数据
   */
  getproPlaceOrderurl: config.BaseUrl + "/merchant/purchaseorder/proPlaceOrder",

  /**
   * 采购单下单
   */
  PlaceOrderUrl: config.BaseUrl + "/merchant/purchaseorder/placeOrder",

  /**
   * 订单过期提醒
   */
  getDefaultOrderExpireTime: config.BaseUrl + "/merchant/purchaseorder/getDefaultOrderExpireTime",

  /**
   * 转账凭证提交
   */
  UploadCredentialsUrl: config.BaseUrl + "/merchant/purchaseorder/uploadCredentials",

  /**
   * 查看合同
   */
  getOrderContract: config.BaseUrl + "/merchant/purchaseorder/getOrderContract",
  /**
   * 下载合同
   */
  downloadOrderContract: config.BaseUrl + "/merchant/purchaseorder/downloadOrderContract",

  /**
   * 交易快照
   */
  findSnapShot: config.BaseUrl + "/merchant/snapshot/findSnapshot",


  //----------------------------物流管理------------------------
  /**
   * 查询物流
   */
  GetLogisticUrl: config.BaseUrl + "/merchant/logistic/getLogistic",

  //----------------------------收货地址管理------------------------

  /**
   * 获取省市区
   */
  GetAreaUrl: config.BaseUrl + "/merchant/back/users/getArea",

  /**
   * 获取公司收获地址
   */
  getRecieverAddressListUrl: config.BaseUrl + "/merchant/back/users/getRecieverAddressList",
  /**
   * 新增公司收获地址
   */
  AddRecieverAddressUrl: config.BaseUrl + "/merchant/back/users/addRecieverAddress",

  /**
   * 根据id删除公司收获地址
   */
  DeleteRecieverAddressUrl: config.BaseUrl + "/merchant/back/users/deleteRecieverAddress",

  /**
   * 修改公司收获地址
   */
  UpdateRecieverAddressurl: config.BaseUrl + "/merchant/back/users/updateRecieverAddress",

  /**
   * 设置默认地址
   */
  SetDefaultAddressurl: config.BaseUrl + "/merchant/back/users/setDefaultAddress",


  //----------------------------场景分类------------------------

  /**
   * 场景列表
   */
  getPlanSceneList: config.BaseUrl + "/merchant/back/scene/getPlanSceneList",

  /**
   * 根据场景ID查询详情
   */
  getPlanSceneContent: config.BaseUrl + "/merchant/back/scene/getPlanSceneContent",

  /**
   * 根据焦点ID查询焦点商品
   */
  getPlanSceneFocusProductList: config.BaseUrl + "/merchant/back/scene/getPlanSceneFocusProductList",

  //----------------------------需求单管理------------------------

  /**
   * 退款申请
   */
  cancelOrderRequest: config.BaseUrl + "/merchant/cancelOrder/cancelOrderRequest",

  /**
   * 撤销申请
   */
  cancelRequest: config.BaseUrl + "/merchant/cancelOrder/cancelOrder",

  /**
   * 查询订单取消列表（当前审核状态等）
   */
  getCancelOrderList: config.BaseUrl + "/merchant/cancelOrder/getCancelOrderList",

  /**
   * 查询退货单的详情
   */
  getCancelOrderDetails: config.BaseUrl + "/merchant/cancelOrder/getCancelOrderDetails",

  /**
   * 修改退款申请
   */
  modifyRequest: config.BaseUrl + "/merchant/cancelOrder/modifyCancelOrderRequest",

  /**
   * 查询退款订单详情
   */
  getRefundOrderDetails: config.BaseUrl + "/merchant/cancelOrder/getCancelOrderDetailsByCancelId",

  /**
   * 查询退款状态枚举
   */
  getOrderCancelStatusEnum: config.BaseUrl + "/merchant/cancelOrder/getOrderCancelStatusEnum",

  /**
   * 提交退货退款物流信息
   */
  cancelOrderLogistics: config.BaseUrl + "/merchant/cancelOrder/cancelOrderLogistics",

  /**
   * 获取退货退款物流信息
   */
  getRefundOrderLogistics: config.BaseUrl + '/merchant/cancelOrder/getCancelOrderLogistics',

  /**
   * 获取退货退款取消原因枚举
   */
  getRefundsCancelReasonEnum: config.BaseUrl + '/merchant/cancelOrder/getRefundsCancelReasonEnum',

  /**
   * 获取待发货取消原因枚举
   */
  getProCancelReasonEnum: config.BaseUrl + '/merchant/cancelOrder/getProCancelReasonEnum',

  /**
   * 获取金额流向枚举
   */
  getAmountFlowEnum: config.BaseUrl + '/merchant/cancelOrder/getAmountFlowEnum',

  /**
   * 补款申请
   */
  supplementaryRequest: config.BaseUrl + '/merchant/cancelOrder/supplementaryRequest',

  /**
   * 售后详情
   */
  getRefundInfo: config.BaseUrl + '/merchant/cancelOrder/refundInfo',

  /**
   * 获取可售后商品列表
   */
  getCanCancelProductList: config.BaseUrl + '/merchant/cancelOrder/getCanCancelProductList',

  /**
   * 取消需求订单
   */
  CancelDemandOrderUrl: config.BaseUrl + "/merchant/demandorder/cancelDemandOrder",

  /**
   * 查询全部询价单
   */
  GetAllDemandOrderUrl: config.BaseUrl + "/merchant/demandorder/getAllDemandOrder",

  /**
   * 询价单  确认采购
   */
  confirmPurchases: config.BaseUrl + "/merchant/proposalorder/confirmPurchase",

  /**
   * 根据订单id查询需求价单
   */
  GetDemandOrderUrl: config.BaseUrl + "/merchant/demandorder/getDemandOrder",

  /**
   * 解析Excel模板
   */
  ParseExcelUrl: config.BaseUrl + "/merchant/demandorder/parseExcel",

  /**
   * 保存需求订单
   */
  SaveDemandOrderUrl: config.BaseUrl + "/merchant/demandorder/saveDemandOrder",

  /**
   * 根据商品id或名称查询商品信息
   */
  QueryProductInfoUrl: config.BaseUrl + "/merchant/demandorder/queryProductInfo",

  /**
   * 根据商品id或名称查询商品信息
   */
  QueryProductListUrl: config.BaseUrl + "/pc/product/getQueryList",

  /**
   * 根据商品id查询报价单信息
   */
  QueryOfferOrderUrl: config.BaseUrl + "/merchant/proposalorder/getProposalOrder",

  // 获取分批发货申请列表
  getPartialShipList: config.BaseUrl + "/merchant/purchaseorder/getPartialShipList",

  // 获取审核类型枚举（分批发货申请状态枚举开始用到的）
  getAuditStatusEnum: config.BaseUrl + "/merchant/purchaseorder/getAuditStatusEnum",

  //----------------------------采购单------------------------

  /**
   * 获取对账单列表
   */
  GetbillOrderVoListUrl: config.BaseUrl + "/merchant/purchaseorder/billOrderVoList",

  /**
   * 采购单管理中的全部订单查询
   */
  AllPurchaseUrl: config.BaseUrl + "/merchant/purchaseorder/getAllOrder",

  /**
   * 采购单管理中的订单状态查询
   */
  PurchaseOrderStatusUrl: config.BaseUrl + "/merchant/purchaseorder/getPurchaseOrderStatusEnum",

  /**
   * 采购单id查询采购单商品详情
   */
  QueryPurchaseOrderUrl: config.BaseUrl + "/merchant/purchaseorder/getOrderById",
  /**
   * 商品详情页运费
   */
  calculatePostageForProduct: config.BaseUrl + "/merchant/back/product/calculatePostageForProduct",

  /**
   * 计算订单运费
   */
  calculatePostage: config.BaseUrl + "/merchant/purchaseorder/calculatePostage",

  /**
   * 获取订单免邮费总价
   */
  getFreeTotal: config.BaseUrl + "/merchant/purchaseorder/getFreeTotal",


  /**
   * 查询订单详情
   */
  QueryOrderDetailUrl: config.BaseUrl + "/merchant/purchaseorder/getOrderDetail",

  /**
   * 获取热搜
   */
  getHotWords: config.BaseUrl + "/merchant/back/default/getHotWords",

  /**
   * 获取历史搜索
   */
  getSearchHistory: config.BaseUrl + "/merchant/back/searchHistory/getSearchHistory",

  /**
   * 清除历史搜索记录
   */
  delSearchHistory: config.BaseUrl + "/merchant/back/searchHistory/delSearchHistory",

  /**
   * 搜索下拉提示
   */
  getSuggest: config.BaseUrl + "/merchant/back/product/suggest",

  // 获取商品详情浏览历史
  findProductBrowseHistoryList: config.BaseUrl + "/merchant/back/product/findProductBrowseHistoryList",

  // 删除商品详情浏览历史
  deleteProductBrowseHistory: config.BaseUrl + "/merchant/back/product/deleteProductBrowseHistory",


  /**
   * 订单的更改状态   (deprecated)
   */
  PurchaseOrderStUrl: "",
  // PurchaseOrderStUrl : config.BaseUrl + "/merchant/purchaseorder/updateOrderStatus",

  /**
   * 取消订单
   */
  PurchaseOrderCancel: config.BaseUrl + "/merchant/purchaseorder/cancelOrder",

  /**
   * 订单验收
   */
  orderConfirm: config.BaseUrl + "/merchant/orderConfirm/orderConfirm",

  /**
   * 会员等级
   */
  memberLevel: config.BaseUrl + "/merchant/back/userExtendInfo/queryMember",

  /**
   * 提醒配置
   */
  remindMessage: config.BaseUrl + "/merchant/back/userMessageSet/queryMessageSet",

  /**
   * 消息提醒列表
   */
  getRemindMessage: config.BaseUrl + "/merchant/back/messageRemind/queryMessageList",

  /**
   * 消息提醒列表设置
   */
  setRemindMessage: config.BaseUrl + "/merchant/back/messageRemind/changReadStatus",

  /**
   * 提醒状态
   */
  remindMessageStatus: config.BaseUrl + "/merchant/back/userMessageSet/changeRemindStatus",

  /**
   * 积分查询
   */
  queryPoint: config.BaseUrl + "/merchant/back/userPoint/queryPointLog",

  /**
   * 积分计算细则
   */
  queryPointSet: config.BaseUrl + "/merchant/back/userPoint/queryPointSet",

  /**
   * 积分计算说明
   */
  getPointRuleMemo: config.BaseUrl + "/merchant/back/userPoint/getPointRuleMemo",

  /**
   * 赠送积分
   */
  givePoint: config.BaseUrl + "/merchant/back/userPoint/givePoint",

  /**
   * 采购单审核的更改状态
   */
  PurchaseOrderDetailUrl: config.BaseUrl + "/merchant/purchaseorder/getOrderDetail",

  /**
   * 撤销申请
   */
  CancelRequestUrl: config.BaseUrl + "/merchant/cancelOrder/cancelOrder",

  /**
   * 获取分批发货商品列表
   */
  getPartialShipProductList: config.BaseUrl + "/merchant/purchaseorder/getPartialShipProductList",

  /**
   * 提交分批发货申请
   */
  submitPartialShip: config.BaseUrl + "/merchant/purchaseorder/partialShip",

  /**
   * 订单评价
   */
  orderEvaluation: config.BaseUrl + "/merchant/evaluation/orderEvaluation",

  /**
   * 子订单评价（物流评价）
   */
  childOrderEvaluation: config.BaseUrl + "/merchant/evaluation/childOrderEvaluation",

  /**
   * 评价接口
   */
  sameEvaluation: config.BaseUrl + "/merchant/back/userEvaluation/queryEvaluationSet",

  /**
 * 查看评价内容
 */
  queryEvaluateByType: config.BaseUrl + "/merchant/back/userEvaluation/queryEvaluateByType",

  /**
   * 提交评价接口
   */
  submitEvaluation: config.BaseUrl + "/merchant/back/userEvaluation/evaluate",

  //----------------------------账期管理------------------------

  /**
   * 账期申请提交
   */
  BillingApplicateUrl: config.BaseUrl + "/merchant/back/accountPeriod/save-account-period",

  /**
   * 获取账期列表
   */
  BillingListUrl: config.BaseUrl + "/merchant/back/accountPeriod/get-account-period",

  /**
   * 获取账期详情
   */
  BillingDetail: config.BaseUrl + "/merchant/back/accountPeriod/getDetail",

  /**
   * 获取当前已启用账期
   */
  EnabledBilling: config.BaseUrl + "/merchant/back/accountPeriod/getEnabled",

  /**
   * 获取账期支付方式枚举
   */
  BillingPayment: config.BaseUrl + "/merchant/back/accountPeriod/getPaymentTypeEnum",

  /**
   * 查询账期支付逾期订单列表
   */
  getOverdueOrderList: config.BaseUrl + "/merchant/back/accountPeriod/getOverdueOrderList",

  /**
   * 提交账期超期说明
   */
  saveOverdueOrderDesc: config.BaseUrl + "/merchant/back/accountPeriod/saveOverdueOrderDesc",

  /**
   * 获取账期超期审核结果
   */
  getOverdueOrderCheckResult: config.BaseUrl + "/merchant/back/accountPeriod/getOverdueOrderCheckResult",

  //----------------------------首页分类------------------------

  /**
   * 首页全部分类类目信息接口
   */
  HomeMenuUrl: config.BaseUrl + "/pc/productCategory/getTreeList",

  /**
   * 首页今日推荐和轮播位接口
   */
  HomeAdvertUrl: config.BaseUrl + "/merchant/back/product/recommends",

  /**
   * 首页楼层接口
   */
  HomeFloorUrl: config.BaseUrl + "/merchant/back/product/products",


  //----------------------------  商品详情页 ------------------------

  /**
   * 商品信息查询接口
   */
  ProductChangeInfo: config.BaseUrl + "/merchant/back/product/findById",

  /**
   * 分类搜索显示商品列表
   */
  GetPrdList: config.BaseUrl + "/merchant/back/product/database/search",

  GetPrdListClint: config.BaseUrl + "/merchant/back/product/database/search",

  /*
   * 商品规格 以及 同规格的兄弟产品列表
   * */
  ProductSpecification: config.BaseUrl + "/merchant/back/product/specification",
  /*
   * 猫工推荐搭配（相关商品）的商品列表
   * */
  ProductRelatedProducts: config.BaseUrl + "/merchant/back/product/relatedProducts",
  /*
   * 分类搜索显示商品列表
   * */
  //  GetPrdList : config.BaseUrl + "/pc/shop/product/searchShopProducts",
  /*
   * 搜索关键字显示商品列表
   * */
  searchBC: config.BaseUrl + "/merchant/back/product/engineSearch",
  /*
   * 立即购买一个商品的校验
   * */
  QueryProductBuyCheck: "",
  /*
   * 查看同级分类
   * */
  getSiblingList: config.BaseUrl + "/pc/productCategory/getSiblingList",


  //---------------------------- 场景采购 ------------------------

  /**
   * 获取场景采购商品列表
   */
  GetSceneProduct: config.BaseUrl + "/merchant/back/product/getSceneProduct",

  /**
   * 获取场景id列表
   */
  getSceneId: config.BaseUrl + "/merchant/back/scene/findListByCompanyId",

  /**
   * 获取场景采购商品列表
   */
  getProductList: config.BaseUrl + "/merchant/back/scene/findProductByCompanyScene",


  //----------------------------  支付 ------------------------
  /**
   * 支付订单
   */
  Payurl: config.BaseUrl + "/merchant/back/pay/pay",

  /**
   * 获取支付方式枚举
   */
  GetPaymentTypeEnumurl: config.BaseUrl + "/merchant/back/accountPeriod/getPaymentTypeEnum",

  /**
   * 微信支付结果，请求接口
   */
  getWePayStateUrl: config.BaseUrl + "/merchant/scanPayNotify/getOrderStatus",

  /**
   * 微信支付结果，请求接口 19年版本
   */
  queryPayStatus: config.BaseUrl + "/merchant/back/pay/queryPayStatus",

  //----------------------------  活动 ------------------------

  /**
   * 样本册活动请求接口
   */
  getActivityOrderUrl: config.BaseUrl + "/merchant/activity/activityOrder",

  /**
   * 保存客户信息
   */
  getSaveCustomerInfoUrl: config.BaseUrl + "/merchant/back/activityProject/saveCustomerInfo",

  /**
   * 记录用户领取口罩
   */
  getRecordUserGetMask: config.BaseUrl + "/verify/recordUserGetMask",

  //----------------------------  品牌 ------------------------

  /**
   * 查询品牌列表，返回的结果根据品牌拼音首字母进行分组排序
   */
  getBrandListUrl: config.BaseUrl + "/merchant/back/brand/pinyinList",

  /**
   * 根据品牌ID查询商品分类
   */
  getCategoriesByBrandUrl: config.BaseUrl + "/merchant/back/productCategory/getByBrandId",

  /**
   * 根据品牌ID和类目ID查询商品列表
   */
  getPrdsByBrandCategoryUrl: config.BaseUrl + "/merchant/back/product/findByBrandAndCategory",

  /*
   * 根据品牌id来查询商品信息（类目到商品的树）
   * */
  getPrdsByBrandUrl: config.BaseUrl + "/merchant/back/product/findByBrand",

  /*
   * 根据商品一级分类获取二级分类和对应分类的品牌列表
   * */
  getBrandTreeOfCategoryUrl: config.BaseUrl + "/merchant/back/productCategory/getChildAndBrand",

  //----------------------------  SEO（搜索引擎优化） ------------------------
  /**
   * 搜索引擎优化信息
   */
  getSeoConfig: config.BaseUrl + "/merchant/back/seoConfig/getSeoConfig",

  //----------------------------  广告位 ------------------------
  /**
   * 获取广告位的数据
   */
  //批量
  getAdvertisingPositionBatch: config.BaseUrl + "/merchant/back/advertise/batchAdvertisingPosition",

  //单个
  getAdvertisingPosition: config.BaseUrl + "/merchant/back/advertise/getAdvertisingPosition",


  //----------------------------  用户数据统计 ------------------------
  /**
   * 订单统计
   */
  getOrderStatis: config.BaseUrl + "/merchant/orderStatis/getOrderStatis",

  /**
   *商品统计
   */
  getProductStatis: config.BaseUrl + "/merchant/orderStatis/getProductStatis",

  //----------------------------  智能报价 ------------------------

  /**
   * 解析excel
   */
  importFile: config.BaseUrl + "/merchant/back/intelliQuote/importFile",

  /**
   * 数据翻页
   */
  pageTurning: config.BaseUrl + "/merchant/back/intelliQuote/pageTurning",

  /**
   * 更改选择商品
   */
  replaceProduct: config.BaseUrl + "/merchant/back/intelliQuote/replaceProduct",

  /**
   * 更改选择商品
   */
  changeAmount: config.BaseUrl + "/merchant/back/intelliQuote/changeAmount",

  /**
   * 删除一条记录
   */
  delRequest: config.BaseUrl + "/merchant/back/intelliQuote/delRequest",

  /**
   * 确认提交需求
   */
  submitDemand: config.BaseUrl + "/merchant/back/intelliQuote/submitDemand",

  /**
   * 去结算
   */
  addToCart: config.BaseUrl + "/merchant/back/intelliQuote/addToCart",

  /**
   * 询价前选择公司的所属行业
   */
  getCompanyIndustryList: config.BaseUrl + "/merchant/back/intelliQuote/getIndustryList",

  //----------------------------  问题反馈 ------------------------

  /**
   * 获取问题反馈枚举
   */
  getQuestionFeedbackEnum: config.BaseUrl + "/merchant/back/users/getQuestionFeedbackEnum",

  /**
   * 保存问题反馈
   */
  saveQuestionFeedback: config.BaseUrl + "/merchant/back/users/saveQuestionFeedback",

  /*--------------------------------   盒马生鲜  -----------------------------*/

  /**
   * 获取登陆用户所属总公司信息
   */
  getLoginUserHeadCompany: config.BaseUrl + '/merchant/back/users/getLoginUserHeadCompany',

  /**
   * 根据标签和分类列表查询商品信息
   */
  getByFirstCategoryAndLabel: config.BaseUrl + '/merchant/back/product/getByFirstCategoryAndLabel',


  //---------------------------- 改版后的询价模块 -------------------------------

  /**
   * 上传询价单文件
   */
  putEnquiryImportFileUrl: config.BaseUrl + '/merchant/back/enquiry/importFile',

  /**
   * 询价单提交
   */
  getEnquirySubmitUrl: config.BaseUrl + '/merchant/back/enquiry/submit',

  /**
   * 询价单保存
   */
  getEnquirySaveUrl: config.BaseUrl + '/merchant/back/enquiry/storage',

  /**
   * 查询全部询价单
   */
  getAllEnquiryOrder: config.BaseUrl + '/merchant/back/enquiry/getAllEnquiryOrder',

  /**
   * 查询推荐客户
   */
  getCustomerList: config.BaseUrl + '/merchant/back/userExtendInfo/queryReferrerUser',

  /**
   * 查询询价单枚举
   */
  getEnquiryEnum: config.BaseUrl + '/merchant/back/enquiry/getEnquiryEnum',

  /**
   * 取消询价单
   */
  enquiryCancel: config.BaseUrl + '/merchant/back/enquiry/enquiryCancel',

  /**
   * 获取询价单详情
   */
  getByEnquiryId: config.BaseUrl + '/merchant/back/enquiry/getByEnquiryId',

  /**
   * 查询询价单进程
   */
  getEnquiryProcess: config.BaseUrl + '/merchant/back/enquiry/getProcess',

  /**
   * 询价列表中的某个商品取消
   */
  detailCancel: config.BaseUrl + '/merchant/back/enquiry/detailCancel',

  /**
   * 商品驳回报价
   */
  detailRejectQuote: config.BaseUrl + '/merchant/back/enquiry/detailRejectQuote',

  /**
   * 驳回配单
   */
  rejectEnquiry: config.BaseUrl + '/merchant/back/enquiry/rejectEnquiry',

  /**
   * 询价单中的意见反馈
   */
  enquiryFeedBack: config.BaseUrl + '/merchant/back/enquiry/feedBack',

  /**
   * 获取当前商品的意见反馈数据
   */
  getProductFeedBack: config.BaseUrl + '/merchant/back/enquiry/getFeedBack',

  /**
   * 查询历史报价数据
   */
  getHistoryOffer: config.BaseUrl + '/merchant/back/enquiry/getHistoryOffer',

  /**
   * 询价单确认配单
   */
  enquiryConfirmed: config.BaseUrl + '/merchant/back/enquiry/enquiryConfirmed',

  /**
   * 询价单确认报价
   */
  confirmQuote: config.BaseUrl + '/merchant/back/enquiry/confirmQuote',


  //---------------------------- 改版后的对账单管理 -------------------------------

  /**
   * 生成对账单列表
   */
  getGenerateOrderReconciliationList: config.BaseUrl + '/merchant/orderReconciliation/getGenerateOrderReconciliationList',

  /**
   * 生成对账单暂存
   */
  saveOrderReconciliation: config.BaseUrl + '/merchant/orderReconciliation/saveOrderReconciliation',

  /**
   * 生成对账单提交
   */
  submitOrderReconciliation: config.BaseUrl + '/merchant/orderReconciliation/submitOrderReconciliation',

  /**
   * 对账单列表
   */
  getOrderReconciliationList: config.BaseUrl + '/merchant/orderReconciliation/getOrderReconciliationList',

  /**
   * 对账单详情
   */
  getOrderReconciliation: config.BaseUrl + '/merchant/orderReconciliation/getOrderReconciliation',

  /**
   * 取消-废除对账单详情
   */
  abolishOrderReconciliation: config.BaseUrl + '/merchant/orderReconciliation/abolishOrderReconciliation',

  /**
   * 获取对账单状态枚举
   */
  getOrderReconciliationStatusEnum: config.BaseUrl + '/merchant/orderReconciliation/getOrderReconciliationStatusEnum',

  /**
   * 获取对账单冲账结算方式枚举
   */
  getReconciliationPayWayEnum: config.BaseUrl + '/merchant/orderReconciliation/getReconciliationPayWayEnum',

  /**
   * 获取对账单订单支付状态
   */
  getAccountPayResult: config.BaseUrl + '/merchant/back/pay/getAccountPayResult',

  /**
   * 提交支付记录
   */
  commitReconciliationPayRecord: config.BaseUrl + '/merchant/orderReconciliation/commitReconciliationPayRecord',

  /**
   * 获取对账单开票状态枚举
   */
  getOrderReconciliationInvoiceStatusEnum: config.BaseUrl + '/merchant/orderReconciliation/getOrderReconciliationInvoiceStatusEnum',


  //---------------------------- 虚拟库 -------------------------------

  // 虚拟库申请
  warehouseApply: config.BaseUrl + '/merchant/virtualWarehouse/apply',

  // 重新申请虚拟库
  warehouseReApply: config.BaseUrl + '/merchant/virtualWarehouse/againApply',

  // 通过excel导入商品数据
  warehouseExportProduct: config.BaseUrl + '/merchant/virtualWarehouse/exportProduct',

  // 根据当前公司id查询用户的所有虚拟库
  warehouseGetAll: config.BaseUrl + '/merchant/virtualWarehouse/getAll',

  // 查询虚拟库的申请详情
  warehouseGetApplyItem: config.BaseUrl + '/merchant/virtualWarehouse/getApplyItem',

  // 获取虚拟仓库状态枚举
  warehouseGetEnum: config.BaseUrl + '/merchant/virtualWarehouse/getEnum',

  // 根据虚拟库id查询当前虚拟库的商品信息
  warehouseGetItem: config.BaseUrl + '/merchant/virtualWarehouse/getItem',

  // 修改虚拟库商品信息
  warehouseUpdateItem: config.BaseUrl + '/merchant/virtualWarehouse/updateItem',

  // 修改虚拟库信息
  warehouseUpdate: config.BaseUrl + '/merchant/virtualWarehouse/updateVirtualWarehouse',

  //---------------------------- 伙伴计划 -------------------------------

  // 伙伴计划申请
  partnerApply: config.BaseUrl + '/merchant/partnerPlan/apply',

  // 伙伴计划再次申请
  partnerApplyAgain: config.BaseUrl + '/merchant/partnerPlan/againApply',

  // 获取伙伴计划状态枚举
  partnerGetEnum: config.BaseUrl + '/merchant/partnerPlan/getEnum',

  // 伙伴计划查询
  partnerGetInfo: config.BaseUrl + '/merchant/partnerPlan/getInfo',

  // 停用伙伴计划
  partnerStop: config.BaseUrl + '/merchant/partnerPlan/stop',

  //---------------------------- 黑名单撤销申请 -------------------------------
  // 获取黑名单用户详细信息
  getBlackListUserDetails: config.BaseUrl + '/merchant/back/userManage/getBlackListUserDetails',

  // 黑名单撤销申请
  revokeBlackListApply: config.BaseUrl + '/merchant/back/userManage/revokeBlackListApply',

  // 获取黑名单申请状态枚举
  getBlackListApplyStatusEnum: config.BaseUrl + '/merchant/back/userManage/getBlackListApplyStatusEnum',

  //---------------------------- 返利申请 -------------------------------
  // 提交返利申请
  commitRebateForm: config.BaseUrl + '/merchant/back/rebateManage/applyRebate',

  // 获取返利申请记录
  getRebateApplyData: config.BaseUrl + '/merchant/back/rebateManage/getRebateApplyData',

  // 获取返利流水记录
  getRebateFlowData: config.BaseUrl + '/merchant/back/rebateManage/getRebateFlowData',

  // 获取个人返利数据
  getRebateData: config.BaseUrl + '/merchant/back/rebateManage/getRebateData',

  // 获取可用返利金额(提交订单)
  getRebateMoney: config.BaseUrl + '/merchant/back/rebateManage/getRebateMoney',

  // 获取返利申请状态枚举
  getRebateApplyStatusList: config.BaseUrl + '/merchant/back/rebateManage/getRebateApplyStatusList',

  // 获取出库单验收详情
  getChildOrderConfirmData: config.BaseUrl + '/merchant/orderConfirm/getChildOrderConfirmData',

}
