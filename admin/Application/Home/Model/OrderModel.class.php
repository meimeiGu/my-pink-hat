<?php

namespace Home\Model;
use Think\Model\RelationModel;
class OrderModel extends RelationModel{

    protected $_link = array(
        'Singleorder'=> array(
            'mapping_type'=>self::HAS_MANY,
            'class_name'=>'Singleorder',
            'foreign_key'=>'orderId',
            'mapping_name'=>'singleorders',
            'mapping_fields'=>'orderId,orderSid,goodsId,skuId,skuPic,goodsPrice,orderSnum,goodsName,skuName',
        )
    );


}

?>