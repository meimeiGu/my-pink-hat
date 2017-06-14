<?php

namespace Home\Model;
use Think\Model\RelationModel;
class GoodsModel extends RelationModel{

    protected $_link = array(
        'Sku'=> array(
            'mapping_type'=>self::HAS_MANY,
            'class_name'=>'Sku',
            'foreign_key'=>'goodsId',
            'mapping_name'=>'skus',
            'mapping_fields'=>'skuId,skuName,skuPrice,skuState',
        )
    );


}

?>