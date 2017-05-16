CREATE TABLE `xyb_user` (
  `userId` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户编号',
  `nickname` varchar(20) DEFAULT NULL COMMENT '昵称',  
  `userType` tinyint(4) NOT NULL DEFAULT '0' COMMENT '类型0:普通用户，1:商家',
  `areaId` smallint(6) NOT NULL DEFAULT '0' COMMENT '区域id',
  `areaName` varchar(50) DEFAULT NULL COMMENT '区域名称',
  `qqId` varchar(50) DEFAULT NULL COMMENT 'qqid',
  `wxOpenId` varchar(50) DEFAULT NULL COMMENT '微信openid',
  `grade` tinyint(4) NOT NULL DEFAULT '0' COMMENT '等级',
  `password` char(32) DEFAULT NULL COMMENT '密码',
  `email` varchar(30) DEFAULT NULL COMMENT '邮箱',
  `phone` varchar(12) DEFAULT NULL COMMENT '电话',
  `qq` varchar(12) DEFAULT NULL COMMENT 'qq',
  `registerTime` datetime DEFAULT NULL COMMENT '注册时间',
  `image` varchar(300) DEFAULT NULL COMMENT '头像',
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=1000 DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `xyb_gbgoods`;
CREATE TABLE `xyb_gbgoods` (
  `gbgoods_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '团购商品编号',
  `gbgoods_name` varchar(20) DEFAULT NULL COMMENT '团购商品名称',  
  `gbgoods_originprice` decimal(10,2) DEFAULT NULL  COMMENT '团购商品原价', 
  `gbgoods_price` decimal(10,2) DEFAULT NULL COMMENT '团购商品价格',
  `gbgoods_gbprice` decimal(10,2) DEFAULT NULL COMMENT '团购商品团购价',
  `gbgoods_pic` varchar(50) DEFAULT NULL COMMENT '轮播图片',
  `gbgoods_pnum` tinyint(4) DEFAULT NULL COMMENT '规定团购人数',
  `gbgoods_gbnum` int(11) DEFAULT NULL COMMENT '已团人数',
  `gbgoods_num` int(30) DEFAULT NULL COMMENT '剩余数量',
  `gbgoods_details` mediumtext DEFAULT NULL COMMENT '商品详情',
  `gbgoods_picdetails` mediumtext DEFAULT NULL COMMENT '商品图片详情',  
  PRIMARY KEY (`gbgoods_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `xyb_gbrull`;
CREATE TABLE `xyb_gbrull` ( 
  `gbrull_id` smallint(6) DEFAULT NULL AUTO_INCREMENT COMMENT '服务编号',
  `gbrull_title` varchar(30) DEFAULT NULL COMMENT '服务标题',
  `gbrull_comment` varchar(50) DEFAULT NULL COMMENT '服务解释',
  PRIMARY KEY (`gbrull_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `xyb_gborder`;
CREATE TABLE `xyb_gborder` (
  `gborder_id` smallint(6) NOT NULL AUTO_INCREMENT COMMENT '总订单编号',
  `userId` smallint(6) DEFAULT NULL COMMENT '用户编号',
  `gborder_state` tinyint(4) DEFAULT NULL COMMENT '总订单状态',
  `gborder_time` datetime DEFAULT NULL COMMENT '总订单时间',
  `gborder_price` decimal(8,1) DEFAULT NULL COMMENT '订单总价格',
  `gborder_phone` varchar(12) DEFAULT NULL COMMENT '订单联系人号码',
  PRIMARY KEY (`gborder_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `xyb_gbsingleorder`;
CREATE TABLE `xyb_gbsingleorder` (
  `gbsingleorder_id` smallint(6) NOT NULL AUTO_INCREMENT COMMENT '订单单条商品编号',
  `gborder_id` smallint(6) DEFAULT NULL COMMENT '总订单编号',
  `userId` int(11) DEFAULT NULL COMMENT '用户编号',
  `gbgoods_id` int(11) DEFAULT NULL COMMENT '团购商品编号',
  `gbsingleorder_price` decimal(5,1) DEFAULT NULL COMMENT '单条商品价格',
  `gbsingleorder_num` smallint(6) DEFAULT NULL COMMENT '单条商品数量',
  `gbsingleorder_state` smallint(6) DEFAULT NULL COMMENT '单挑商品状态',
  PRIMARY KEY (`gbsingleorder_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

